import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import theme from '@theme/configs';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledContent = styled(Box)`
    z-index: -1;

    &::after {
        align-items: center;
        background: transparent linear-gradient(180deg, #070f39b3 0%, #070f3900 100%) 0% 0%
            no-repeat padding-box;
        content: '';
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

const StyledGridParent = styled(GridParent)`
    height: 100%;
    width: 100%;
`;

const query = graphql`
    query boosterHeroBannerImages {
        img: file(relativePath: { eq: "Boosters/booster_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        productImg: file(relativePath: { eq: "Products/product_booster.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { openModal } = useModal(`get-started`);
    const { img, productImg } = useStaticQuery(query);

    const handleOpenModal = () => {
        openModal({
            productName: t('products.skinTherapy'),
            productImg: productImg.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <StyledContent position="relative" height="100vh">
            <BackgroundImage
                fixed
                imageData={img.childImageSharp.gatsbyImageData}
                overlay="vertical"
            >
                <Box position="absolute" width="100%" height="100%" alignItems="center">
                    <StyledGridParent as="div">
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '3 / span 10' }}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                flexDirection="column"
                                height="100%"
                                position="relative"
                                mt={{ _: '4.6875rem', laptopS: '0' }}
                                zIndex={theme.zIndices.stepUp}
                            >
                                <Typography variant="h1" color="var(--white)">
                                    {t('heading')}
                                </Typography>
                                <Typography variant="h2" color="var(--white)" mb="2rem">
                                    {t('subHeading')}
                                </Typography>
                                <Box display="flex" mt="1.75rem" flexWrap="wrap">
                                    <Button variant="primary" onClick={handleOpenModal}>
                                        <Typography variant="accent" color="var(--white)">
                                            {t('getStarted')}
                                        </Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </GridChild>
                    </StyledGridParent>
                </Box>
            </BackgroundImage>
        </StyledContent>
    );
};

export default HeroBanner;
