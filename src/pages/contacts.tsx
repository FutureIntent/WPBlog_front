import HeroBanner from '@components/routes/Contacts/HeroBanner';
import GotQuestions from '@components/routes/FAQ/GotQuestions';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Contacts = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <GotQuestions />
        </Layout>
    </>
);

export default Contacts;

export const query = graphql`
    query contactUsLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["contacts", "commons"] } }
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
