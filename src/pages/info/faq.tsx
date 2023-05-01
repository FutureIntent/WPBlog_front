import GotQuestions from '@components/routes/FAQ/GotQuestions';
import HeroBanner from '@components/routes/FAQ/HeroBanner';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Faq = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <GotQuestions />
        </Layout>
    </>
);

export default Faq;

export const query = graphql`
    query faqLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["faq", "commons"] } }
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
