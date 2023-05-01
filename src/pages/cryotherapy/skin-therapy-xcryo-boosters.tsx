import GotQuestionForm from '@components/routes/Boosters/GotQuestionForm';
import HeroBanner from '@components/routes/Boosters/HeroBanner';
import ProductCryoDerma from '@components/routes/Boosters/ProductCryoDerma';
import ProductCryoFysio from '@components/routes/Boosters/ProductCryoFysio';
import ProductCryoHair from '@components/routes/Boosters/ProductCryoHair';
import WhatIsBoosters from '@components/routes/Boosters/WhatIsBoosters';
import Opportunities from '@components/routes/XCryoOriginal/Opportunities';
import Delivery from '@components/routes/shared/Delivery/Delivery';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import GetStartedModal from '@components/organisms/Modals/GetStartedModal';

import Layout from '@components/templates/Layout';

const BoosterTherapy = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <WhatIsBoosters />
            <ProductCryoDerma />
            <ProductCryoFysio />
            <ProductCryoHair />
            <GotQuestionForm />
            <Opportunities />
            <Delivery />

            <GetStartedModal />
        </Layout>
    </>
);

export default BoosterTherapy;

export const query = graphql`
    query skinTherapyLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["skinTherapy", "commons"] } }
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
