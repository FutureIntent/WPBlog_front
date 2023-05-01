import ProductBlock from '@components/routes/Boosters/ProductBlock/ProductBlock';
import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import CryoFysio from '@components/molecules/Icons/Boosters/CryoFysio';
import CryoFysioWhite from '@components/molecules/Icons/Boosters/CryoFysioWhite';

const query = graphql`
    query fysioProductImg {
        fysio: file(relativePath: { eq: "Boosters/cryo_fysio.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ProductCryoFysio = () => {
    const { t } = useTranslation();
    const { fysio } = useStaticQuery(query);
    const { openModal } = useModal(`get-started`);

    const handleOpenModal = () => {
        openModal({
            productName: t('products.skinTherapy'),
            productImg: fysio.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <ProductBlock
            flipped
            productImg={fysio.childImageSharp.gatsbyImageData}
            textSvg={<CryoFysioWhite />}
        >
            <Box width="142px" height="78px">
                <CryoFysio />
            </Box>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('fysioProduct.caption1')}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('fysioProduct.caption2')}
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

export default ProductCryoFysio;
