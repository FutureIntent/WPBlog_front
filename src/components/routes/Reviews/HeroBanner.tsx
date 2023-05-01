import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledIframe = styled.iframe`
    aspect-ratio: 16/9;
`;

const query = graphql`
    query reviewsHeroBannerImage {
        img: file(relativePath: { eq: "Reviews/reviews_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { img } = useStaticQuery(query);

    return (
        <Box minHeight={{ _: '568px', tablet: '1080px' }} height="auto">
            <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="dark">
                <Box width="100%" height="100%" top={0} pb={{ _: '8rem' }}>
                    <GridParent as="div">
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '4 / span 6' }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems={{ _: 'flex-start', tablet: 'center' }}
                                mt={{ _: '4.5rem', tablet: '10rem' }}
                            >
                                <div>
                                    <Typography
                                        variant="h1"
                                        color="var(--white)"
                                        display="inline-block"
                                    >
                                        {t('Reviews')}
                                    </Typography>
                                </div>
                                <Typography
                                    variant="h3"
                                    color="var(--white)"
                                    textAlign={{ _: 'left', tablet: 'center' }}
                                    mb={{ _: '2rem', tablet: '6rem' }}
                                >
                                    {t('Out partners’ impressions speak for itself')}
                                </Typography>
                            </Box>
                        </GridChild>
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                            <StyledIframe
                                width="100%"
                                src="https://www.youtube.com/embed/OG_JuP2mrKk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </GridChild>
                    </GridParent>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default HeroBanner;
