import Card from '@components/routes/shared/ShowCase/Card';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import Slider from '@components/molecules/Slider';

type ISlide = {
    poster: IGatsbyImageData;
    title: string;
    caption: string;
    icon: ReactElement;
};

interface IShowCase {
    slides: ISlide[];
}

const StyledAspectRatio = styled(AspectRatio)`
    min-height: 270px;
`;

const animation = ['slide-right', 'slide-left', 'slide-right', 'slide-left'];

const ShowCase = ({ slides }: IShowCase) => (
    <section>
        <Box display={{ _: 'none', tablet: 'block' }}>
            <GridParent noGutter noGap>
                {slides.map((slide, index) => (
                    <GridChild gridColumn="span 6" key={slide.title}>
                        <StyledAspectRatio
                            ratio={960 / 310}
                            data-sal={animation[index % 4]}
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={100 * index}
                            data-sal-duration={1000}
                        >
                            <Card
                                imageData={slide.poster}
                                title={slide.title}
                                caption={slide.caption}
                                icon={slide.icon}
                            />
                        </StyledAspectRatio>
                    </GridChild>
                ))}
            </GridParent>
        </Box>

        <Box display={{ _: 'block', tablet: 'none' }}>
            <GridParent noGutter noGap>
                <GridChild gridColumn="span 12">
                    <Slider sliderName="showCase" slidesPerView={1.2}>
                        {slides.map((slide) => (
                            <Card
                                key={slide.title}
                                imageData={slide.poster}
                                title={slide.title}
                                caption={slide.caption}
                                icon={slide.icon}
                            />
                        ))}
                    </Slider>
                </GridChild>
            </GridParent>
        </Box>
    </section>
);

export default ShowCase;
