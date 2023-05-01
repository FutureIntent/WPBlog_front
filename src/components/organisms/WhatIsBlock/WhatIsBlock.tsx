import { useModal, useSwiper } from '@hooks';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import Slider, { SliderPagination } from '@components/molecules/Slider';
import SliderArrowBtn from '@components/molecules/Slider/SliderArrowBtn';

import TechSpecsModal from '@components/organisms/Modals/TechSpecsModal';

const StyledArrowBtn = styled(ArrowRightButton)`
    margin-left: 0.5rem;
    vertical-align: middle;
`;

type IMultiLineSlide = {
    title: string;
    content: string;
    content2: string;
};

const MultiLineSlide = ({ title, content, content2 }: IMultiLineSlide) => (
    <Box display="flex" justifyContent="center" flexDirection="column" height="100%">
        <Box>
            <Typography variant="h1" as="h2" color="var(--black-brand)">
                {title}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {content}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)" mt="1.5rem">
                {content2}
            </Typography>
        </Box>
    </Box>
);

const WhatIsBlock = ({
    product,
    staticTitle = true,
}: {
    product: IGatsbyImageData;
    staticTitle?: boolean;
}) => {
    const { t } = useTranslation();
    const { openModal } = useModal(`tech-specs`);
    const [specs, setSpecs] = useState<string[]>([]);
    const [slides, setSlides] = useState<Array<string | IMultiLineSlide>>([]);
    const { sliderRef, sliderPaginationRef, shouldRenderSlider, nextSlide, prevSlide } =
        useSwiper();

    useEffect(() => {
        const translatedSpecs: string[] = [];

        Array.from(Array(15)).forEach((_, i) => {
            translatedSpecs.push(t(`whatIs.specs.spec${i + 1}`));
        });

        setSpecs(Array.from(new Set(translatedSpecs)));

        if (staticTitle) {
            setSlides([
                t('whatIs.slide1'),
                t('whatIs.slide2'),
                t('whatIs.slide3'),
                t('whatIs.slide4'),
            ]);
        } else {
            setSlides([
                {
                    title: t('whatIs.slides.slide1.title'),
                    content: t('whatIs.slides.slide1.content'),
                    content2: t('whatIs.slides.slide1.content2'),
                },
                {
                    title: t('whatIs.slides.slide2.title'),
                    content: t('whatIs.slides.slide2.content'),
                    content2: t('whatIs.slides.slide2.content2'),
                },
                {
                    title: t('whatIs.slides.slide3.title'),
                    content: t('whatIs.slides.slide3.content'),
                    content2: t('whatIs.slides.slide3.content2'),
                },
                {
                    title: t('whatIs.slides.slide4.title'),
                    content: t('whatIs.slides.slide4.content'),
                    content2: t('whatIs.slides.slide4.content2'),
                },
            ]);
        }
    }, [staticTitle, t]);

    return (
        <Box as="section" p="8.75rem 0 12.2rem">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 7', tablet: 'span 5', laptopS: '4 / span 3' }}>
                    <Box
                        position="relative"
                        left={{ _: '-0', tablet: '-2rem' }}
                        data-sal="slide-right"
                        data-sal-easing="ease-out-quart"
                        data-sal-duration={800}
                    >
                        <GatsbyImage image={product} alt={t('whatIs.imageAlt')} />
                    </Box>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 7', laptopS: 'span 4' }}>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                        data-sal="slide-left"
                        data-sal-easing="ease-out-quart"
                        data-sal-duration={800}
                    >
                        <Box>
                            <Box display="flex" justifyContent="center" flexDirection="column">
                                <Box>
                                    {staticTitle && (
                                        <Typography variant="h1" as="h2" color="var(--black-brand)">
                                            {t('whatIs.heading')}
                                        </Typography>
                                    )}
                                    {shouldRenderSlider && (
                                        <Slider
                                            sliderName="what-is"
                                            sliderRef={sliderRef}
                                            paginationRef={sliderPaginationRef}
                                            showNumber
                                        >
                                            {slides.map((slide: any) =>
                                                staticTitle ? (
                                                    <Typography
                                                        key={slide.toString()}
                                                        variant="paragraph"
                                                        color="var(--black-brand)"
                                                        mt="1.5rem"
                                                    >
                                                        {slide.toString()}
                                                    </Typography>
                                                ) : (
                                                    <MultiLineSlide
                                                        key={slide.title}
                                                        title={slide.title}
                                                        content={slide.content}
                                                        content2={slide.content2}
                                                    />
                                                ),
                                            )}
                                        </Slider>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            placeItems="center start"
                            position="relative"
                            mt="3rem"
                            gridGap="0.5rem"
                        >
                            <SliderArrowBtn
                                name="Previous slide"
                                onClick={prevSlide}
                                aria-label="Previous"
                                aria-describedby="Show previous slide"
                            >
                                <ArrowLeft size="medium2" color="var(--grey-dark)" />
                            </SliderArrowBtn>
                            <SliderPagination
                                bulletColor="var(--grey-dark)"
                                className="swiper-pagination"
                                ref={sliderPaginationRef}
                            />
                            <SliderArrowBtn
                                name="Next slide"
                                onClick={nextSlide}
                                aria-label="Next"
                                aria-describedby="Show next slide"
                            >
                                <ArrowRight size="medium2" color="var(--grey-dark)" />
                            </SliderArrowBtn>
                        </Box>
                        <Box
                            display="block"
                            mt="3.125rem"
                            textAlign={{ _: 'center', tablet: 'left' }}
                        >
                            <Box pointer role="button" onClick={openModal} display="inline-block">
                                <Typography variant="accent" color="var(--blue-brand)">
                                    {t('viewTechSpecs')}{' '}
                                    <StyledArrowBtn color="var(--blue-brand)" />
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
            <TechSpecsModal img={product} productName={t('productName')} specs={specs} />
        </Box>
    );
};

export default WhatIsBlock;
