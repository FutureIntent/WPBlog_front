import AreYouWondering from '@components/routes/StartupCost/AreYouWondering';
import BusinessAndCryo from '@components/routes/StartupCost/BusinessAndCryo';
import HeroBanner from '@components/routes/StartupCost/HeroBanner';
import HowWeWork from '@components/routes/StartupCost/HowWeWork';
import StartupCost from '@components/routes/StartupCost/StartupCost';
import Warranty from '@components/routes/StartupCost/Warranty';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const CryotherapyStartupCost = ({ pageContext }: PageProps) => {
    const { language } = useI18next();

    return (
        <>
            <SEO>{language !== 'en' && <meta name="robots" content="noindex, follow" />}</SEO>
            <Layout pageContext={pageContext}>
                <HeroBanner />
                <BusinessAndCryo />
                <StartupCost />
                <HowWeWork />
                <Warranty />
                <AreYouWondering />
            </Layout>
        </>
    );
};

export default CryotherapyStartupCost;

export const query = graphql`
    query cryotherapyStartupLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["startup", "commons"] } }
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
