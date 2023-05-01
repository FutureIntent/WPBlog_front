import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query businessAndCryoImages {
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
                minHeight={{ _: '568px', tablet: '620px' }}
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography
                    variant="h1"
                    color="var(--white)"
                    display="inline-block"
                    transformText="uppercase"
                >
                    {t('heading')}
                </Typography>
                <Typography variant="h3" color="var(--white)" textAlign="center" mb="2rem">
                    {t('caption')}
                </Typography>
            </Box>
        </BackgroundImage>
    );
};

export default HeroBanner;
