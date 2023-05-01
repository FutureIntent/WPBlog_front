import BuyCta from '@components/routes/XCryoEsthetic/BuyCta';
import Cryomask from '@components/routes/XCryoEsthetic/Cryomask';
import GalleryPreviewWrapper from '@components/routes/XCryoEsthetic/GalleryPreviewWrapper';
import HeroBanner from '@components/routes/XCryoEsthetic/HeroBanner';
import TheCryomaskIs from '@components/routes/XCryoEsthetic/TheCryomaskIs';
import TreatmentThereIs from '@components/routes/XCryoEsthetic/TreatmentThereIs';
import WhatIsEsthetic from '@components/routes/XCryoEsthetic/WhatIsEsthetic';
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
            <WhatIsEsthetic />
            <Cryomask />
            <TreatmentThereIs />
            <TheCryomaskIs />
            <Review />
            <GalleryPreviewWrapper />
            <BuyCta />
            <Opportunities />
            <Delivery />

            <GetStartedModal />
        </Layout>
    </>
);

export default BodyTherapyXtone;

export const query = graphql`
    query faceTherapyLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["faceTherapy", "commons"] } }
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
