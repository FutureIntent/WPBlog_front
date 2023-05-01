import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { useSwiper } from '@hooks/useSwiper';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Slider, { SliderPagination } from '@components/molecules/Slider';

import ReviewCard from '@components/organisms/ReviewCard/ReviewCard';

const query = graphql`
    query reviews {
        reviewer1: file(relativePath: { eq: "homePage/Reviews/reviewer_1.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

// Temporary disable, until we going to decide something about reviews.
const Review = () => {
    return null;

    const gatsbyBreakpoints = useBreakpoint();
    const { reviewer1 } = useStaticQuery(query);
    const { sliderRef, sliderPaginationRef, shouldRenderSlider, nextSlide, prevSlide } =
        useSwiper();

    return (
        <Box id="reviews" as="section">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3 / span 8' }}>
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--black-brand)"
                        textAlign="center"
                        mb="5.2rem"
                    >
                        Reviews
                    </Typography>
                </GridChild>
                {gatsbyBreakpoints.tablet && (
                    <GridChild gridColumn={{ _: 'span 1', laptopS: '3/ span 1' }}>
                        <Box
                            aria-label="presentation"
                            aria-describedby="Show previous slide"
                            onClick={prevSlide}
                            display="flex"
                            height="100%"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <ArrowLeft size="large3" color="var(--grey-dark)" />
                        </Box>
                    </GridChild>
                )}
                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 10', laptopS: 'span 6' }}>
                    {shouldRenderSlider && (
                        <Slider
                            sliderName="review-slider"
                            slidesPerView={1}
                            spaceBetween={100}
                            sliderRef={sliderRef}
                            paginationRef={sliderPaginationRef}
                        >
                            {[0, 1, 2, 3, 4].map((item) => (
                                <ReviewCard
                                    key={item}
                                    authorImg={
                                        <GatsbyImage
                                            image={reviewer1.childImageSharp.gatsbyImageData}
                                            alt="PATRICIA THOMPSON"
                                        />
                                    }
                                    authorPosition="CROSSFIT ATHLETE"
                                    authorName="PATRICIA THOMPSON"
                                    reviewText="I was one of those people with a daily workout
                                                    routine. The X°Cryo helped me reduce muscle
                                                    soreness after my workout, enabling me to give
                                                    100% every day."
                                />
                            ))}
                        </Slider>
                    )}
                </GridChild>
                {gatsbyBreakpoints.tablet && (
                    <GridChild>
                        <Box
                            aria-label="Next"
                            aria-describedby="Show next slide"
                            onClick={nextSlide}
                            display="flex"
                            height="100%"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <ArrowRight size="large3" color="var(--grey-dark)" />
                        </Box>
                    </GridChild>
                )}

                {!gatsbyBreakpoints.tablet && (
                    <GridChild gridColumn={{ _: 'span 1', laptopS: '3/ span 1' }}>
                        <Box
                            aria-label="Previous"
                            aria-describedby="Show previous slide"
                            onClick={prevSlide}
                            display="flex"
                            height="100%"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <ArrowLeft size="large3" color="var(--grey-dark)" />
                        </Box>
                    </GridChild>
                )}
                <GridChild gridColumn={{ _: '2/ span 10', laptopS: '4 / span 6' }}>
                    <SliderPagination
                        pl={{ _: '0', tablet: '2.5rem' }}
                        className="swiper-pagination"
                        ref={sliderPaginationRef}
                    />
                </GridChild>
                {!gatsbyBreakpoints.tablet && (
                    <GridChild>
                        <Box
                            aria-label="Next"
                            aria-describedby="Show next slide"
                            onClick={nextSlide}
                            display="flex"
                            height="100%"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <ArrowRight size="large3" color="var(--grey-dark)" />
                        </Box>
                    </GridChild>
                )}
            </GridParent>
        </Box>
    );
};

export default Review;
