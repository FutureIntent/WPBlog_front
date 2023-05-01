import styled from 'styled-components';

import SliderResizeArrows from '@components/molecules/Icons/SliderResizeArrows';

const StyledHandle = styled.div`
    align-items: center;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    height: 2rem;
    justify-content: center;
    left: calc(50% - 1rem);
    position: absolute;
    transform: translateY(-50%);
    width: 2rem;

    svg {
        transform: rotate(90deg);
        transform-origin: center center;
    }
`;

export const Handle = () => (
    <StyledHandle>
        <SliderResizeArrows color="var(--grey-dark)" />
    </StyledHandle>
);
