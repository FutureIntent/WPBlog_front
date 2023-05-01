import { shadeColor } from '@utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { colors } from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query cta {
        cta: file(relativePath: { eq: "Main/ctn-blue.png" }) {
            childImageSharp {
                gatsbyImageData(width: 143, height: 41)
            }
        }
    }
`;

const CTA = () => {
    const { cta } = useStaticQuery(query);

    return (
        <Box
            as="section"
            backgroundColor={shadeColor(colors.blueDim, -40)}
            py={{ _: '1rem', tablet: '0.5rem' }}
            height="var(--bottom-cta-height)"
            position="relative"
            zIndex={1}
        >
            <GridParent
                as="div"
                data-sal="fade"
                data-sal-easing="ease-out-quart"
                data-sal-duration="1000"
            >
                <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
                        justifyContent="center"
                    >
                        <Box display="flex" alignItems="center">
                            <Box maxWidth={{ _: '115px', tablet: '143px' }} width="100%" mr="2rem">
                                <GatsbyImage
                                    image={cta.childImageSharp.gatsbyImageData}
                                    alt="Our partner logo"
                                />
                            </Box>
                            <Typography variant="paragraph" color="var(--white)">
                                CRYO°CENTER IS A PARTNER OF CRYOTECH NORDIC FINLAND
                            </Typography>
                        </Box>

                        <Box width={{ _: '100%', tablet: 'auto' }} ml="1rem" my="1rem">
                            <Button size="fullWidth" variant="night">
                                <Typography variant="accent" color="var(--white)">
                                    Visit page
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default CTA;
