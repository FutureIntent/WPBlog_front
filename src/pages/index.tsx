import Opportunities from '@components/routes/XCryoOriginal/Opportunities';
import Delivery from '@components/routes/shared/Delivery/Delivery';
import Review from '@components/routes/shared/Review';
// import Certificates from '@pages/../components/routes/Home/Certificates';
import Cryotherapy from '@pages/../components/routes/Home/Cryotherapy';
import GotQuestion from '@pages/../components/routes/Home/GotQuestion';
import HeroBanner from '@pages/../components/routes/Home/HeroBanner';
import Industries from '@pages/../components/routes/Home/Industries';
import Markets from '@pages/../components/routes/Home/Markets';
import Services from '@pages/../components/routes/Home/Services';
import Support from '@pages/../components/routes/Home/Support';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

import SEO from '@theme/SEO';

import GetStartedModal from '@components/organisms/Modals/GetStartedModal';

import Layout from '@components/templates/Layout';

export const query = graphql`
    query homeLang($language: String!) {
        locales: allLocale(
            filter: {
                language: { eq: $language }
                ns: { in: ["commons", "marketsShared", "homePage"] }
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

const Index = ({ pageContext }: PageProps) => (
    <>
        <SEO>
            <meta
                name="google-site-verification"
                content="k02c4n2EUzDapy5VppDntTCSGJZPSIk-ddCMniYFYO8"
            />
        </SEO>
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <Services />
            <Cryotherapy />
            <Industries />
            <Markets />
            <Support />
            {/* <Certificates /> */}
            <Review />
            <GotQuestion />
            <Opportunities hasHeading={false} />
            <Delivery />
            <GetStartedModal />
        </Layout>
    </>
);

export default Index;
