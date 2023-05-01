import OurMarkets from '@components/routes/Markets/OurMarkets';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Market = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <OurMarkets />
        </Layout>
    </>
);

export default Market;

export const query = graphql`
    query marketsLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["markets", "commons"] } }
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
