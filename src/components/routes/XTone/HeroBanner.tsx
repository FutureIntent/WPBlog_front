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
import Play from '@components/molecules/Icons/Play';

import { VideoPlayerModal } from '@components/organisms/Modals';

const StyledGridParent = styled(GridParent)`
    height: 100%;
    width: 100%;
`;

const query = graphql`
    query xtoneHeroBannerImages {
        bgVideo: file(relativePath: { eq: "video/xtone_bg.mp4" }) {
            publicURL
        }
        fullVideo: file(relativePath: { eq: "video/xtone.mp4" }) {
            publicURL
        }
        productImg: file(relativePath: { eq: "Products/product_xtone.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { openModal: openVideoModal } = useModal('xToneVideoPlayer');
    const { openModal: openGetStartedModal } = useModal(`get-started`);
    const { bgVideo, fullVideo, productImg } = useStaticQuery(query);

    const handleOpenModal = () => {
        openGetStartedModal({
            productName: t('products.bodyTherapy'),
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
                        <Typography variant="h1" color="var(--white)" transformText="uppercase">
                            {t('heading')}
                        </Typography>
                        <Typography variant="h2" color="var(--white)" mb="2rem">
                            {t('subHeading')}
                        </Typography>
                        <Box display="flex" mt="1.75rem" flexWrap="wrap">
                            <Button variant="primary" onClick={handleOpenModal}>
                                <Typography variant="accent" color="var(--white)">
                                    {t('getStarted')}{' '}
                                </Typography>
                            </Button>
                            <Button
                                variant="night"
                                ml={{ _: 0, tablet: '1.75rem' }}
                                mt={{ _: '1.75rem', tablet: 0 }}
                                onClick={openVideoModal}
                            >
                                <Typography variant="accent" mr="0.75rem" color="var(--white)">
                                    {t('watchVideo')}
                                </Typography>
                                <Play />
                            </Button>
                        </Box>
                    </Box>
                </GridChild>
            </StyledGridParent>
            <VideoPlayerModal name="xToneVideoPlayer" src={fullVideo.publicURL} />
        </HeroBannerWithVideoBG>
    );
};

export default HeroBanner;
