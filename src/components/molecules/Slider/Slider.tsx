import { props } from '@styled-system/should-forward-prop';
import { Children, ReactElement, RefObject } from 'react';
import styled from 'styled-components';
import {
    Controller,
    Navigation,
    Pagination,
    Thumbs,
    Virtual,
    EffectCreative,
    EffectFade,
    Autoplay,
} from 'swiper';
import 'swiper/css';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface SliderProps extends SwiperProps {
    sliderName?: string;
    children?: ReactElement[] | ReactElement;
    showOverflow?: boolean;
    sliderRef?: RefObject<HTMLElement>;
    slider2Ref?: RefObject<HTMLElement>;
    paginationRef?: RefObject<HTMLElement>;
    showNumber?: boolean;
    shouldShrink?: boolean;
}

const StyledSwiper = styled(Swiper).withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'showOverflow', 'shouldShrink', 'slidePerView'].includes(String(prop)),
})<Pick<SliderProps, 'showOverflow' | 'shouldShrink'> & { ref?: RefObject<HTMLElement> }>`
    max-width: 100vw;
    height: 100%;

    .swiper-slide {
        height: auto;

        ${({ shouldShrink }) =>
            shouldShrink &&
            `
        width: auto !important;
        flex-shrink: unset;
    `}
    }

    ${({ showOverflow }) =>
        showOverflow &&
        `
        overflow: visible !important;
    `}
`;

const Slider = ({
    sliderName,
    children,
    showOverflow = false,
    sliderRef,
    slider2Ref,
    paginationRef,
    showNumber,
    shouldShrink = false,
    ...rest
}: SliderProps) => (
    <StyledSwiper
        grabCursor
        slideToClickedSlide
        modules={[
            Navigation,
            Pagination,
            Thumbs,
            Autoplay,
            Virtual,
            Controller,
            EffectCreative,
            EffectFade,
        ]}
        showOverflow={showOverflow}
        ref={sliderRef}
        pagination={
            paginationRef?.current
                ? {
                      el: paginationRef?.current,
                      clickable: true,
                      renderBullet: (index: number, className: string) =>
                          `<p class='bullet ${className} ${
                              showNumber ? 'bullet-number' : ''
                          }'><span>${showNumber ? index + 1 : ''}</span></p>`,
                  }
                : false
        }
        shouldShrink={shouldShrink}
        {...rest}
    >
        {Children.toArray(children).map((child, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`slide-${index}-${sliderName}`} virtualIndex={index}>
                {child}
            </SwiperSlide>
        ))}
    </StyledSwiper>
);

export default Slider;
