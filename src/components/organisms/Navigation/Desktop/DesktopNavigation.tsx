import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import DropdownMenu from '@components/organisms/Navigation/Desktop/DropdownMenu';
import { MenuLinks, StyledLink } from '@components/organisms/Navigation/Navigation';

const query = graphql`
    query DesktopMenu {
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

const StyledLinkText = styled(Typography)<{ isActive: boolean; borderBottomColor: string }>`
    position: relative;

    &::after {
        background-color: ${({ isActive, borderBottomColor }) =>
            isActive ? borderBottomColor : 'transparent'};
        bottom: -7px;
        content: '';
        height: 3px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;

const DesktopNavigation = ({
    withBg = false,
    isFooter = false,
    hasWhiteHeader = false,
}: {
    withBg?: boolean;
    isFooter?: boolean;
    hasWhiteHeader?: boolean;
}) => {
    const { language, defaultLanguage } = useI18next();
    const langRoute = language !== defaultLanguage ? `/${language}` : '';
    const location = useLocation();
    const { site } = useStaticQuery(query);
    const shouldBeColored = withBg || hasWhiteHeader;
    let links = site.siteMetadata.menuLinks;

    if (!isFooter) {
        links = links.filter((link: Record<string, any>) => !link.isHidden);
    }

    return (
        <Box
            as="nav"
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
            top={0}
            left={0}
            mt="1rem"
        >
            {links.map((item: MenuLinks) => (
                <div key={item.name}>
                    {item.subMenu?.length ? (
                        <DropdownMenu
                            item={item}
                            withBg={shouldBeColored || isFooter}
                            isFooter={isFooter}
                        >
                            <StyledLinkText
                                isActive={location.pathname.includes(item.link)}
                                variant="caption"
                                color={shouldBeColored ? 'var(--black-brand)' : 'var(--grey-lt)'}
                                mb="unset"
                                transformText="uppercase"
                                borderBottomColor={
                                    shouldBeColored ? 'var(--blue-brand)' : 'var(--white)'
                                }
                            >
                                {item.name}
                            </StyledLinkText>
                        </DropdownMenu>
                    ) : (
                        <StyledLink to={`${langRoute}${item.link}`} whiteBg={shouldBeColored}>
                            <StyledLinkText
                                isActive={location.pathname === item.link}
                                variant="caption"
                                color={shouldBeColored ? 'var(--black-brand)' : 'var(--grey-lt)'}
                                mb="unset"
                                transformText="uppercase"
                                borderBottomColor={
                                    shouldBeColored ? 'var(--blue-brand)' : 'var(--white)'
                                }
                            >
                                {item.name}
                            </StyledLinkText>
                        </StyledLink>
                    )}
                </div>
            ))}
        </Box>
    );
};

export default DesktopNavigation;
