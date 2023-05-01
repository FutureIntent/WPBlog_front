import HeroBanner from '@components/routes/BusinessAndCryo/HeroBanner';
import HowWeWork from '@components/routes/BusinessAndCryo/HowWeWork';
import Support from '@components/routes/Home/Support';
import WantToCollaborate from '@components/routes/Reviews/WantToCollaborate';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const BusinessAndCryo = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <HowWeWork />
            <Support center />
            <WantToCollaborate />
        </Layout>
    </>
);

export default BusinessAndCryo;

export const query = graphql`
    query businessAndCryoLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["businessAndCryo", "commons"] } }
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
