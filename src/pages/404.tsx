import routeMap from '@utils/routeMap';
import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { SizeProps } from 'styled-system';

import SEO from '@theme/SEO';
import { Theme } from '@theme/configs';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import LinkAsButton from '@components/atoms/LinkAsButton';
import Typography from '@components/atoms/Typography';

import Layout from '@components/templates/Layout';

const Error = ({ data, pageContext }: { data: Record<string, any> } & PageProps) => {
    const { t } = useTranslation();
    const { aboutBg } = data;

    return (
        <>
            <SEO />
            <Layout pageContext={pageContext}>
                <BackgroundImage
                    imageData={aboutBg.childImageSharp.gatsbyImageData}
                    overlay="dark"
                    zIndex={0}
                >
                    <Box
                        minHeight={{ _: '568px', tablet: '620px', laptopS: '100vh' }}
                        height="100%"
                        width="100%"
                        display="flex"
                        placeItems="center"
                        placeContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            height="calc(100% + var(--header-height))"
                            width="100%"
                            maxWidth={286}
                        >
                            <Typography
                                style={{ width: '100%' }}
                                as="p"
                                variant="h3"
                                color="var(--white)"
                            >
                                {t('error')}
                            </Typography>
                            <Typography
                                variant="h1"
                                fontSize="150px"
                                lineHeight="1"
                                fontWeight="800"
                                color="var(--white)"
                                textAlign="center"
                                mt={-10}
                            >
                                404
                            </Typography>
                            <Typography
                                style={{ width: '100%' }}
                                as="p"
                                variant="h3"
                                color="var(--white)"
                                textAlign="right"
                                mt={-10}
                            >
                                {t('notFound')}
                            </Typography>
                            <Typography
                                mt={30}
                                mb={45}
                                variant="paragraph"
                                color="var(--white)"
                                textAlign="center"
                            >
                                {t('message')}
                            </Typography>

                            <LinkAsButton
                                to={routeMap.home}
                                variant="primary"
                                size={
                                    'fullWidth' as SizeProps<Theme, 'small' | 'large' | 'fullWidth'>
                                }
                            >
                                <Typography variant="accent" color="var(--white)">
                                    {t('goToHomepage')}
                                </Typography>
                            </LinkAsButton>
                            <LinkAsButton
                                to={routeMap.sitemap}
                                variant="night"
                                size={
                                    'fullWidth' as SizeProps<Theme, 'small' | 'large' | 'fullWidth'>
                                }
                                mt={10}
                            >
                                <Typography variant="accent" color="var(--white)">
                                    {t('showNavigation')}
                                </Typography>
                            </LinkAsButton>
                        </Box>
                    </Box>
                </BackgroundImage>
            </Layout>
        </>
    );
};

export default Error;

export const query = graphql`
    query ErrorPage($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["404", "commons"] } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        aboutBg: file(relativePath: { eq: "Faq/bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;
