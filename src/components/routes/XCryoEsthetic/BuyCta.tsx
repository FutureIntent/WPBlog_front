import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import BuyCryoCTATemplate from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';

const query = graphql`
    query faceCta {
        bg: file(relativePath: { eq: "homePage/support_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        productImg: file(relativePath: { eq: "Products/product_mask.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BuyCta = () => {
    const { t } = useTranslation();
    const { bg, productImg } = useStaticQuery(query);

    return (
        <Box as="section" pt={80} pb={140}>
            <BuyCryoCTATemplate
                productName={t('products.faceTherapy')}
                image={bg.childImageSharp.gatsbyImageData}
                caption={t('buyToday.heading')}
                price="3395"
                disclaimer={t('buyToday.disclaimer')}
                productImg={productImg.childImageSharp.gatsbyImageData}
            />
        </Box>
    );
};

export default BuyCta;
