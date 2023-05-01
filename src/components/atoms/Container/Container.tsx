import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant as StyledVariant } from 'styled-system';

import { CenterAlign } from '@components/atoms/CenterAlign';

const containerType = StyledVariant({
    prop: 'type',
    variants: {
        fixed: {
            maxWidth: '1635px',
        },
        fluid: {
            maxWidth: '100%',
        },
    },
});

const StyledContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => ![...defaultFilteredProps, 'type'].includes(String(prop)),
})<SpaceProps & LayoutProps & { type: 'fixed' | 'fluid' }>`
    ${space}
    ${layout}
  ${containerType}
`;

const Container = ({
    children,
    type,
    ...rest
}: {
    children: ReactElement;
    type: 'fixed' | 'fluid';
}) => (
    <CenterAlign>
        <StyledContainer type={type} {...rest}>
            {children}
        </StyledContainer>
    </CenterAlign>
);

export default Container;
