import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';
import { CRYO_PHONE_NUMBER } from '@theme/const';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Phone from '@components/molecules/Icons/Phone';

const StyledGridParent = styled(GridParent)`
    height: 100%;
`;

const Content = styled.div`
    height: 568px;

  ${mediaQueries.tablet} {
    height: 800px;
}
}
`;

const query = graphql`
    query contactsImages {
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
        <Content>
            <BackgroundImage
                imageData={img.childImageSharp.gatsbyImageData}
                overlay="vertical"
                zIndex={0}
            >
                <Box position="absolute" width="100%" height="800px" top={0} pb={{ _: '8rem' }}>
                    <StyledGridParent as="div">
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '4 / span 6' }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                mt={{ _: '4.6rem', tablet: '10rem' }}
                            >
                                <Typography
                                    variant="h1"
                                    color="var(--white)"
                                    display="inline-block"
                                >
                                    {t('contacts')}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="var(--white)"
                                    textAlign="center"
                                    mb="2rem"
                                >
                                    {t('feelFreeToCallUs')}
                                </Typography>
                                <Button
                                    as="a"
                                    variant="primary"
                                    href={`tel:${CRYO_PHONE_NUMBER}`}
                                    withIcon
                                >
                                    <Typography variant="accent" color="var(--white)">
                                        {t('makeACall')} <Phone />
                                    </Typography>
                                </Button>
                            </Box>
                        </GridChild>
                    </StyledGridParent>
                </Box>
            </BackgroundImage>
        </Content>
    );
};

export default HeroBanner;
