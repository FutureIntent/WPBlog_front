import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import Button from '@components/atoms/Button';

const query = graphql`
    query StartupHeroBannerImages {
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
        <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="dark">
            <Box
                minHeight="100vh"
                height="100%"
                width="100%"
                display="flex"
                p="5rem 1rem 9rem"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                    >
                <Box maxWidth={900}>
                    <Typography
                        variant="h1"
                        color="var(--white)"
                        >
                        {t('homeBanner.title')}
                    </Typography>
                    <Typography variant="h2" color="var(--white)" my="2rem">
                        {t('homeBanner.caption')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--white)" mb="2rem">
                        {t('homeBanner.description')}
                    </Typography>
                    <div>
                        <Button style={{ whiteSpace: "normal", padding: "0.8rem", height: 'auto' }}>
                            <Typography variant="accent" color="var(--white)">
                                {t('homeBanner.button')}
                            </Typography>
                        </Button>
                    </div>
                </Box>
            </Box>
        </BackgroundImage>
    );
};

export default HeroBanner;
