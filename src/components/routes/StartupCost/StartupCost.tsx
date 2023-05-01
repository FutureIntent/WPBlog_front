import { useTranslation } from 'react-i18next';
import GridParent from '@components/atoms/GridParent';
import GridChild from '@components/atoms/GridChild';
import Typography from '@components/atoms/Typography';
import Card from '@components/atoms/Card';
import Box from '@components/atoms/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const query = graphql`
    query startupBlock3 {
        startupCost: file(relativePath: { eq: "startup/startup_cost.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ImageCaptionCard = () => {
    const { t } = useTranslation();

    return (
        <Box p="30px 40px 40px" bg="var(--grey-cyan)">
            <Typography variant="paragraph" mb={30}>{t('startupCost.block3')}</Typography>
        </Box>
    )
}

const StartupCost = () => {
    const { t } = useTranslation();
    const { startupCost } = useStaticQuery(query);
    const { laptopS } = useBreakpoint();

    return (
        <GridParent noGutter mb={140}>
            <GridChild gridColumn={{ _: 'span 12', laptop: '3/ span 10'}} gridRow={1}>
                <Typography mx="1rem" variant="h2" mb={30}>{t('startupCost.title')}</Typography>
            </GridChild>
            <GridChild gridColumn={{ _: 'span 12', tablet: 'span 11', laptopS: 'span 8', laptop: '3/ span 6'}} gridRow={2}>
                <Card>
                    <Box position="relative">
                        <GatsbyImage style={{ minHeight: 140}} imgStyle={{ minHeight: 140}} image={startupCost.childImageSharp.gatsbyImageData} alt="support" />
                        {laptopS && (
                        <Box position="absolute" right="-320px" top="-20px" maxWidth={340}>
                            <ImageCaptionCard />
                        </Box>
                                )}
                    </Box>
                    <Box p="30px 40px 50px" display="flex" flexDirection={{ _: 'column', tablet: 'row'}} gridGap={30}>
                        <Box width={{ _: '100%', laptopS: '50%'}}>
                            <Typography variant="paragraph" mb={30}>{t('startupCost.block1')}</Typography>
                        </Box>
                        <Box width={{ _: '100%', laptopS: '50%'}}>
                            <Typography variant="paragraph" mb={30}>{t('startupCost.block2')}</Typography>
                        </Box>
                    </Box>
                </Card>
            </GridChild>
            {!laptopS && (
            <GridChild gridColumn={{ _: 'span 12', tablet: '2/ span 11', laptopS: '8/ span 5', laptop: '9/ span 2'}} gridRow={{ _: 3, laptopS: 2 }}>
                <Box mt="-40px">
                    <ImageCaptionCard />
                </Box>
            </GridChild>
                    )}
        </GridParent>
    )
}

export default StartupCost;
