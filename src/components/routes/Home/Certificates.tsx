import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import Slider from '@components/molecules/Slider';

const query = graphql`
    query certificateImage {
        certificate: file(relativePath: { eq: "homePage/certifiate@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const Certificates = () => {
    return null;

    const gatsbyBreakpoints = useBreakpoint();
    const { certificate } = useStaticQuery(query);

    return (
        <Box
            as="section"
            id="certificates"
            p={{ _: '2.2rem 1rem', tablet: '4.4rem 2rem', laptopS: '6.4rem 2rem' }}
            backgroundColor="var(--grey-cyan)"
            overflow="hidden"
        >
            <GridParent>
                <GridChild
                    gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}
                    data-sal="slide-up"
                    data-sal-easing="ease-out-quart"
                    data-sal-delay={400}
                    data-sal-duration={800}
                >
                    <Slider
                        sliderName="certificates"
                        slidesPerView={gatsbyBreakpoints.tablet ? 4 : 2.2}
                        spaceBetween={gatsbyBreakpoints.tablet ? 30 : 10}
                        showOverflow
                    >
                        <Box key="certificate-1" minWidth={115}>
                            <GatsbyImage
                                style={{ height: '100%' }}
                                image={certificate.childImageSharp.gatsbyImageData}
                                alt="cryo mask procedure"
                            />
                        </Box>
                        <Box key="certificate-2" minWidth={115}>
                            <GatsbyImage
                                style={{ height: '100%' }}
                                image={certificate.childImageSharp.gatsbyImageData}
                                alt="cryo mask procedure"
                            />
                        </Box>
                        <Box key="certificate-3" minWidth={115}>
                            <GatsbyImage
                                style={{ height: '100%' }}
                                image={certificate.childImageSharp.gatsbyImageData}
                                alt="cryo mask procedure"
                            />
                        </Box>
                        <Box key="certificate-4" minWidth={115}>
                            <GatsbyImage
                                style={{ height: '100%' }}
                                image={certificate.childImageSharp.gatsbyImageData}
                                alt="cryo mask procedure"
                            />
                        </Box>
                    </Slider>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default Certificates;
