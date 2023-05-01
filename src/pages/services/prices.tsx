import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import { PriceTabs } from '@components/organisms/PriceTabs';

import Layout from '@components/templates/Layout';

const Prices = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <PriceTabs />
        </Layout>
    </>
);

export default Prices;

export const query = graphql`
    query pricesLang($language: String!) {
        locales: allLocale(
            filter: {
                language: { eq: $language }
                ns: { in: ["prices", "pricesShared", "commons"] }
            }
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
