import CTA from '@components/routes/Home/CTA';
import { useLocation } from '@reach/router';
// import { AnimatePresence, motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactNode, ReactElement, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import ModalProvider from '@providers/ModalProvider';
import ThemeProvider from '@providers/ThemeProvider';

import GlobalStyle from '@theme/GlobalStyles';

import Box from '@components/atoms/Box';

import Footer from '@components/organisms/Footer/Footer';
import Header from '@components/organisms/Header/Header';
import { Menu, MenuLinks } from '@components/organisms/Navigation/Navigation';

const menuQuery = graphql`
    query menu {
        site {
            siteMetadata {
                menuLinks {
                    name
                    link
                    hasCta
                    hasWhiteHeader
                    subMenu {
                        name
                        link
                        hasCta
                        hasWhiteHeader
                        isStatic
                    }
                }
            }
        }
    }
`;

type LayoutProps = {
    children: ReactNode;
};

const deepFilter = (menuLinks: MenuLinks[], pathname: string) => {
    let activeLink = {
        name: '',
        link: pathname,
        hasCta: false,
        hasWhiteHeader: false,
        isStatic: false,
    };

    menuLinks.forEach((menuLink) => {
        if (menuLink?.subMenu !== null) {
            menuLink.subMenu.forEach((subMenuLink) => {
                if (pathname.includes(subMenuLink.link)) {
                    activeLink = subMenuLink;
                }
            });
        } else if (pathname.includes(menuLink.link)) {
            activeLink = menuLink;
        }
    });

    return activeLink;
};

// const duration = 0.3;

// const variants = {
//     initial: {
//         opacity: 0,
//     },
//     enter: {
//         opacity: 1,
//         transition: {
//             duration,
//             delay: duration,
//         },
//     },
//     exit: {
//         opacity: 0,
//         transition: { duration },
//     },
// };

const Layout = ({ children, pageContext }: LayoutProps & { pageContext: any }): ReactElement => {
    const location = useLocation();
    const { language, i18n } = pageContext;
    const { site } = useStaticQuery(menuQuery);
    const currentLocation: MenuLinks | Menu = useMemo(
        () => deepFilter(site.siteMetadata.menuLinks, location.pathname),
        [location.pathname],
    );

    return (
        <ThemeProvider>
            <ParallaxProvider>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <GlobalStyle />
                {/* <AnimatePresence exitBeforeEnter> */}
                <div>
                    <Header
                        lang={language}
                        originalPath={i18n.originalPath}
                        hasWhiteHeader={currentLocation?.hasWhiteHeader}
                        isStatic={currentLocation?.isStatic}
                    />
                    <Box
                        as="main"
                        minHeight="calc(100vh - var(--footer-height) - var(--bottom-cta-height))"
                    >
                        <ModalProvider>
                            {children}
                            {currentLocation?.hasCta && <CTA />}
                        </ModalProvider>
                    </Box>
                    <Footer lang={language} originalPath={i18n.originalPath} />
                </div>
                {/* </AnimatePresence> */}
            </ParallaxProvider>
        </ThemeProvider>
    );
};

export default Layout;
