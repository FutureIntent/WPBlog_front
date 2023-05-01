import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

export interface BuyCryoCTATemplateProps {
    image: IGatsbyImageData;
    flipped?: boolean;
    size?: ContentSize;
    imageSize?: BlockImageSize;
    children: ReactNode;
}

export enum ContentSize {
    default = 'default',
    wide = 'wide',
    ultraWide = 'ultraWide',
}

export enum BlockImageSize {
    default = 'default',
    small = 'small',
}

const getContentSize = (flipped: boolean) => ({
    ultraWide: {
        _: 'span 12',
        laptopS: '3 / span 9',
        laptop: '4 / span 7',
        desktop: flipped ? '3 / span 7' : '4 / span 7',
    },
    wide: {
        _: 'span 12',
        laptopS: '3 / span 9',
        laptop: '4 / span 7',
        desktop: flipped ? '3 / span 6' : '5 / span 6',
    },
    default: {
        _: 'span 12',
        laptopS: '3 / span 9',
        laptop: '4 / span 7',
        desktop: flipped ? '4 / span 5' : '5 / span 5',
    },
});

const getImageSize = (flipped: boolean) => ({
    small: flipped ? { _: 'span 12', laptopS: '9 / span 4' } : { _: 'span 12', laptopS: 'span 4' },
    default: flipped
        ? { _: 'span 12', laptopS: '7 / span 6' }
        : { _: 'span 12', laptopS: 'span 6' },
});

const StyledGridParent = styled(GridParent)`
    width: 100%;
`;

const BlockWithBackground = ({
    image,
    flipped = false,
    size = ContentSize.default,
    imageSize = BlockImageSize.default,
    children,
}: BuyCryoCTATemplateProps): ReactElement => {
    const { tablet } = useBreakpoint();

    return (
        <Box
            position="relative"
            data-sal={flipped ? 'slide-left' : 'slide-right'}
            data-sal-easing="ease-out-quart"
            data-sal-duration={600}
            pb="1.5rem"
        >
            <GridParent as="div" noGutter>
                <GridChild gridColumn={getImageSize(flipped)[imageSize]}>
                    <AspectRatio
                        ratio={tablet ? 945 / 720 : 768 / 585}
                        style={{ minHeight: tablet ? 720 : 'auto' }}
                    >
                        <GatsbyImage
                            style={{ height: '100%', width: '100%' }}
                            image={image}
                            alt="background"
                        />
                    </AspectRatio>
                </GridChild>
            </GridParent>
            <Box
                position={{ _: 'relative', laptopS: 'absolute' }}
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                alignItems={{ _: 'flex-end', laptopS: 'center' }}
            >
                <StyledGridParent>
                    <GridChild gridColumn={getContentSize(flipped)[size]}>{children}</GridChild>
                </StyledGridParent>
            </Box>
        </Box>
    );
};

export default BlockWithBackground;
