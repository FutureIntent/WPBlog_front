import styled from 'styled-components';
import { colors } from '@theme/configs/colors';
import { hexToRGB } from '@utils/helpers';

const Marker = styled.div<{ lng: number, lat: number }>`
    background-color: var(--blue-brand);
    border-radius: 50%;
    height: 10px;
    position: relative;
    width: 10px;

    &:after {
        background-color: rgba(${hexToRGB(colors.blueBrand)}, 0.2);
        border-radius: 50%;
        content: '';
        height: 18px;
        left:-4px;
        position: absolute;
        top: -4px;
        width: 18px;
    }
`;

export default Marker;
