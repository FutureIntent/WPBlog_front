import IsItBetter from '@components/routes/CostCoolsculpting/IsItBetter';
import IsItWorth from '@components/routes/CostCoolsculpting/IsItWorth';
import WhatIsTheCost from '@components/routes/CostCoolsculpting/WhatIsTheCost';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import SEO from '@theme/SEO';

import { PriceTabs } from '@components/organisms/PriceTabs';

import Layout from '@components/templates/Layout';

const Prices = ({ pageContext }: PageProps) => {
    const { language } = useI18next();

    return (
        <>
            <SEO>{language !== 'en' && <meta name="robots" content="noindex, follow" />}</SEO>
            <Layout pageContext={pageContext}>
                <PriceTabs />
                <WhatIsTheCost />
                <IsItWorth />
                <IsItBetter />
            </Layout>
        </>
    );
};

export default Prices;

export const query = graphql`
    query costCoolSculptingLang($language: String!) {
        locales: allLocale(
            filter: {
                language: { eq: $language }
                ns: { in: ["pricesShared", "costCoolSculptingMachine", "commons"] }
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
