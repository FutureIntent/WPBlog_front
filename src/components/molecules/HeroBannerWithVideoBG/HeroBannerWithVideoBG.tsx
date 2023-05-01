import { ReactNode } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import VideoBG from '@components/atoms/VideoBG';

interface IHeroBannerWithVideoBG {
    id?: string;
    url: string;
    children: ReactNode;
}

const StyledContent = styled(Box)`
    &::after {
        align-items: center;
        background: transparent linear-gradient(180deg, #070f39b3 0%, #070f3900 100%) 0% 0%
            no-repeat padding-box;
        content: '';
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

const HeroBannerWithVideoBG = ({ url, children, id }: IHeroBannerWithVideoBG) => (
    <StyledContent
        as="section"
        id={id}
        overflow="hidden"
        minHeight={{ _: '568px', tablet: '1080px' }}
        position="relative"
        height="100vh"
        backgroundColor="transparent"
    >
        <VideoBG src={url} type="video/mp4" />

        <Box
            display="grid"
            placeItems="center"
            position="absolute"
            width="100%"
            height="100%"
            zIndex={10}
        >
            {children}
        </Box>
    </StyledContent>
);

export default HeroBannerWithVideoBG;
