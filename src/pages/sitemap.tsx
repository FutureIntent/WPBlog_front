import routeMap from '@utils/routeMap';
import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';

import SEO from '@theme/SEO';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import AppLink from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import SiteMapHeading from '@components/molecules/Icons/SiteMapHeading';

import Layout from '@components/templates/Layout';

const PageLink = ({ link, name }: { link: string; name: string }) => (
    <Box>
        <Typography variant="accent" color="var(--blue-brand)">
            —
        </Typography>{' '}
        <AppLink to={link}>
            <Typography variant="accent" color="var(--black-brand)" hoverColor="var(--blue-brand)">
                {name}
            </Typography>
        </AppLink>
    </Box>
);

const LinkGroup = ({ name, noHover = false }: { name: string; noHover?: boolean }) => (
    <Box position="relative">
        <Box position="absolute" top={0} left={0} width={12}>
            <SiteMapHeading size="small" />
        </Box>
        <Typography
            variant="h3"
            color="var(--black-brand)"
            ml={20}
            transformText="capitalize"
            hoverColor={noHover ? undefined : 'var(--blue-brand)'}
        >
            {name}
        </Typography>
    </Box>
);

const ListItem = ({
    item,
    offset = 1,
    isSubItem = false,
}: {
    item: Record<string, any>;
    offset?: number;
    isSubItem?: boolean;
}) => {
    if (item.link === routeMap.sitemap) return null;

    if (item.subMenu) {
        return (
            <Box>
                <LinkGroup name={item.name} noHover />
                <Box ml={offset * 20} mt={10}>
                    {item.subMenu.map((subMenu: Record<string, any>) => (
                        <ListItem key={subMenu.name} item={subMenu} isSubItem offset={offset + 1} />
                    ))}
                </Box>
            </Box>
        );
    }

    if (!isSubItem) {
        return (
            <AppLink to={item.link}>
                <LinkGroup name={item.name} />
            </AppLink>
        );
    }

    return (
        <Box mb={10}>
            <PageLink link={item.link} name={item.name} />
        </Box>
    );
};

const Sitemap = ({ data, pageContext }: { data: Record<string, any> } & PageProps) => {
    const { t } = useTranslation();
    const { menuLinks } = data.pages.siteMetadata;
    const links = menuLinks.filter((link: any) => link.name !== 'Sitemap');
    const half = Math.ceil(links.length / 2);
    const columnOne = links.slice(0, half);
    const columnTwo = links.slice(half);

    return (
        <>
            <SEO />
            <Layout pageContext={pageContext}>
                <Box minHeight="var(--content-minHeight)" p="120px 0 200px">
                    <GridParent>
                        <GridChild gridColumn={{ _: 'span 12', laptop: '4 / span 6' }}>
                            <Typography variant="h2" mb={20}>
                                {t('title')}
                            </Typography>
                        </GridChild>

                        <GridChild
                            gridColumn={{
                                _: 'span 12',
                                tablet: '1 / span 6',
                                laptop: '4 / span 3',
                            }}
                        >
                            <Box display="flex" flexDirection="column" gridGap={20}>
                                {columnOne.map((menuLink: Record<string, any>) => (
                                    <ListItem key={menuLink.name} item={menuLink} offset={1} />
                                ))}
                            </Box>
                        </GridChild>

                        <GridChild
                            gridColumn={{
                                _: 'span 12',
                                tablet: '7 / span 6',
                                laptop: '7 / span 3',
                            }}
                        >
                            <Box display="flex" flexDirection="column" gridGap={20}>
                                {columnTwo.map((menuLink: Record<string, any>) => (
                                    <ListItem key={menuLink.name} item={menuLink} offset={1} />
                                ))}
                            </Box>
                        </GridChild>
                    </GridParent>
                </Box>
            </Layout>
        </>
    );
};

export default Sitemap;

export const query = graphql`
    query sitemapLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["sitemap", "commons"] } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        pages: site {
            siteMetadata {
                menuLinks {
                    name
                    link
                    subMenu {
                        name
                        link
                    }
                }
            }
        }
    }
`;
