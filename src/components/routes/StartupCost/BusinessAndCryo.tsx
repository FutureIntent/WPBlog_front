import { useTranslation } from 'react-i18next';
import GridParent from '@components/atoms/GridParent';
import styled from 'styled-components';
import GridChild from '@components/atoms/GridChild';
import mediaQueries from '@theme/configs/mediaQueries';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const OffsetBgImg = styled(GridChild)`
    height: 120%;
    margin-top: 2rem;
    position: relative;
    width: 100%;
    z-index:10;

    ${mediaQueries.tablet} {
        margin-top: -2rem;

        .gatsby-image-wrapper {
            position: unset;
        }
    }
`;

const query = graphql`
    query startupBlock2 {
        startupBandC: file(relativePath: { eq: "startup/businessAndCryoStartup.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BusinessAndCryo = () => {
    const { t } = useTranslation();
    const { startupBandC } = useStaticQuery(query);
    const { tablet } = useBreakpoint();

    return (
        <Box pb={100}>
            <GridParent noGutter>
                {tablet && (
                <OffsetBgImg
                    gridColumn={{ _: 'span 5', tablet: '1/ span 6', laptopS: '1/span 5' }}
                    gridRow={1}
            >
                    <GatsbyImage style={{ height: "100%"}} image={startupBandC.childImageSharp.gatsbyImageData} alt="support" />
                </OffsetBgImg>
                        )}
                <GridChild gridColumn={{ _: 'span 12', tablet: '7/ span 6', laptopS: '7/span 3' }}
                    gridRow={1}>
                    <Box mt={80} px="1rem" pb={{ _: undefined, tablet: 120}}>
                        <Typography variant="h2" color="var(-black-brand)">{t('businessAndCryo.title')}</Typography>
                        <Typography variant="paragraph" color="var(-black-brand)">{t('businessAndCryo.description')}</Typography>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    )
}

export default BusinessAndCryo;
