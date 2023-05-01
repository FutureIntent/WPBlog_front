import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import theme from '@theme/configs';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledBGImg = styled(BackgroundImage)`
    aspect-ratio: 710 / 385;
`;

const query = graphql`
    query treatmentsImages {
        fastTreatments: file(relativePath: { eq: "LocalTherapy/time@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        noLiquid: file(relativePath: { eq: "LocalTherapy/no_liquid@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const Treatments = () => {
    const { t } = useTranslation();
    const { fastTreatments, noLiquid } = useStaticQuery(query);

    return (
        <>
            <Box as="section" pt="8.75rem">
                <GridParent as="div" noGutter>
                    <GridChild
                        gridColumn={{
                            _: '1 / span 10',
                            tablet: '1 / span 8',
                            laptopS: '1 / span 5',
                        }}
                        gridRow={{ _: 'unset', tablet: 1 }}
                    >
                        <StyledBGImg imageData={fastTreatments.childImageSharp.gatsbyImageData} />
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 12', tablet: '3 / span 10', laptopS: '3 / span 5' }}
                        gridRow={{ _: 'unset', tablet: 1 }}
                    >
                        <Box height="100%" display="flex" alignItems="center">
                            <Box
                                backgroundColor="var(--white)"
                                boxShadow={theme.shadows.card}
                                p="1.9rem 2.5rem"
                                mx={{ _: '1rem', tablet: 0 }}
                                top={{ _: '-1.5rem', tablet: 'unset' }}
                                position={{ _: 'relative', tablet: 'absolute' }}
                            >
                                <Typography
                                    variant="caption"
                                    color="var(--blue-brand)"
                                    transformText="uppercase"
                                >
                                    {t('treatments.fast.title')}
                                </Typography>
                                <Typography variant="h2" color="var(--black-brand)">
                                    {t('treatments.fast.caption')}
                                </Typography>
                            </Box>
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>

            <Box as="section" pt={{ _: '1.75rem', laptopS: 0 }}>
                <GridParent as="div" noGutter>
                    <GridChild
                        mt={{ _: '1.75rem', laptopS: 0 }}
                        gridColumn={{
                            _: '3 / span 11',
                            tablet: '5 / span 8',
                            laptopS: '8 / span 5',
                        }}
                        gridRow={{ _: 'unset', tablet: 2 }}
                    >
                        <StyledBGImg imageData={noLiquid.childImageSharp.gatsbyImageData} />
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 12', tablet: '1 / span 10', laptopS: '6 / span 5' }}
                        gridRow={{ _: 'unset', tablet: 2 }}
                    >
                        <Box height="100%" display="flex" alignItems="center">
                            <Box
                                backgroundColor="var(--white)"
                                boxShadow={theme.shadows.card}
                                p="1.9rem 2.5rem"
                                mx={{ _: '1rem', tablet: 0 }}
                                top={{ _: '-1.5rem', tablet: 'unset' }}
                                position={{ _: 'relative', tablet: 'absolute' }}
                            >
                                <Typography
                                    variant="caption"
                                    color="var(--blue-brand)"
                                    transformText="uppercase"
                                >
                                    {t('treatments.low.title')}
                                </Typography>
                                <Typography variant="h2" color="var(--black-brand)">
                                    {t('treatments.low.caption')}
                                </Typography>
                            </Box>
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>
        </>
    );
};

export default Treatments;
