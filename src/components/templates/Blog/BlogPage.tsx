import HeroBanner from '@components/routes/Blog/HeroBanner';
import routeMap from '@utils/routeMap';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import SEO from '@theme/SEO';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import LinkWithArrow from '@components/atoms/LinkWithArrow';

import Layout from '@components/templates/Layout';
import { useEffect } from 'react';

const BlogPage = ({ pageContext, data }: any) => {
    const { t } = useTranslation();
    const {wpPost} = data;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {image_url, slug} = wpPost.edges[0].node;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const title = wpPost.edges[0].node.title.rendered;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const content = wpPost.edges[0].node.content.rendered;
    
    return (
        <Layout pageContext={pageContext}>
            <SEO />
            <HeroBanner image_url={image_url} title={title} slug={slug} />
            <Box as="section" mt={100} mb={140}>
                <GridParent as="article">
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                        <div  dangerouslySetInnerHTML={{__html: content}} />
                    </GridChild>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                        <Box textAlign="center">
                            <LinkWithArrow
                                to={routeMap.info.blog}
                                label={t('Go back to blogs')}
                                isGoBackBtn
                            />
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>
        </Layout>
    );
};

export default BlogPage;

export const query = graphql`
    query ($slug: String!, $language: String!) {
        wpPost: allWpPosts (filter: { slug: {eq: $slug}}) {
            edges {
                node {
                    id,
                    slug,
                    title {
                        rendered
                    },
                    image_url,
                    content {
                        rendered
                    }
                }
            }
        }
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["blog", "commons"] } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
