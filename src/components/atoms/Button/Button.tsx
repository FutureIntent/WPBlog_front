import styled from 'styled-components';
import {
    variant as styledVariant,
    SizeProps,
    space,
    SpaceProps,
    BorderProps,
    border,
} from 'styled-system';

import { Theme } from '@theme/configs';

import ButtonBase from '@components/atoms/ButtonBase';

export type ButtonVariants = 'primary' | 'secondary' | 'night';

export interface ButtonProps extends SpaceProps, BorderProps {
    variant?: ButtonVariants;
    size?: SizeProps<Theme, 'small' | 'large' | 'fullWidth'>;
    withIcon?: boolean;
}

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': 'var(--white)',
            'backgroundColor': 'var(--blue-brand)',
            '&:hover': {
                backgroundColor: 'var(--blue-dim)',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        secondary: {
            'color': 'var(--blue-brand)',
            'backgroundColor': 'transparent',
            'border': '1px solid var(--blue-brand)',
            '&:hover': {
                border: '1px solid var(--blue-dim)',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        night: {
            'color': 'var(--white)',
            'backgroundColor': 'transparent',
            'border': '1px solid var(--grey-dark)',
            '&:hover': {
                border: '1px solid var(--grey)',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
    },
});

const btnSize = styledVariant({
    prop: 'size',

    variants: {
        small: {
            minWidth: '10rem',
        },
        large: {
            minWidth: '12.5rem',
        },
        fullWidth: {
            minWidth: '100%',
        },
    },
});

const Button = styled(ButtonBase).attrs((props: ButtonProps): any => ({
    variant: props.variant || 'primary',
    size: props.size || 'large',
    withIcon: props.withIcon || false,
}))<ButtonProps>`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: ${({ withIcon }) => (withIcon ? 'flex-end' : 'center')};
    height: 3.125rem;
    border-radius: 4px;
    white-space: nowrap;
    transition: transform 0.2s ease-in-out;
    ${btnSize};
    ${space};
    ${variants};

    ${border};

    padding: ${({ size }) => (size === size.small ? '0.9rem' : '1.3rem')};

    // eslint-disable-next-line @typescript-eslint/no-shadow
    ${({ withIcon, size }) =>
        withIcon &&
        `

    // padding-right: ${size === size.small ? '0.9rem' : '1.3rem'};

    svg {
        vertical-align: middle;
        margin-left: 0.8rem
    }
  `}
`;

export default Button;
