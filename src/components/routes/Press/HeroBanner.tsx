import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query pressHeroBannerImage {
        img: file(relativePath: { eq: "Press/press_bg.jpg" }) {
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
                minHeight={{ _: '568px', tablet: '620px' }}
                height="auto"
                width="100%"
                placeItems="center"
                display="flex"
            >
                <Box width="100%">
                    <Typography variant="h1" color="var(--white)" textAlign="center">
                        {t('metaData.title')}
                    </Typography>
                    <Typography variant="h3" color="var(--white)" textAlign="center" mb="2rem">
                        {t('studiesTopics')}
                    </Typography>
                </Box>
            </Box>
        </BackgroundImage>
    );
};

export default HeroBanner;
