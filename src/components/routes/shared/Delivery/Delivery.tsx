import NextSlide from '@components/routes/shared/Delivery/Controls/NextSlide';
import Pagination from '@components/routes/shared/Delivery/Controls/Pagination';
import PrevSlide from '@components/routes/shared/Delivery/Controls/PrevSlide';
import Slide from '@components/routes/shared/Delivery/Slide';
import TextSlider from '@components/routes/shared/Delivery/TextSlider';
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import styled from 'styled-components';
import Swiper from 'swiper';

import { useSwiper } from '@hooks/useSwiper';

import Box from '@components/atoms/Box';

import Slider from '@components/molecules/Slider';

const query = graphql`
    query deliveryImages {
        slide1: file(relativePath: { eq: "Delivery/slide_1_2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 1835, height: 401)
            }
        }
        slide2: file(relativePath: { eq: "Delivery/slide_2_2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 1835, height: 401)
            }
        }
        slide3: file(relativePath: { eq: "Delivery/slide_3_2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 1835, height: 401)
            }
        }
    }
`;

const Overlay = styled.div`
    background: transparent linear-gradient(180deg, #070f3999 0%, #070f3933 100%) 0% 0% no-repeat
        padding-box;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.stepUp};
`;

const Delivery = ({ withTopMargin = false }: { withTopMargin?: boolean }) => {
    const [firstSwiper, setFirstSwiper] = useState<Swiper | undefined>(undefined);
    const [secondSwiper, setSecondSwiper] = useState<Swiper | undefined>(undefined);
    const { slide1, slide2, slide3 } = useStaticQuery(query);
    const { sliderRef, sliderPaginationRef, shouldRenderSlider, nextSlide, prevSlide } =
        useSwiper();

    const handleFirstSwiperInit = (swiper: any) => setFirstSwiper(swiper);
    const handleSecondSwiperInit = (swiper: any) => setSecondSwiper(swiper);

    return (
        <Box as="section" id="delivery" mt={withTopMargin ? '8.75rem' : '0'} position="relative">
            <Box width="100%" height={450}>
                <PrevSlide prevSlide={prevSlide} />
                {shouldRenderSlider && (
                    <>
                        <TextSlider
                            setSecondSwiper={handleSecondSwiperInit}
                            firstSwiper={firstSwiper}
                        />
                        <Slider
                            sliderName="delivery-slider"
                            sliderRef={sliderRef}
                            paginationRef={sliderPaginationRef}
                            onSwiper={handleFirstSwiperInit}
                            slidesPerView={1}
                            loop
                            autoplay={{ delay: 4000 }}
                            controller={{ control: secondSwiper }}
                        >
                            <Slide poster={slide1.childImageSharp.gatsbyImageData} />
                            <Slide poster={slide2.childImageSharp.gatsbyImageData} />
                            <Slide poster={slide3.childImageSharp.gatsbyImageData} />
                            <Slide poster={slide1.childImageSharp.gatsbyImageData} />
                        </Slider>
                    </>
                )}
                <Overlay />
                <Pagination sliderPaginationRef={sliderPaginationRef} />
                <NextSlide nextSlide={nextSlide} />
            </Box>
        </Box>
    );
};

export default Delivery;
