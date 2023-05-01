import { useTranslation } from 'react-i18next';
import GridChild from '@components/atoms/GridChild';
import Box from '@components/atoms/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { colors } from '@theme/configs/colors';

const query = graphql`
    query isItWorthImg {
        isItWorth: file(relativePath: { eq: "Products/product_xtone.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const StyledBox = styled(Box)`
    padding-bottom: 30px;
    position: relative;

    &::after {
        background-color: ${colors.blueBrand};
        bottom: 0;
        content: '';
        height: 4px;
        left: 0;
        max-width:100px;
        position: absolute;
        width: 20%;
    }
`;

const IsItWorth = () => {
    const {t} = useTranslation();
    const { isItWorth } = useStaticQuery(query);

    return (
        <Box as="section" p="8.75rem 0 12.2rem">
            <GridParent style={{ height: '100%'}}>
                <GridChild gridColumn={{ _: 'span 6', tablet: 'span 4', laptopS: '2 / span 3', laptop: "4 / span 3" }}>
                    <Box
                        position="relative"
                        left={{ _: '-0', tablet: '-2rem' }}
                        data-sal="slide-right"
                        data-sal-easing="ease-out-quart"
                        data-sal-duration={800}
                        >
                        <GatsbyImage image={isItWorth.childImageSharp.gatsbyImageData} alt="XTone device" />
                    </Box>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', tablet: '5/ span 8', laptopS: '6/ span 7', laptop: "7 / span 4" }}>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        height="100%"
                        data-sal="slide-left"
                        data-sal-easing="ease-out-quart"
                        data-sal-duration={800}
                    >
                        <Box>
                            <Box display="flex" justifyContent="center" flexDirection="column">
                                <StyledBox mb={20}>
                                    <Typography variant="h1" as="h2" color="var(--black-brand)">
                                        {t('isItWorth.title')}
                                    </Typography>
                                </StyledBox>
                                <Box gridGap={30} display="flex" flexDirection={{ _: "column", laptop: "row"}}>
                                    <Box width={{ _: "100%", laptop: "50%"}}>
                                        <Typography variant="paragraph">{t('isItWorth.block1')}</Typography>
                                    </Box>
                                    <Box width={{ _: "100%", laptop: "50%"}}>
                                        <Typography variant="paragraph">{t('isItWorth.block2')}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    )
}

export default IsItWorth;
