import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';

import breakpoints from '@theme/configs/breakpoints';

import ButtonBase from '@components/atoms/ButtonBase';
import Typography from '@components/atoms/Typography';

interface StyledIconButtonProps {
    isActive?: boolean;
    disabledFill?: boolean;
    disabledHover?: boolean;
    color?: string;
    shape?: 'rect' | 'circle';
    transparentHover?: boolean;
}

const shape = styledVariant({
    prop: 'shape',
    variants: {
        rect: {
            height: '24px',
            padding: '0px 8px',
            borderRadius: '6px',
        },
        circle: {
            height: '40px',
            padding: '8px',
            borderRadius: '50%',
        },
    },
});

const IconButton = styled(({ children, ...rest }) => (
    <ButtonBase {...rest}>
        <Typography variant="caption" as="div">
            {children}
        </Typography>
    </ButtonBase>
))
    .attrs((props) => ({
        isActive: props.isActive || false,
        disabledFill: props.disabledFill || false,
        shape: props.shape || 'circle',
        transparentHover: props.transparentHover || false,
    }))
    .withConfig({
        shouldForwardProp: (prop) =>
            ![...defaultFilteredProps, 'isHomePage'].includes(String(prop)),
    })<StyledIconButtonProps>`

    min-width: 40px;
    background-color: transparent;

    &:hover {

      ${({ transparentHover }) =>
          transparentHover &&
          `
            @media all and (max-width: ${breakpoints.laptopS}) {
                background-color: transparent;
            }
          `}
    }

    &:disabled {
        opacity: 0.32;
    }


    ${shape}
`;

export default IconButton;
