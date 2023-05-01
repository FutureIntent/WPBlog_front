import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledHeading = styled(Typography)`
    display: inline-block;
    padding: 0.5rem;
    position: relative;

    &:after {
        background-color: var(--blue-brand);
        bottom: 0;
        content: '';
        height: 4px;
        left: 0.5rem;
        position: absolute;
        width: 5.3rem;
    }
`;

const query = graphql`
    query muscleImpactImages {
        impact1: file(relativePath: { eq: "XTone/img/xtone_muscle_impact-1.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        impact2: file(relativePath: { eq: "XTone/img/xtone_muscle_impact-2.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const MuscleImpact = () => {
    const { t } = useTranslation();
    const { impact1, impact2 } = useStaticQuery(query);

    return (
        <GridParent as="section" noGutter>
            <GridChild gridColumn="span 12" gridRow={1}>
                <Typography
                    variant="h1"
                    as="h2"
                    color="var(--black-brand)"
                    textAlign="center"
                    mt="8.5rem"
                    mb="3.25rem"
                >
                    {t('muscleImpact.heading')}
                </Typography>
            </GridChild>
            <GridChild
                gridColumn={{ _: 'span 11', tablet: 'span 10', laptopS: 'span 9' }}
                gridRow={2}
            >
                <Card
                    mb="2.25rem"
                    p={{ _: '1.25rem 1.25rem 3.4rem', tablet: '2.5rem 2.5rem 6.875rem' }}
                >
                    <GridParent as="div" noGutter gridTemplateColumns="repeat(9, 1fr)">
                        <GridChild gridColumn={{ _: 'span 9', laptopS: 'span 4' }}>
                            <Box display="flex" justifyContent="flex-end" mr="2rem">
                                <GatsbyImage
                                    image={impact1.childImageSharp.gatsbyImageData}
                                    alt={t('muscleImpact.card1.title')}
                                />
                            </Box>
                        </GridChild>

                        <GridChild gridColumn={{ _: 'span 9', laptopS: 'span 4' }}>
                            <StyledHeading
                                variant="h2"
                                color="var(--black-brand)"
                                mb="1.5rem"
                                mt={{ _: '2rem', laptops: '0' }}
                            >
                                {t('muscleImpact.card1.title')}
                            </StyledHeading>
                            <Typography variant="paragraph" color="var(--black-brand)">
                                {t('muscleImpact.card1.caption')}
                            </Typography>
                        </GridChild>
                    </GridParent>
                </Card>
            </GridChild>
            <GridChild
                gridColumn={{ _: '2/span 12', tablet: '3/ span 10', laptopS: '4/ span 9' }}
                gridRow={3}
            >
                <Card
                    p={{
                        _: '1.25rem 1.25rem 2.5rem',
                        tablet: '2.5rem 2.5rem 5.2rem',
                        laptopS: '2.5rem 2.5rem 1rem',
                    }}
                    mb="1.5rem"
                >
                    <GridParent as="div" noGutter gridTemplateColumns="repeat(9, 1fr)">
                        <GridChild
                            gridColumn={{ _: 'span 9', laptopS: 'span 4' }}
                            gridRow={{ _: 2, laptopS: 1 }}
                        >
                            <StyledHeading
                                variant="h2"
                                color="var(--black-brand)"
                                mb="1.5rem"
                                mt={{ _: '2rem', laptops: '0' }}
                            >
                                {t('muscleImpact.card2.title')}
                            </StyledHeading>
                            <Typography variant="paragraph" color="var(--black-brand)">
                                {t('muscleImpact.card2.caption')}
                            </Typography>
                        </GridChild>
                        <GridChild gridColumn={{ _: 'span 9', laptopS: 'span 4' }} gridRow={1}>
                            <Box ml="2rem">
                                <GatsbyImage
                                    image={impact2.childImageSharp.gatsbyImageData}
                                    alt={t('muscleImpact.card2.title')}
                                />
                            </Box>
                        </GridChild>
                    </GridParent>
                </Card>
            </GridChild>
        </GridParent>
    );
};

export default MuscleImpact;
