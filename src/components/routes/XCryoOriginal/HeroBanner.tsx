import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import HeroBannerWithVideoBG from '@components/molecules/HeroBannerWithVideoBG';
import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';

import { VideoPlayerModal } from '@components/organisms/Modals';

const StyledGridParent = styled(GridParent)`
    height: 100%;
    width: 100%;
`;

const StyledArrow = styled(ArrowRightButton)`
    color: var(--white);
    transform: rotate(90deg);
`;

const query = graphql`
    query homePageHeroBanner {
        bgVideo: file(relativePath: { eq: "video/xcryo_bg.mp4" }) {
            publicURL
        }
        fullVideo: file(relativePath: { eq: "video/xcryo.mp4" }) {
            publicURL
        }
        productImg: file(relativePath: { eq: "Products/product_xcryo.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { openModal: openVideoModal } = useModal('XCryoVideoPlayer');
    const { openModal: openGetStartedModal } = useModal(`get-started`);
    const { bgVideo, fullVideo, productImg } = useStaticQuery(query);

    const handleOpenModal = () => {
        openGetStartedModal({
            productName: t('products.localTherapy'),
            productImg: productImg.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <HeroBannerWithVideoBG url={bgVideo.publicURL}>
            <StyledGridParent as="div">
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3 / span 10' }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        height="100%"
                        position="relative"
                        zIndex={theme.zIndices.stepUp}
                    >
                        <Typography variant="h1" as="h2" color="var(--white)">
                            {t('products.localTherapy')}
                        </Typography>
                        <Typography variant="h2" as="h1" color="var(--white)" mb="2rem">
                            {t('heroBanner.heading')}
                        </Typography>
                        <Box display="flex" mt="1.75rem" flexWrap="wrap" gridGap="1.75rem">
                            <Button variant="primary" onClick={handleOpenModal}>
                                <Typography variant="accent" color="var(--white)">
                                    {t('getStarted')}
                                </Typography>
                            </Button>
                            <Button variant="night" onClick={openVideoModal}>
                                <Typography variant="accent" color="var(--white)">
                                    {t('watchVideo')}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </GridChild>
            </StyledGridParent>
            <Box
                position="absolute"
                bottom="5%"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <StyledArrow size="large3" />
                <Typography variant="paragraph" color="var(--white)" mt="1rem">
                    {t('features')}
                </Typography>
            </Box>

            <VideoPlayerModal name="XCryoVideoPlayer" src={fullVideo.publicURL} />
        </HeroBannerWithVideoBG>
    );
};

export default HeroBanner;
