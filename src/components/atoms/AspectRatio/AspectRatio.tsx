import { props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';

import Box, { BoxProps } from '@components/atoms/Box';

const InnerContainer = styled.div`
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;

interface AspectRatioProps extends BoxProps {
    ratio: number;
}

const AspectRatio = styled(({ children, ...rest }) => (
    <Box {...rest}>
        <InnerContainer>{children}</InnerContainer>
    </Box>
)).withConfig({
    shouldForwardProp: (prop) => ![...props, 'ratio'].includes(String(prop)),
})<AspectRatioProps>`
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;

    &::before {
        content: '';
        display: block;
        height: 0;
        padding-top: calc(100% / ${({ ratio }) => ratio});
        width: 100%;
    }
`;

export default AspectRatio;
