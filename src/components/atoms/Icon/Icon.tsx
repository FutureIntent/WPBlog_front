import { SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { Device } from '@theme/configs/breakpoints';

export type Size =
    | 'nano'
    | 'micro'
    | 'small'
    | 'small2'
    | 'medium'
    | 'medium2'
    | 'medium3'
    | 'large'
    | 'large2'
    | 'large3'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'fullWidth';
export type IconSize = Size | ({ _: Size } & { [key in Device]?: Size });

export interface IconProps extends Pick<SVGProps<SVGElement>, 'fill'> {
    size?: IconSize;
    viewBox?: string;
    filled?: boolean;
    color?: string;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        nano: {
            width: '0.4rem',
            height: 'auto',
        }, // 6.4px
        micro: {
            width: '0.5rem',
            height: '0.5rem',
        }, // 8px
        small: {
            width: '0.75rem',
            height: '0.75rem',
        }, // 12px
        small2: {
            width: '1rem',
            height: '1rem',
        }, // 16px
        medium: {
            width: '1.25rem',
            height: '1.25rem',
        }, // 20px
        medium2: {
            width: '1.5rem',
            height: '1.5rem',
        }, // 24px
        medium3: {
            width: '1.875rem',
            height: '1.875rem',
        }, // 30px
        large: {
            width: '2rem',
            height: '2rem',
        }, // 32px
        large2: {
            width: '2.25rem',
            height: '2.25rem',
        }, // 36px
        large3: {
            width: '2.5rem',
            height: '2.5rem',
        }, // 40px
        xl: {
            width: '3rem',
            height: '3rem',
        }, // 48px
        xxl: {
            width: '4rem',
            height: '4rem',
        }, // 64px
        xxxl: {
            width: '5rem',
            height: '5rem',
        }, // 80px
        fullWidth: {
            width: '100%',
            height: '100%',
        },
    },
});

const Icon = styled.svg.attrs(
    ({ size = 'medium', viewBox = '0 0 24 24', filled = false, color }: IconProps) => ({
        size,
        viewBox,
        filled,
        color,
    }),
)<IconProps>`
    ${sizeVariant};
    flex-shrink: 0;

    ${({ color, filled }) =>
        color &&
        css`
            color: ${color};

            > path {
                ${filled && `fill: ${color}`};
            }
        `}
`;

export default Icon;
