import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Gallery from '@components/molecules/Gallery/Gallery';

const query = graphql`
    query galleryHeroBannerImages {
        img: file(relativePath: { eq: "BusinessAndCryo/business_bg.jpg" }) {
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
        <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="dark" zIndex={0}>
            <Box
                minHeight={{ _: '568px', tablet: '620px', laptopS: '1400px' }}
                height="auto"
                width="100%"
                display="flex"
                placeItems="center"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                >
                    <div>
                        <Typography variant="caption" color="var(--white)" textAlign="left">
                            {t('INFO')}
                        </Typography>
                        <Typography
                            variant="h1"
                            color="var(--white)"
                            display="inline-block"
                            mb="2rem"
                        >
                            {t('GALLERY')}
                        </Typography>
                    </div>

                    <Gallery />
                </Box>
            </Box>
        </BackgroundImage>
    );
};

export default HeroBanner;
