import ProductBlock from '@components/routes/Boosters/ProductBlock/ProductBlock';
import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import CryoHair from '@components/molecules/Icons/Boosters/CryoHair';
import CryoHairWhite from '@components/molecules/Icons/Boosters/CryoHairWhite';

const query = graphql`
    query hairProductImg {
        hair: file(relativePath: { eq: "Boosters/cryo_hair.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ProductCryoHair = () => {
    const { t } = useTranslation();
    const { hair } = useStaticQuery(query);
    const { openModal } = useModal(`get-started`);

    const handleOpenModal = () => {
        openModal({
            productName: t('products.skinTherapy'),
            productImg: hair.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <ProductBlock productImg={hair.childImageSharp.gatsbyImageData} textSvg={<CryoHairWhite />}>
            <Box width="142px" height="78px">
                <CryoHair />
            </Box>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('hairProduct.caption1')}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('hairProduct.caption2')}
            </Typography>
            <Box display="flex" mt="1.75rem" flexWrap="wrap">
                <Button variant="primary" onClick={handleOpenModal}>
                    <Typography variant="accent" color="var(--white)">
                        {t('getYourBooster')}
                    </Typography>
                </Button>
            </Box>
        </ProductBlock>
    );
};

export default ProductCryoHair;
