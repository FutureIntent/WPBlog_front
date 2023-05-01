import styled from 'styled-components';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';

const BGWrapper = styled(Box)`
    &::after {
        background: linear-gradient(270deg, #0b144500 0%, #0b1445cc 100%) 0 0 no-repeat padding-box;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: ${theme.zIndices.stepUp};
    }
`;

export default BGWrapper;
