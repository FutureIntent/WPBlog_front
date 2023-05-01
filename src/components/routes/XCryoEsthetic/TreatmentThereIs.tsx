import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import AspectRatio from '@components/atoms/AspectRatio';
import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    ${mediaQueries.tablet} {
        padding: 8.5rem 0;
    }
`;

const MobCard = styled(Card)`
    background-color: var(--white);
    padding: 20px 20px 40px;
`;

const query = graphql`
    query treatmentThereIsImage {
        bg: file(relativePath: { eq: "homePage/cryotherapy/tabs/beauty@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const TreatmentThereIs = () => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const { bg } = useStaticQuery(query);

    if (typeof tablet === 'undefined') return null;

    if (tablet) {
        return (
            <Box as="section" position="relative" height="100vh">
                <BackgroundImage
                    imageData={bg.childImageSharp.gatsbyImageData}
                    overlay="vertical"
                    style={{ transform: 'rotateY(180deg)'}}
                    imgPosition="80% center"
                >
                    <GridParent as="div" aspectRatio={1920 / 840}>
                        <GridChild
                            gridColumn={{
                                _: 'span 12',
                                tablet: '2/ span 6',
                                laptopS: '7/ span 3',
                            }}
                        >
                            <StyledContent>
                                <Typography
                                    variant="caption"
                                    color="var(--grey-dark)"
                                    mb="0.5rem"
                                    transformText="uppercase"
                                >
                                    {t('treatment.preHeading')}
                                </Typography>
                                <Typography
                                    variant="h2"
                                    color="var(--white)"
                                    mb="1rem"
                                    transformText="uppercase"
                                >
                                    {t('treatment.heading')}
                                </Typography>

                                <Typography variant="paragraph" color="var(--white)" mb="1rem">
                                    {t('treatment.line1')}
                                </Typography>
                                <Typography variant="paragraph" color="var(--white)" mt="1rem">
                                    {t('treatment.line2')}
                                </Typography>
                            </StyledContent>
                        </GridChild>
                    </GridParent>
                </BackgroundImage>
            </Box>
        );
    }

    return (
        <Box as="section" position="relative">
            <AspectRatio ratio="1/1">
                <GatsbyImage
                    alt="alt"
                    image={bg.childImageSharp.gatsbyImageData}
                    style={{ height: '100%' }}
                    imgStyle={{ objectPosition: '90% center', transform: 'rotateY(180deg)' }}
                />
            </AspectRatio>
            <Box mt="-1rem" px={15} position="relative" zIndex={1} mb={90}>
                <MobCard>
                    <StyledContent>
                        <Typography
                            variant="caption"
                            color="var(--blue-dim)"
                            mb="0.5rem"
                            transformText="uppercase"
                        >
                            {t('treatment.preHeading')}
                        </Typography>
                        <Typography
                            variant="h2"
                            color="var(--black-brand)"
                            mb="1rem"
                            transformText="uppercase"
                        >
                            {t('treatment.heading')}
                        </Typography>

                        <Typography variant="paragraph" color="var(--black-brand)" mb="1rem">
                            {t('treatment.line1')}
                        </Typography>
                        <Typography variant="paragraph" color="var(--black-brand)" mt="1rem">
                            {t('treatment.line2')}
                        </Typography>
                    </StyledContent>
                </MobCard>
            </Box>
        </Box>
    );
};

export default TreatmentThereIs;
