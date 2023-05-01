import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import * as system from 'styled-system';

export interface BoxProps
    extends system.SpaceProps,
        system.LayoutProps,
        system.FlexboxProps,
        system.GridProps,
        system.BorderProps,
        system.ShadowProps,
        system.PositionProps,
        system.GridGapProps,
        system.TextAlignProps,
        system.BoxShadowProps,
        system.ColorProps {
    placeItems?: string;
    placeContent?: string;
    pointer?: boolean;
}

const Box = styled.div
    .withConfig({
        shouldForwardProp: (prop) =>
            ![...defaultFilteredProps, 'pointer', 'placeItems', 'placeContent'].includes(
                String(prop),
            ),
    })
    .attrs((props: BoxProps) => ({
        pointer: props.pointer || false,
    }))<BoxProps & { pointer?: boolean }>`
    place-items: ${({ placeItems }) => placeItems};
    place-content: ${({ placeContent }) => placeContent};
    ${system.space}
    ${system.color}
  ${system.layout}
  ${system.flexbox}
  ${system.grid}
  ${system.border}
  ${system.shadow}
  ${system.position}
  ${system.textAlign}
  ${system.typography}
  ${system.boxShadow}

    ${({ pointer }) =>
        pointer &&
        `
        cursor: pointer;
    `}
`;

export default Box;
