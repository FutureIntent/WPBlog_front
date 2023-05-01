import Opportunities from '@components/routes/XCryoOriginal/Opportunities';
import BeforeAfterResult from '@components/routes/XTone/BeforeAfterResult';
import FirstCta from '@components/routes/XTone/FirstCta';
import GainingBestResults from '@components/routes/XTone/GainingBestResults';
import GalleryPreviewWrapper from '@components/routes/XTone/GalleryPreviewWrapper';
import HeroBanner from '@components/routes/XTone/HeroBanner';
import HowDoesItWork from '@components/routes/XTone/HowDoesItWork';
import MuscleImpact from '@components/routes/XTone/MuscleImpact';
import RolledByOurPartner from '@components/routes/XTone/RolledByOurPartner';
import SecondCta from '@components/routes/XTone/SecondCta';
import ShowCase from '@components/routes/XTone/ShowCase';
import WhatIsXtone from '@components/routes/XTone/WhatIsXtone';
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
            <WhatIsXtone />
            <ShowCase />
            <GainingBestResults />
            <FirstCta />
            <HowDoesItWork />
            <RolledByOurPartner />
            <MuscleImpact />
            <BeforeAfterResult />
            <Review />
            <GalleryPreviewWrapper />
            <SecondCta />
            <Opportunities />
            <Delivery />

            <GetStartedModal />
        </Layout>
    </>
);

export default BodyTherapyXtone;

export const query = graphql`
    query bodyTherapyLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["bodyTherapy", "commons"] } }
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
