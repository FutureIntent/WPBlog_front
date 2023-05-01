import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { RefObject } from 'react';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';

import { OverlayBox } from '@components/molecules/OverlayBox';
import Slider from '@components/molecules/Slider';

interface IBackgroundSlider {
    sliderRef: RefObject<HTMLElement>;
    images: Array<{
        img: IGatsbyImageData;
        alt: string;
    }>;
}

const BackgroundSlider = ({ sliderRef, images }: IBackgroundSlider) => (
    <GridChild
        gridColumn="1/ span 12"
        gridRow="1 / 1"
        data-sal="fade"
        data-sal-easing="ease-out-quart"
        data-sal-duration={800}
    >
        <OverlayBox overlay="vertical">
            <Box position="relative" width="100%" height="100%">
                <Slider sliderName="background-slider" sliderRef={sliderRef} style={{ zIndex: -1 }}>
                    {images.map((image) => (
                        <GatsbyImage
                            key={image.alt}
                            image={image.img}
                            alt={image.alt}
                            style={{ height: '100%' }}
                            imgStyle={{ objectPosition: '75% center', height: '100%' }}
                        />
                    ))}
                </Slider>
            </Box>
        </OverlayBox>
    </GridChild>
);

export default BackgroundSlider;
