import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query aboutUsHeroBanner {
        aboutBg: file(relativePath: { eq: "AboutUs/about_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { aboutBg } = useStaticQuery(query);

    return (
        <BackgroundImage
            imageData={aboutBg.childImageSharp.gatsbyImageData}
            overlay="dark"
            zIndex={0}
        >
            <Box
                minHeight={{ _: '568px', tablet: '620px' }}
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
                    height="calc(100% + var(--header-height))"
                    width="100%"
                >
                    <Typography
                        variant="h1"
                        color="var(--white)"
                        display="inline-block"
                        textAlign="center"
                    >
                        {t('ABOUT US')}
                    </Typography>
                    <Typography variant="h3" color="var(--white)" textAlign="center" mb="2rem">
                        {t('Team or office building image.')}
                    </Typography>
                </Box>
            </Box>
        </BackgroundImage>
    );
};

export default HeroBanner;
