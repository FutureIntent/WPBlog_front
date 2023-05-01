import styled from 'styled-components';
import { variant, ZIndexProps, zIndex } from 'styled-system';

export type OverlayTypes = 'horizontal' | 'vertical' | 'verticalReverse' | 'dark';

const overlayVariants = variant({
    prop: 'overlay',
    variants: {
        horizontal: {
            background:
                'transparent linear-gradient(90deg, #070F39CC 0%, #070F394D 100%) 0% 0% no-repeat padding-box;',
        },
        vertical: {
            background:
                'transparent linear-gradient(180deg, #070F39CC 0%, #070F394D 100%) 0% 0% no-repeat padding-box',
        },
        verticalReverse: {
            background:
                'transparent linear-gradient(0deg, #070F39B3 0%, #070F3933 100%) 0% 0% no-repeat padding-box',
        },
        dark: {
            background:
                'transparent linear-gradient(180deg, #070F39E6 0%, #070F3980 100%) 0% 0% no-repeat padding-box;',
        },
    },
});

const OverlayBox = styled.div<{ overlay?: OverlayTypes; fixed?: boolean } & ZIndexProps>`
    ${({ fixed }) =>
        !fixed &&
        `
    grid-area: 1 / 1 / auto / auto;
    height: 100%;
    width: 100%;
    `}

    ${({ fixed }) =>
        fixed &&
        `
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    `}
    place-items: center;

    z-index: 1;
    ${overlayVariants};
    ${zIndex};
`;

export default OverlayBox;
