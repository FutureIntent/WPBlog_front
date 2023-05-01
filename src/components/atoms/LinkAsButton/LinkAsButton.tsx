import { props as defProps } from '@styled-system/should-forward-prop';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { border, space, variant as styledVariant } from 'styled-system';

// import { usePageContext } from '@providers/PageContext';
import { ButtonProps } from '@components/atoms/Button/Button';
import AppLink from '@components/atoms/Link';

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': 'var(--white)',
            'backgroundColor': 'var(--blue-brand)',
            '&:hover': {
                backgroundColor: '#0062C4',
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
                border: '2px solid var(--blue-brand)',
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
                border: '2px solid var(--grey-dark)',
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledLink = styled(AppLink)
    .withConfig({
        shouldForwardProp: (prop) => ![...defProps, 'variants', 'withIcon'].includes(String(prop)),
    })
    .attrs((props: ButtonProps): any => ({
        variant: props.variant || 'primary',
        btnSize: props.size || 'large',
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

    ${({ withIcon, size }) =>
        withIcon &&
        `

    padding-right: ${size === size.small ? '0.9rem' : '1.3rem'};

    svg {
        vertical-align: middle;
        margin-left: 0.8rem
    }
  `}
`;

const LinkAsButton = ({
    to,
    variant = 'primary',
    children,
    withIcon = false,
        ...rest
}: {
    to: string;
    children: ReactNode;
} & ButtonProps): ReactElement => (
    // const { lang } = usePageContext();

    <StyledLink variant={variant} withIcon={withIcon} {...rest} to={`${to}`}>
        {children}
    </StyledLink>
);
export default LinkAsButton;
