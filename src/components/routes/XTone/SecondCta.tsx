import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import BuyCryoCTATemplate from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';

const query = graphql`
    query xtoneSecondCtaImages {
        bg: file(relativePath: { eq: "LocalTherapy/general_gallery-4.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        productImg: file(relativePath: { eq: "Products/product_xtone.png" }) {
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
        <Box as="section" pt="8.5rem" position="relative" pb={140}>
            <BuyCryoCTATemplate
                productName={t('products.bodyTherapy')}
                image={bg.childImageSharp.gatsbyImageData}
                caption={t('buyToday.heading')}
                price="3395"
                flipped
                productImg={productImg.childImageSharp.gatsbyImageData}
            />
        </Box>
    );
};

export default SecondCta;
