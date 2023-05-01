import styled from 'styled-components';

import ButtonBase from '@components/atoms/ButtonBase';

const SliderArrowBtn = styled(ButtonBase)`
    background-color: transparent;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`;

export default SliderArrowBtn;
