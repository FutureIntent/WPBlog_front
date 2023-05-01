// eslint-disable-next-line import/no-extraneous-dependencies
import { Property, Properties } from 'csstype';
import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode } from 'react';
import { ZIndexProps } from 'styled-system';

import Box from '@components/atoms/Box';

import { OverlayBox, OverlayTypes } from '@components/molecules/OverlayBox';

interface BackgroundImageProps extends Omit<GatsbyImageProps, 'image' | 'alt'> {
    imageData?: IGatsbyImageData;
    overlay?: OverlayTypes;
    children?: ReactNode;
    alt?: string;
    minHeight?: number;
    fixed?: boolean;
    imgPosition?: string;
    contentStyles?: Properties;
    image_url?: string;
}

const BackgroundImage = ({
    imageData,
    overlay,
    children,
    alt = 'image',
    minHeight,
    fixed = false,
    zIndex,
    imgPosition,
    imgStyle,
    image_url,
    style,
    contentStyles,
    ...rest
}: BackgroundImageProps & ZIndexProps) => {
    const imgStyles = {
        position: fixed ? ('fixed' as Property.Position) : undefined,
        height: fixed ? '100vh' : undefined,
        maxHeight: fixed ? '100vh' : undefined,
        objectPosition: imgPosition ?? undefined,
    };

    if (overlay) {
        return (
            <Box display="grid" height="100%" minHeight={minHeight} position="relative">
                <OverlayBox overlay={overlay} style={imgStyle} zIndex={zIndex || 1} fixed={fixed} />
                {imageData ? <GatsbyImage
                    {...rest}
                    style={{
                        gridArea: '1/1',
                        ...style,
                    }}
                    imgStyle={{ ...imgStyles, ...imgStyle }}
                    image={imageData}
                    alt={alt}
                /> : <img src={image_url} alt={alt} style={{
                        gridArea: '1/1',
                        ...style,
                        ...imgStyles
                    }}
                    />}

                <Box style={{ gridArea: '1/1', ...contentStyles }} zIndex={2}>
                    {children ?? null}
                </Box>
            </Box>
        );
    }

    return (
        <Box display="grid" height="100%" minHeight={minHeight}>
            <GatsbyImage
                {...rest}
                style={{
                    gridArea: '1/1',
                    ...style,
                }}
                imgStyle={{ ...imgStyles, ...imgStyle }}
                image={imageData}
                alt={alt}
            />
            <OverlayBox style={contentStyles}>{children ?? null}</OverlayBox>
        </Box>
    );
};

export default BackgroundImage;
