import Compare from '@components/routes/XTone/BeforeAfterResult/Compare';
import { useSwiper } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Swiper from 'swiper';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Slider from '@components/molecules/Slider';

const query = graphql`
    query beforeAfter {
        bg: file(relativePath: { eq: "XTone/img/results.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before1: file(relativePath: { eq: "XTone/img/female_abs_before.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after1: file(relativePath: { eq: "XTone/img/female_abs_after.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before2: file(relativePath: { eq: "XTone/img/man_torso_before.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after2: file(relativePath: { eq: "XTone/img/man_torso_after.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before3: file(relativePath: { eq: "XTone/img/female_abs_before-2.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after3: file(relativePath: { eq: "XTone/img/female_abs_after-2.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before4: file(relativePath: { eq: "XTone/img/female_back_before.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after4: file(relativePath: { eq: "XTone/img/female_back_after.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before5: file(relativePath: { eq: "XTone/img/female_stomach_before.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after5: file(relativePath: { eq: "XTone/img/female_stomach_after.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        before6: file(relativePath: { eq: "XTone/img/female_back_before_2.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after6: file(relativePath: { eq: "XTone/img/female_back_after_2.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview1: file(relativePath: { eq: "XTone/img/female_abs_before_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview2: file(relativePath: { eq: "XTone/img/man_torso_before_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview3: file(relativePath: { eq: "XTone/img/female_abs_before-2_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview4: file(relativePath: { eq: "XTone/img/female_back_before_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview5: file(relativePath: { eq: "XTone/img/female_stomach_before_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        preview6: file(relativePath: { eq: "XTone/img/female_back_before_2_preview.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ThumbsWrapper = styled(Box)`
    .swiper-slide:not(.swiper-slide-thumb-active) {
        filter: grayscale(1);
    }
`;

const BeforeAfterResult = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    const {
        bg,
        before1,
        after1,
        preview1,
        before2,
        after2,
        preview2,
        before3,
        after3,
        preview3,
        before4,
        after4,
        preview4,
        before5,
        after5,
        preview5,
        before6,
        after6,
        preview6,
    } = useStaticQuery(query);

    const { sliderRef, thumbsSliderRef, nextSlide, prevSlide } = useSwiper();

    return (
        <Box as="section" pb="1rem">
            <GridParent noGutter>
                <GridChild gridColumn="span 12">
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--black-brand)"
                        textAlign="center"
                        mt="8.5rem"
                        mb="5.25rem"
                    >
                        {t('beforeAfter.heading')}
                    </Typography>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: 'span 9' }}>
                    <Box boxShadow={theme.shadows.card}>
                        <GridParent noGutter gridTemplateColumns="repeat(9, 1fr)">
                            {gatsbyBreakpoints.laptopS && (
                                <GridChild gridColumn="span 4">
                                    <GatsbyImage
                                        image={bg?.childImageSharp.gatsbyImageData}
                                        alt={t('beforeAfter.imageAlt')}
                                        style={{ height: '100%' }}
                                    />
                                </GridChild>
                            )}
                            <GridChild gridColumn={{ _: 'span 9', laptopS: 'span 5' }}>
                                <Box
                                    p={{ _: '2rem 1rem 3rem', tablet: '3.125rem 2.5rem 3rem' }}
                                    display="flex"
                                    flexDirection="column"
                                    height="100%"
                                >
                                    <Box maxWidth="100%" position="relative" height="100%">
                                        <Box
                                            aria-label="Previous"
                                            aria-describedby="Show previous slide"
                                            onClick={prevSlide}
                                            position="absolute"
                                            left={0}
                                            top={0}
                                            zIndex={theme.zIndices.sliderArrows}
                                            display="flex"
                                            height="100%"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            ml={{ _: 0, tablet: '2.8125rem' }}
                                            pointer
                                        >
                                            <ArrowLeft size="large3" color="var(--white)" />
                                        </Box>
                                        <Slider
                                            sliderName="before-after-result"
                                            thumbs={{ swiper: thumbsSwiper }}
                                            allowTouchMove={false}
                                            sliderRef={sliderRef}
                                        >
                                            <Compare
                                                key="compare-1"
                                                after={after1?.childImageSharp.gatsbyImageData}
                                                before={before1?.childImageSharp.gatsbyImageData}
                                            />
                                            <Compare
                                                key="compare-2"
                                                after={after2?.childImageSharp.gatsbyImageData}
                                                before={before2?.childImageSharp.gatsbyImageData}
                                            />
                                            <Compare
                                                key="compare-3"
                                                after={after3?.childImageSharp.gatsbyImageData}
                                                before={before3?.childImageSharp.gatsbyImageData}
                                            />
                                            <Compare
                                                key="compare-4"
                                                after={after4?.childImageSharp.gatsbyImageData}
                                                before={before4?.childImageSharp.gatsbyImageData}
                                            />
                                            <Compare
                                                key="compare-5"
                                                after={after5?.childImageSharp.gatsbyImageData}
                                                before={before5?.childImageSharp.gatsbyImageData}
                                            />
                                            <Compare
                                                key="compare-6"
                                                after={after6?.childImageSharp.gatsbyImageData}
                                                before={before6?.childImageSharp.gatsbyImageData}
                                            />
                                        </Slider>
                                        <Box
                                            aria-describedby="Show next slide"
                                            onClick={nextSlide}
                                            position="absolute"
                                            top={0}
                                            right={0}
                                            zIndex={theme.zIndices.sliderArrows}
                                            display="flex"
                                            height="100%"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            mr={{ _: 0, tablet: '2.8125rem' }}
                                            pointer
                                        >
                                            <ArrowRight size="large3" color="var(--white)" />
                                        </Box>
                                    </Box>
                                    <ThumbsWrapper maxWidth="100%" mt="2.1rem">
                                        <Slider
                                            sliderName="before-after-thumbs"
                                            spaceBetween={gatsbyBreakpoints.tablet ? 20 : 10}
                                            slidesPerView={gatsbyBreakpoints.tablet ? 6 : 4.5}
                                            sliderRef={thumbsSliderRef}
                                            onSwiper={setThumbsSwiper}
                                        >
                                            <div key="compare-thumb-1">
                                                <GatsbyImage
                                                    imgStyle={
                                                        sliderRef?.current?.swiper.activeIndex === 0
                                                            ? { filter: 'greyscale(1)' }
                                                            : undefined
                                                    }
                                                    image={
                                                        preview1?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 1`}
                                                />
                                            </div>

                                            <div key="compare-thumb-2">
                                                <GatsbyImage
                                                    imgStyle={
                                                        sliderRef?.current?.swiper.activeIndex === 1
                                                            ? { filter: 'greyscale(1)' }
                                                            : undefined
                                                    }
                                                    image={
                                                        preview2?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 2`}
                                                />
                                            </div>

                                            <div key="compare-thumb-3">
                                                <GatsbyImage
                                                    imgStyle={
                                                        sliderRef?.current?.swiper.activeIndex === 2
                                                            ? { filter: 'greyscale(1)' }
                                                            : undefined
                                                    }
                                                    image={
                                                        preview3?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 3`}
                                                />
                                            </div>

                                            <div key="compare-thumb-4">
                                                <GatsbyImage
                                                    imgStyle={
                                                        sliderRef?.current?.swiper.activeIndex === 3
                                                            ? { filter: 'greyscale(1)' }
                                                            : undefined
                                                    }
                                                    image={
                                                        preview4?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 4`}
                                                />
                                            </div>

                                            <div key="compare-thumb-5">
                                                <GatsbyImage
                                                    imgStyle={
                                                        sliderRef?.current?.swiper.activeIndex === 4
                                                            ? { filter: 'greyscale(1)' }
                                                            : undefined
                                                    }
                                                    image={
                                                        preview5?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 5`}
                                                />
                                            </div>

                                            <div key="compare-thumb-6">
                                                <GatsbyImage
                                                    image={
                                                        preview6?.childImageSharp.gatsbyImageData
                                                    }
                                                    alt={`${t('beforeAfter.comparison')} 6`}
                                                />
                                            </div>
                                        </Slider>
                                    </ThumbsWrapper>
                                </Box>
                            </GridChild>
                        </GridParent>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default BeforeAfterResult;
