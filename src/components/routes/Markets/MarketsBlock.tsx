import routeMap from '@utils/routeMap';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoad } from 'react-observer-api';
import styled from 'styled-components';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import AppLink from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';

const GoogleMap = React.lazy(() => import('@components/molecules/GoogleMap/GoogleMap'));

const MapContainer = styled.div`
    height: 100%;
    position: relative;
    width: 100%;

    h3 {
        line-height: 1;
    }
`;

const StyledGrid = styled(GridParent)`
    height: 100%;
`;

const query = graphql`
    query marketBlockImages {
        img: file(relativePath: { eq: "homePage/markets@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 1835, height: 640)
            }
        }
    }
`;

const markers = [
    { lat: 40.416775, lng: -3.70379 },
    { lat: 59.334591, lng: 18.06324 },
    { lat: 60.472, lng: 8.4689 },
    { lat: 60.192059, lng: 24.945831 },
    { lat: 55.676098, lng: 12.568337 },
    { lat: 51.5167, lng: 9.9167 },
    { lat: 52.237049, lng: 21.017532 },
    { lat: 48.864716, lng: 2.349014 },
];

const MarketsBlock = () => {
    const { t } = useTranslation();
    const { img } = useStaticQuery(query);

    return (
        <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="dark">
            <Box width="100%">
                <StyledGrid
                    noGutter
                    gridColumnGap={0}
                    gridTemplateRows={{ _: '1fr 1fr', laptopS: '1fr' }}
                >
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '3/span 4' }}>
                        <Box
                            display="flex"
                            width="100%"
                            height="100%"
                            pr="2rem"
                            data-sal="slide-right"
                            data-sal-easing="ease-out-quart"
                            data-sal-duration={800}
                        >
                            <Box
                                mt={{ _: 45, laptopS: 160 }}
                                mb={{ _: 90, laptopS: 180 }}
                                maxWidth={{ _: '35rem', laptopS: '27.2rem' }}
                                p={{
                                    _: '3rem 1rem 5.25rem',
                                    tablet: '5.25rem 2.8rem 9.5rem',
                                    laptopS: '0',
                                }}
                            >
                                <Typography variant="h1" as="h2" color="var(--white)">
                                    {t('heading')}
                                </Typography>
                                <Typography variant="h3" color="var(--white)" mb="2rem">
                                    {t('caption')}
                                </Typography>
                                <Typography variant="paragraph" color="var(--white)" mb="1.5rem">
                                    {t('text1')}
                                </Typography>
                                <Typography variant="paragraph" color="var(--white)">
                                    {t('text2')}
                                </Typography>
                                <Box
                                    display={{ _: 'none', tablet: 'flex' }}
                                    alignItems="center"
                                    flexWrap="wrap"
                                    gridGap="1.25rem"
                                    justifyContent="space-between"
                                    mt="2rem"
                                >
                                    <AppLink to={routeMap.services.prices}>
                                        <Button variant="primary">
                                            <Typography variant="accent" color="var(--white)">
                                                {t('browsePrices')}
                                            </Typography>
                                        </Button>
                                    </AppLink>
                                    <AppLink to={routeMap.services.businessAndCryo}>
                                        <Typography variant="accent" color="var(--white)">
                                            {t('businessAndCryo')} <ArrowRightButton />
                                        </Typography>
                                    </AppLink>
                                </Box>
                            </Box>
                        </Box>
                    </GridChild>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: 'span 6' }}>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        <LazyLoad style={{ height: '100%' }}>
                            <MapContainer>
                                {/* ////////// Save for future //////////// */}

                                {/* <Box */}
                                {/*    width={84} */}
                                {/*    height={84} */}
                                {/*    display="flex" */}
                                {/*    backgroundColor={colors.blueBrand} */}
                                {/*    borderRadius="50%" */}
                                {/*    position="absolute" */}
                                {/*    top={230} */}
                                {/*    flexDirection="column" */}
                                {/*    justifyContent="center" */}
                                {/*    alignItems="center" */}
                                {/*    zIndex={10} */}
                                {/*    left="calc(50% - 42px)" */}
                                {/* > */}
                                {/*    <Typography variant="h3" color={colors.white} fontWeight={FONT_REGULAR}>14</Typography> */}
                                {/*    <Typography variant="caption" color={colors.white}>Partners</Typography> */}
                                {/* </Box> */}
                                <GoogleMap
                                    mapCenter={{ lat: 40.416775, lng: -3.70379 }}
                                    markers={markers}
                                    zoom={2.5}
                                />
                            </MapContainer>
                        </LazyLoad>
                    </GridChild>
                </StyledGrid>
            </Box>
        </BackgroundImage>
    );
};

export default MarketsBlock;
