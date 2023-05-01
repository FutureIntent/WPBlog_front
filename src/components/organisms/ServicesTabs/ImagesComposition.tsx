import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { cloneElement } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';

const StyledSmallImg = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding-left: 30%;
    padding-right: 10%;
    position: absolute;
    width: 100%;

    ${mediaQueries.tablet} {
        padding-left: 40%;
        padding-right: 0;
    }
`;

const ImageWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    min-width: 200px;
    padding-right: 40%;
    position: relative;

    ${mediaQueries.tablet} {
        padding-right: 22%;
    }
`;

interface IImageComposition {
    product: IGatsbyImageData;
    bg: any;
}

const bgStyles = {
    objectFit: 'cover',
    loading: 'lazy',
    objectPosition: 'center right',
    style: {
        maxWidth: '435px',
        height: '100%',
        boxShadow: '0px 8px 16px #110D3E1A',
    },
    alt: 'Product background',
};

const ImagesComposition = ({ product, bg }: IImageComposition) => (
    <ImageWrapper>
        <AspectRatio ratio={435 / 679}>{cloneElement(bg, bgStyles)}</AspectRatio>
        <StyledSmallImg>
            <Box pt="50%" />

            <Parallax speed={-4}>
                <GatsbyImage style={{ maxWidth: '384px' }} image={product} alt="Product image" />
            </Parallax>
        </StyledSmallImg>
    </ImageWrapper>
);

export default ImagesComposition;
