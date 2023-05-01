import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import BuyCryoCTATemplate from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';

const query = graphql`
    query cryoOriginalsSecondCtaImages {
        bg: file(relativePath: { eq: "LocalTherapy/general_gallery-4.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        productImg: file(relativePath: { eq: "Products/product_xcryo.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const SecondCta = () => {
    const { t } = useTranslation();
    const { bg, productImg } = useStaticQuery(query);

    return (
        <Box as="section" pt="8.5rem" position="relative">
            <BuyCryoCTATemplate
                productName={t('products.localTherapy')}
                image={bg.childImageSharp.gatsbyImageData}
                caption={t('buyToday.heading')}
                price="3395"
                productImg={productImg.childImageSharp.gatsbyImageData}
                flipped
            />
        </Box>
    );
};

export default SecondCta;
