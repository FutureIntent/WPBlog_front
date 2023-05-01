import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { CallToActionPrice } from '@components/organisms/CallToAction';

const query = graphql`
    query cabinCta {
        bg: file(relativePath: { eq: "Cabin/cta.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        productImg: file(relativePath: { eq: "Products/product_cryocabin.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BuyCryoCabinCta = ({ flipped = false }: { flipped?: boolean }) => {
    const { t } = useTranslation();
    const { bg, productImg } = useStaticQuery(query);

    return (
        <CallToActionPrice
            productName={t('products.fullBodyTherapy')}
            flipped={flipped}
            image={bg.childImageSharp.gatsbyImageData}
            caption={t('buyToday.heading')}
            price="3395"
            productImg={productImg.childImageSharp.gatsbyImageData}
        />
    );
};

export default BuyCryoCabinCta;
