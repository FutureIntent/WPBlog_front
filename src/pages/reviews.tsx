// import Event from '@components/routes/Reviews/Event';
import Expressions from '@components/routes/Reviews/Expressions';
import HeroBanner from '@components/routes/Reviews/HeroBanner';
import WantToCollaborate from '@components/routes/Reviews/WantToCollaborate';
import { PageProps } from 'gatsby';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';

const Reviews = ({ pageContext }: PageProps) => (
    <>
        <SEO />
        <Layout pageContext={pageContext}>
            <HeroBanner />
            <Expressions />
            {/* <Event /> */}
            <WantToCollaborate />
        </Layout>
    </>
);

export default Reviews;
