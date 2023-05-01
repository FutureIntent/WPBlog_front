import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';

const CardHeading = styled(Typography)`
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    position: relative;

    &:after {
        background-color: var(--grey-dark);
        bottom: 0;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        width: 4rem;
    }
`;

const Card = styled.div`
    height: 100%;
    max-width: 650px;
    padding: 2rem 2.1rem 3.5rem;
    width: 100%;
`;

const StyledTabContent = styled.div`
    margin-top: 2rem;

    .swiper-slide {
        transform: scale(0.75) !important;
        transition: transform 0.4s ease-in-out;

        &.swiper-slide-active {
            transform: scale(1) !important;

            ${CardHeading}:after {
                background-color: var(--blue-brand);
            }
        }
    }
`;

const TabContent = ({ slides }: { slides: { title: string; caption: string }[] }) => {
    const gatsbyBreakpoints = useBreakpoint();
    let sliderConfig = null;

    switch (true) {
        case gatsbyBreakpoints.laptop:
            sliderConfig = {
                slidesPerView: 4.5,
                spaceBetween: 25,
            };
            break;
        case gatsbyBreakpoints.laptopS:
            sliderConfig = {
                slidesPerView: 3.5,
                spaceBetween: 25,
            };
            break;
        case gatsbyBreakpoints.tablet:
            sliderConfig = {
                slidesPerView: 1.6,
                spaceBetween: 25,
            };
            break;
        default:
            sliderConfig = { slidesPerView: 1.3 };
            break;
    }

    return (
        <StyledTabContent>
            <Slider
                sliderName="cryo-benefits"
                {...sliderConfig}
                centeredSlides
                autoHeight
                spaceBetween={0}
                slideToClickedSlide
            >
                {slides.map((slide) => (
                    <Card key={slide.title} className="backdrop-blur-dark">
                        <CardHeading variant="h3" color="var(--grey-dark)">
                            {slide.title}
                        </CardHeading>
                        <Typography variant="paragraph" color="var(--grey-dark)">
                            {slide.caption}
                        </Typography>
                    </Card>
                ))}
            </Slider>
        </StyledTabContent>
    );
};

export default TabContent;
