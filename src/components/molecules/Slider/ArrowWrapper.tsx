import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const ArrowWrapper = styled.div<SpaceProps>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    transform: scale(1);
    transition: transform 0.1s ease-in;
    ${space};

    &:hover{
        cursor: pointer;
        transform: scale(1.4);
    }
`;

export default ArrowWrapper;
