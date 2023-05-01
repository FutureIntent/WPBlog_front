import CryotherapyStudyLinks from '@components/routes/Press/CryotherapyStudyLinks';
import HeroBanner from '@components/routes/Press/HeroBanner';
import Studies from '@components/routes/Press/Studies';
import WantToCollaborate from '@components/routes/Reviews/WantToCollaborate';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Press = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <Studies />
            <CryotherapyStudyLinks />
            <WantToCollaborate />
        </Layout>
    </>
);

export default Press;

export const query = graphql`
    query pressLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["press", "commons"] } }
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
