import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query whatIsEstheticImage {
        mask: file(relativePath: { eq: "FaceTherapy/cryo_mask.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsEsthetic = () => {
    const { t } = useTranslation();
    const { mask } = useStaticQuery(query);

    return (
        <Box as="section" position="relative">
            <GridParent aspectRatio={1920 / 840}>
                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 5', laptopS: 'span 6' }}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" height="100%">
                        <GatsbyImage
                            image={mask.childImageSharp.gatsbyImageData}
                            alt={t('products.faceTherapy')}
                    />
                    </Box>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 7', laptopS: 'span 4' }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                        p={{ _: '2.5rem 0 8.5rem', tablet: '8.5rem 0' }}
                >
                        <Typography variant="h1" as="h2" color="ver(--black-brand)" mb="1.5rem">
                            {t('whatIsEsthetic.heading')}
                        </Typography>

                        <Typography variant="paragraph" color="ver(--black-brand)">
                            {t('whatIsEsthetic.line1')}
                        </Typography>
                        <Typography variant="paragraph" color="ver(--black-brand)" mt="1rem">
                            {t('whatIsEsthetic.line2')}
                        </Typography>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default WhatIsEsthetic;
