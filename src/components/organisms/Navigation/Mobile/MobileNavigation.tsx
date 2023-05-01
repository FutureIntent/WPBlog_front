import { Drawer } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import BurgerMenu from '@components/molecules/Icons/BurgerMenu';
import CloseBtn from '@components/molecules/Icons/CloseBtn';
import LogoColored from '@components/molecules/Icons/LogoColored';

import ExpandableMenu from '@components/organisms/Navigation/Mobile/ExpandableMenu';
import { MenuLinks, StyledLink } from '@components/organisms/Navigation/Navigation';
import { useI18next } from 'gatsby-plugin-react-i18next';

const StyledToggleWrapper = styled.div`
    cursor: pointer;
`;

const StyledCloseBtn = styled(CloseBtn)`
    cursor: pointer;
`;

const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paperAnchorRight {
        width: 90%;
    }

    a.active-link > * {
        color: var(--blue-brand) !important;
    }
`;

const query = graphql`
    query MobMenu {
        site {
            siteMetadata {
                menuLinks {
                    name
                    link
                    isHidden
                    subMenu {
                        name
                        link
                        isHidden
                    }
                }
            }
        }
    }
`;

const MobileNavigation = ({ hasWhiteHeader }: { hasWhiteHeader: boolean }) => {
    const { language, defaultLanguage } = useI18next();
    const langRoute = language !== defaultLanguage ? `/${language}` : '';
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const DrawerContainerRef = useRef<HTMLDivElement | null>(null);
    const { site } = useStaticQuery(query);
    const gatsbyBreakpoints = useBreakpoint();
    const links = site.siteMetadata.menuLinks.filter(
        (link: Record<string, any>) => !link.isHidden,
    );

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
        <div ref={DrawerContainerRef}>
            <StyledToggleWrapper role="none" onClick={openDrawer}>
                <BurgerMenu
                    size="large3"
                    color={hasWhiteHeader ? 'var(--grey-dark)' : 'var(--white)'}
                />
            </StyledToggleWrapper>
            <StyledDrawer
                anchor="right"
                open={isOpen}
                onClose={closeDrawer}
                container={DrawerContainerRef?.current}
            >
                <Box p={{ _: '1rem 1rem 1.5rem', tablet: '1.875rem 2.5rem' }}>
                    <Box display="flex" justifyContent="space-between">
                        <Box maxWidth={{ _: '150px', tablet: '225px' }}>
                            <LogoColored size="fullWidth" />
                        </Box>
                        <div role="none" onClick={closeDrawer}>
                            <StyledCloseBtn
                                size={gatsbyBreakpoints.tablet ? 'large3' : 'large'}
                                color="var(--grey-dark)"
                            />
                        </div>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems={{ _: 'flex-end', tablet: 'flex-start' }}
                        mt="6rem"
                        ml="clamp(1.875rem, 10vw ,14.5rem)"
                    >
                        {links.map((item: MenuLinks) =>
                            item.subMenu?.length ? (
                                <ExpandableMenu
                                    item={item}
                                    key={item.name}
                                    handleClose={closeDrawer}
                                />
                            ) : (
                                <div key={item.name}>
                                    <StyledLink
                                        key={item.name}
                                        to={`${langRoute}${item.link}`}
                                        style={{ display: 'block', padding: '6px 0' }}
                                        activeClassName="active-link"
                                        onClick={closeDrawer}
                                    >
                                        <Typography
                                            as="p"
                                            display="inline-block"
                                            variant="h3"
                                            color="var(--black-brand)"
                                            hoverColor="var(--blue-brand)"
                                            mb="unset"
                                            transformText="uppercase"
                                        >
                                            {item.name}
                                        </Typography>
                                    </StyledLink>
                                </div>
                            ),
                        )}
                    </Box>
                </Box>
            </StyledDrawer>
        </div>
    );
};

export default MobileNavigation;
