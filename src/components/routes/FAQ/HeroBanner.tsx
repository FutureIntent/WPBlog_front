import QandA from '@components/routes/FAQ/QandA';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query faqImages {
        img: file(relativePath: { eq: "Faq/bg.jpg" }) {
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
        <section>
            <BackgroundImage
                imageData={img.childImageSharp.gatsbyImageData}
                overlay="vertical"
                zIndex={0}
            >
                <Box position="relative" minHeight={{ _: '800px', tablet: '1080px' }} width="100%">
                    <Box width="100%" height="100%" pb={{ _: '8rem' }}>
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
                                            variant="caption"
                                            color="var(--grey-dark)"
                                            transformText="uppercase"
                                        >
                                            {t('preHeading')}
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            color="var(--white)"
                                            display="inline-block"
                                        >
                                            {t('heading')}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="h3"
                                        color="var(--white)"
                                        textAlign={{ _: 'left', tablet: 'center' }}
                                        mb={{ _: '2rem', tablet: '6rem' }}
                                    >
                                        {t('caption')}
                                    </Typography>
                                    <QandA />
                                </Box>
                            </GridChild>
                        </GridParent>
                    </Box>
                </Box>
            </BackgroundImage>
        </section>
    );
};

export default HeroBanner;
