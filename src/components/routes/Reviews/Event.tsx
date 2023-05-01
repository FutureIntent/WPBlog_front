// import { useSwiper } from '@hooks';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';
// import { StaticImage } from 'gatsby-plugin-image';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import Swiper from 'swiper';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

// import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
// import ArrowRight from '@components/molecules/Icons/ArrowRight';
// import Slider from '@components/molecules/Slider';

const Event = () => {
    return null;
    const { t } = useTranslation();
    // const gatsbyBreakpoints = useBreakpoint();
    // const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    // const { sliderRef, thumbsSliderRef, nextSlide, prevSlide } = useSwiper();

    return (
        <Box my={{ _: '8rem', laptopS: '8.5rem' }}>
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', desktop: '3/ span 5' }}>
                    <Box position="relative">
                        {/* <Slider thumbs={{ swiper: thumbsSwiper }} sliderRef={sliderRef}> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="../../../assets/Cabin/cryo_benefit_beauty.jpg" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/*    <StaticImage */}
                        {/*        layout="fullWidth" */}
                        {/*        aspectRatio={745 / 690} */}
                        {/*        src="../../../assets/Cabin/cryo_benefit_health.jpg" */}
                        {/*        alt="guests" */}
                        {/*    /> */}
                        {/* </Slider> */}
                        <Box
                            width="100%"
                            maxWidth="100%"
                            mt="2.1rem"
                            position="absolute"
                            bottom={{ _: '1rem', tablet: '8.125rem', desktop: '2rem' }}
                            zIndex={10}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            {/* {gatsbyBreakpoints.laptopS && ( */}
                            {/*    <Box */}
                            {/*        aria-label="Previous" */}
                            {/*        aria-describedby="Show previous slide" */}
                            {/*        mx="2rem" */}
                            {/*        onClick={prevSlide} */}
                            {/*        zIndex={theme.zIndices.sliderArrows} */}
                            {/*        display="inline-flex" */}
                            {/*        height="100%" */}
                            {/*        justifyContent="flex-start" */}
                            {/*        alignItems="center" */}
                            {/*    > */}
                            {/*        <ArrowLeft size="large" color="var(--grey-dark)" /> */}
                            {/*    </Box> */}
                            {/* )} */}
                            <Box
                                width="100%"
                                mx={{ _: '0', tablet: '4rem', desktop: '1.25rem' }}
                                overflow="hidden"
                            >
                                {/* <Slider */}
                                {/*    spaceBetween={gatsbyBreakpoints.tablet ? 20 : 10} */}
                                {/*    slidesPerView={gatsbyBreakpoints.tablet ? 6 : 4.5} */}
                                {/*    sliderRef={thumbsSliderRef} */}
                                {/*    onSwiper={setThumbsSwiper} */}
                                {/* > */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_beauty.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_health.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_sports.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_beauty.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_health.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_beauty.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/*    <StaticImage */}
                                {/*        layout="fullWidth" */}
                                {/*        src="../../../assets/Cabin/cryo_benefit_health.jpg" */}
                                {/*        alt="guests" */}
                                {/*    /> */}
                                {/* </Slider> */}
                            </Box>
                            {/* {gatsbyBreakpoints.laptopS && ( */}
                            {/*    <Box */}
                            {/*        aria-label="Next" */}
                            {/*        aria-describedby="Show next slide" */}
                            {/*        mx="2rem" */}
                            {/*        onClick={nextSlide} */}
                            {/*        zIndex={theme.zIndices.sliderArrows} */}
                            {/*        display="inline-flex" */}
                            {/*        height="100%" */}
                            {/*        justifyContent="flex-end" */}
                            {/*        alignItems="center" */}
                            {/*    > */}
                            {/*        <ArrowRight size="large" color="var(--grey-dark)" /> */}
                            {/*    </Box> */}
                            {/* )} */}
                        </Box>
                    </Box>
                </GridChild>
                <GridChild
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', desktop: '8/ span 3' }}
                >
                    <Box display="flex" alignItems="center" height="100%">
                        <Box
                            p={{ _: '1.5rem', tablet: '2.5rem 2.5rem 4.625rem' }}
                            boxShadow={theme.shadows.card}
                            backgroundColor="var(--white)"
                            position="relative"
                            top={{ _: 0, tablet: '-7rem', desktop: 0 }}
                            left={{ _: 'unset', desktop: '-4rem' }}
                            zIndex={theme.zIndices.stepUp}
                        >
                            <Typography variant="h3" color="var(--black-brand)" mb="0.5rem">
                                {t('Event name')}
                            </Typography>
                            <Typography variant="accent" color="var(--black-brand)">
                                Event description dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy
                            </Typography>
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default Event;
