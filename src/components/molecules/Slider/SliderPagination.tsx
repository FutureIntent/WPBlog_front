import { props as defaultProps } from '@styled-system/should-forward-prop';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';

const StyledBox = styled(Box).withConfig({
    shouldForwardProp: (prop) => ![...defaultProps, 'bulletColor'].includes(String(prop)),
})<{ bulletColor?: string }>`
    display: flex;
    align-items: center;
    height: 2.5rem;
    justify-content: center;

    .bullet {
        display: flex;
        place-items: center;
        place-content: center;
        border-radius: 50%;
        color: var(--white);
        height: 1.5rem;
        width: 1.5rem;

        ${mediaQueries.laptopS} {
            height: 2.5rem;
            width: 2.5rem;
        }

        &:not(.swiper-pagination-bullet-active)::after {
            content: '';
            border: 2px solid ${({ bulletColor }) => bulletColor ?? 'var(--grey-dark)'};
            display: inline-block;
            height: 0.75rem;
            width: 0.75rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.9rem;
            color: var(--white);
            background-color: transparent;
            transition: width 0.2s ease-in-out, height 0.2s ease-in-out,
                background-color 0.2s ease-in-out, border 0.3s ease-in-out;
        }

        &:hover {
            cursor: pointer;

            &::after {
                background-color: var(--blue-brand);
                height: 1rem;
                width: 1rem;
                border: 0;
            }
        }

        span {
            display: none;
        }

        &.swiper-pagination-bullet-active {
            background-color: var(--blue-brand);
            border: 0;

            &.bullet-number {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                text-align: center;

                span {
                    display: inline-block;
                }
            }
        }
    }
`;

const SliderPagination = (props: PropsWithChildren<any>, ref: ForwardedRef<any>) => {
    const { children, ...rest } = props;

    return (
        <StyledBox ref={ref} {...rest}>
            {children}
        </StyledBox>
    );
};

export default forwardRef(SliderPagination);
