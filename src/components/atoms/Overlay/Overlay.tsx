import styled from 'styled-components';

const Overlay = styled.div`
    background: transparent linear-gradient(180deg, #070f3999 0%, #070f3933 100%) 0% 0% no-repeat
        padding-box;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.stepUp};
`;

export default Overlay;
