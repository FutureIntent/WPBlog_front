import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query whoWeAreGuestsImages {
        guests: file(relativePath: { eq: "AboutUs/guests.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhoWeAre = () => {
    const { t } = useTranslation();
    const { guests } = useStaticQuery(query);

    return (
        <Box mb={{ _: '0', laptopS: '8.5rem' }}>
            <GridParent>
                <GridChild gridColumn="span 12">
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--black-brand)"
                        textAlign="center"
                        mt="6rem"
                        mb="3.3rem"
                    >
                        {t('Who we are')}
                    </Typography>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 4' }}>
                    <GatsbyImage
                        style={{ width: '100%' }}
                        image={guests.childImageSharp.gatsbyImageData}
                        alt="guests"
                    />
                </GridChild>
                <GridChild
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptopS: '7/ span 4' }}
                >
                    <Box display="flex" alignItems="center" height="100%">
                        <Box
                            p={{ _: '1.5rem', tablet: '2.5rem 2.5rem 4.625rem' }}
                            boxShadow={theme.shadows.card}
                            backgroundColor="var(--white)"
                            position="relative"
                            top={{ _: 0, tablet: '-10rem', laptopS: 0 }}
                            left={{ _: 'unset', laptopS: '-4rem' }}
                        >
                            <Typography variant="h3" color="var(--black-brand)" mb="0.5rem">
                                HEADING
                            </Typography>
                            <Typography variant="accent" color="var(--black-brand)">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor.
                            </Typography>
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default WhoWeAre;
