import BodyBenefits from '@components/routes/XCryoOriginal/BodyBenefits';
import BuyXcryoCta from '@components/routes/XCryoOriginal/BuyXcryoCta';
import GalleryPreviewWrapper from '@components/routes/XCryoOriginal/GalleryPreviewWrapper';
import HeroBanner from '@components/routes/XCryoOriginal/HeroBanner';
import HowDoesItWork from '@components/routes/XCryoOriginal/HowDoesItWork';
import MeetAllYourNeeds from '@components/routes/XCryoOriginal/MeetAllYourNeeds';
import Opportunities from '@components/routes/XCryoOriginal/Opportunities';
import SecondCta from '@components/routes/XCryoOriginal/SecondCta';
import ShowCase from '@components/routes/XCryoOriginal/ShowCase';
import ShowcaseLocalTreatment from '@components/routes/XCryoOriginal/ShowcaseLocalTreatment';
import Treatments from '@components/routes/XCryoOriginal/Treatments';
import WhatIsCryo from '@components/routes/XCryoOriginal/WhatIsCryo';
import Delivery from '@components/routes/shared/Delivery/Delivery';
import Review from '@components/routes/shared/Review';
import { graphql, PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import GetStartedModal from '@components/organisms/Modals/GetStartedModal';

import Layout from '@components/templates/Layout';

const LocalTherapyXcryoOriginal = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <WhatIsCryo />
            <ShowCase />
            <MeetAllYourNeeds />
            <BuyXcryoCta />
            <HowDoesItWork />
            <ShowcaseLocalTreatment />
            <Treatments />
            <BodyBenefits />
            <Review />
            <GalleryPreviewWrapper />
            <SecondCta />
            <Opportunities />
            <Delivery />

            <GetStartedModal />
        </Layout>
    </>
);

export const query = graphql`
    query localTherapyLang($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["localTherapy", "commons"] } }
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

export default LocalTherapyXcryoOriginal;
