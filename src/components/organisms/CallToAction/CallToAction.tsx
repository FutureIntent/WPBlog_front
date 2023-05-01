import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import { Parallax } from 'react-scroll-parallax';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import { BuyCryoCTATemplateProps } from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';

const CallToAction = ({
    image,
    flipped = false,
    children,
}: Pick<BuyCryoCTATemplateProps, 'image' | 'flipped'> & { children: ReactElement }) => {
    const { tablet } = useBreakpoint();

    return (
        <Box as="section" pb={140} pt={90}>
            <GridParent noGap noGutter>
                <GridChild
                    gridColumn={{
                        _: '1 / span 12',
                        laptopS: flipped ? '7 / span 6' : '1 / span 6',
                    }}
                    gridRow={{ _: '1 / 2', laptopS: '1 / 1' }}
                    data-sal="slide-right"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration="1000"
                >
                    <Parallax speed={4}>
                        <AspectRatio
                            ratio={tablet ? 945 / 720 : 768 / 594}
                            style={{ minHeight: tablet ? 720 : 'auto' }}
                        >
                            <GatsbyImage
                                style={{ height: '100%', width: '100%' }}
                                image={image}
                                alt="background"
                            />
                        </AspectRatio>
                    </Parallax>
                </GridChild>
                <GridChild
                    gridColumn="1 / span 12"
                    gridRow={{ _: '2 / 2', laptopS: '1 / 1' }}
                    data-sal="slide-left"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration="1000"
                >
                    <Box display="flex" alignItems="center" height="100%" justifyContent="center">
                        <Parallax speed={-4}>{children}</Parallax>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default CallToAction;
