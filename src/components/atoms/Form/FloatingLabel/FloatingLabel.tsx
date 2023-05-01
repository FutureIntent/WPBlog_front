import { props } from '@styled-system/should-forward-prop';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { FONT_FAMILY } from '@components/atoms/Typography/Typography';

const StyledFloatingLabel = styled.div.withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive'].includes(String(prop)),
})<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    position: relative;

    label {
        position: absolute;
        transform: translate(20px, 15px) scale(1);
        transform-origin: top left;
        transition: all 0.2s ease-out;
        font-family: ${FONT_FAMILY}, sans-serif;
        font-size: 18px;
        color: var(--grey-dark);
        pointer-events: none;

        ${({ isActive }) =>
            isActive &&
            `
            font-size: 12px;
            transform: translate(20px, 10px) scale(0.75);
        `};
    }

    &:focus-within label {
        font-size: 12px;
        transform: translate(20px, 10px) scale(0.75);
    }
`;

const FloatingLabel = ({ isActive, children }: { isActive: boolean; children: ReactNode }) => (
    <StyledFloatingLabel isActive={isActive}>{children}</StyledFloatingLabel>
);

export default FloatingLabel;
