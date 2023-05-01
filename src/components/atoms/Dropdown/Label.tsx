import styled from 'styled-components';

import Typography, { TypographyProps } from '@components/atoms/Typography';

export const StyledLabel = styled.label`
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 90;
`;

export const StyledLabelText = styled(Typography)<TypographyProps>`
    bottom: 0;
    height: 100%;
    left: 20px;
    position: absolute;
    transform: translateY(16px);
    transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
    width: 100%;
`;
