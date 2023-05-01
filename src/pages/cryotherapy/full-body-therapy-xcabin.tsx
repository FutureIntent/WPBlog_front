import BusinessSolutions from '@components/routes/CryoCabin/BusinessSolutions';
import BuyCryoCabinCta from '@components/routes/CryoCabin/BuyCryoCabinCta';
import ClinicalStudiesAndInfo from '@components/routes/CryoCabin/ClinicalStudiesAndInfo';
import CryotheraphyBenefits from '@components/routes/CryoCabin/CryotheraphyBenefits';
import GalleryPreviewWrapper from '@components/routes/CryoCabin/GalleryPreviewWrapper';
import HealthSupport from '@components/routes/CryoCabin/HealthSupport';
import HeroBanner from '@components/routes/CryoCabin/HeroBanner';
import ShowCase from '@components/routes/CryoCabin/ShowCase';
import UltimateEnhancement from '@components/routes/CryoCabin/UltimateEnhancement';
import WhatIsCryoCabin from '@components/routes/CryoCabin/WhatIsCryoCabin';
import Opportunities from '@components/routes/XCryoOriginal/Opportunities';
import Delivery from '@components/routes/shared/Delivery/Delivery';
import Review from '@components/routes/shared/Review';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import GetStartedModal from '@components/organisms/Modals/GetStartedModal';

import Layout from '@components/templates/Layout';

const BodyTherapyXtone = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <WhatIsCryoCabin />
            <ShowCase />
            <UltimateEnhancement />
            <BuyCryoCabinCta />
            <HealthSupport />
            <CryotheraphyBenefits />
            <BusinessSolutions />
            <ClinicalStudiesAndInfo />
            <Review />
            <GalleryPreviewWrapper />
            <BuyCryoCabinCta flipped />
            <Opportunities />
            <Delivery />

            <GetStartedModal />
        </Layout>
    </>
);

export default BodyTherapyXtone;

export const query = graphql`
    query fullBodyTherapyLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["fullBodyTherapy", "commons"] } }
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
