import styled from 'styled-components';

const ButtonBase = styled.button`
    border: none;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: default;
        pointer-events: none;
    }

    &:focus {
        outline: none;
    }
`;

export default ButtonBase;
