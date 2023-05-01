import styled from 'styled-components';

export const GradientBG = styled.div`
    position: relative;

    &::after {
        background: transparent linear-gradient(180deg, #070f39cc 0%, #070f394d 100%) 0% 0%
            no-repeat padding-box;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;
