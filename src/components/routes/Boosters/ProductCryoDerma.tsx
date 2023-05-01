import ProductBlock from '@components/routes/Boosters/ProductBlock/ProductBlock';
import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import CryoDerma from '@components/molecules/Icons/Boosters/CryoDerma';
import CryoDermaWhite from '@components/molecules/Icons/Boosters/CryoDermaWhite';

const query = graphql`
    query dermProductImg {
        derma: file(relativePath: { eq: "Boosters/cryo_derma.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ProductCryoDerma = () => {
    const { t } = useTranslation();
    const { derma } = useStaticQuery(query);
    const { openModal } = useModal(`get-started`);

    const handleOpenModal = () => {
        openModal({
            productName: t('products.skinTherapy'),
            productImg: derma.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <ProductBlock
            productImg={derma.childImageSharp.gatsbyImageData}
            textSvg={<CryoDermaWhite />}
        >
            <Box width="200px" height="78px">
                <CryoDerma />
            </Box>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('dermaProduct.caption1')}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {t('dermaProduct.caption2')}
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

export default ProductCryoDerma;
