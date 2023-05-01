import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import BuyCryoCTATemplate from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';

const query = graphql`
    query buyCryoImg {
        buyCryo: file(relativePath: { eq: "LocalTherapy/general_gallery-4.jpg" }) {
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

const BuyXcryoCta = () => {
    const { t } = useTranslation();
    const { buyCryo, productImg } = useStaticQuery(query);

    return (
        <Box as="section" pt="5.75rem" position="relative">
            <BuyCryoCTATemplate
                image={buyCryo.childImageSharp.gatsbyImageData}
                productName={t('products.localTherapy')}
                caption={t('buyToday.heading')}
                price="3395"
                productImg={productImg.childImageSharp.gatsbyImageData}
            />
        </Box>
    );
};

export default BuyXcryoCta;
