import FormBlock from '@components/routes/AboutUs/FormBlock';
import HeroBanner from '@components/routes/Gallery/HeroBanner';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Gallery = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <FormBlock />
        </Layout>
    </>
);

export default Gallery;

export const query = graphql`
    query galleryLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["gallery", "commons"] } }
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
