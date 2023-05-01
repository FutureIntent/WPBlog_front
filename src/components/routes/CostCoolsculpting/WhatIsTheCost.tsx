import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from '@components/atoms/BackgroundImage';
import { useTranslation } from 'react-i18next';
import Typography from '@components/atoms/Typography';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridParent from '@components/atoms/GridParent';
import GridChild from '@components/atoms/GridChild';
import Container from '@components/atoms/Container/Container';

const query = graphql`
    query whatIsTheCostImage {
        img: file(relativePath: { eq: "CostCoolsculpting/business_bg@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsTheCost = () => {
    const { t } = useTranslation();
    const { img } = useStaticQuery(query);

    const handleBackToTop = () => {
        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
    };

    return (
        <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="vertical">
            <Container type="fixed">
                <GridParent style={{ height: "100%"}}>
                    <GridChild gridColumn={{ _: "span 12", tabletL: "2/ span 10", laptop: "3/ span 7"}}>
                        <Box
                            p={{ _: "80px 0 140px"}}
                            minHeight={{ _: '568px', tablet: '620px' }}
                            height="100%"
                            width="100%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                >
                            <Typography
                                variant="h1"
                                as="h2"
                                color="var(--white)"
                    >
                                {t('whatIsTheCost.title')}
                            </Typography>
                            <Typography variant="h2" color="var(--white)" my="2rem">
                                {t('whatIsTheCost.headline')}
                            </Typography>
                            <Typography variant="paragraph" color="var(--white)" mb="2rem">
                                {t('whatIsTheCost.description')}
                            </Typography>
                            <div>
                                <Button style={{ whiteSpace: "normal", padding: "0.8rem", height: 'auto' }} onClick={handleBackToTop}>
                                    <Typography variant="accent" color="var(--white)">
                                        {t('whatIsTheCost.button')}
                                    </Typography>
                                </Button>
                            </div>
                        </Box>
                    </GridChild>
                </GridParent>
            </Container>
        </BackgroundImage>
    )
}

export default WhatIsTheCost;
