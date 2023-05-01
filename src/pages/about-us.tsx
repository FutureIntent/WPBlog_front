import FormBlock from '@components/routes/AboutUs/FormBlock';
import HeroBanner from '@components/routes/AboutUs/HeroBanner';
import Team from '@components/routes/AboutUs/Team';
import WhoWeAre from '@components/routes/AboutUs/WhoWeAre';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const AboutUs = ({ pageContext }: PageProps) => (
    <>
        <SEO>
            <meta name="robots" content="noindex, follow" />
        </SEO>
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <WhoWeAre />
            <Team />
            <FormBlock />
        </Layout>
    </>
);

export default AboutUs;

export const query = graphql`
    query aboutUsLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["aboutUs", "commons"] } }
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
