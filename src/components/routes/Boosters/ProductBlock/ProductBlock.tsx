import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useSpring, config, animated } from 'react-spring';
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';

import breakpoints from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import { GridChildProps } from '@components/atoms/GridChild/GridChild';
import GridParent from '@components/atoms/GridParent';

const StyledProduct = styled(GatsbyImage)<{ flipped: boolean }>`
    ${({ flipped }) => (flipped ? 'left: -7%;' : 'right: -3%;')};
    position: relative;
    z-index: 10;

    ${mediaQueries.laptopS} {
        ${({ flipped }) => (flipped ? 'left: -14%;' : 'right: 0%;')};
    }

    ${mediaQueries.laptop} {
        ${({ flipped }) => (flipped ? 'left: -2%;' : 'right: 1%;')};
    }
`;

const StyledGridChild = styled(animated(GridChild))<GridChildProps & { flipped: boolean }>`
    @media all and (max-width: ${breakpoints.tablet}) {
        margin-bottom: 30px;
    }

    ${({ flipped }) =>
        flipped &&
        `
        transform: rotateY(180deg);
    `};
`;

const BlueBackground = styled.div<{ flipped?: boolean }>`
    background-color: rgba(0, 123, 255, 0.15);
    content: '';
    grid-area: 1 / 1;
    grid-column: ${({ flipped }) => (flipped ? '8 / 37' : '1 / 29')};
    height: 100%;
    ${({ flipped }) => (flipped ? `right: 0` : 'left: 0')};
    z-index: ${({ flipped }) => (flipped ? -1 : 0)};

    ${mediaQueries.laptopS} {
        grid-column: ${({ flipped }) => (flipped ? '6 / 37' : '1 / 32')};
    }
`;

const WhiteTextWrapper = styled.div<{ flipped: boolean }>`
    bottom: 8%;
    height: 60%;
    position: absolute;
    z-index: 9;

    ${({ flipped }) => (flipped ? `right: 8%` : 'left: 8%')};
`;

const ProductBlock = ({
    flipped = false,
    productImg,
    textSvg,
    children,
}: {
    flipped?: boolean;
    productImg: IGatsbyImageData;
    textSvg: ReactNode;
    children: ReactNode;
}) => {
    const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 });
    const [styles, api] = useSpring(() => ({
        from: { width: '0%' },
        to: { width: '100%' },
        delay: 200,
        config: config.molasses,
    }));

    useEffect(() => {
        api.stop();

        if (isInViewport) {
            api.start({ width: '100%' });
        }
    }, [isInViewport]);

    return (
        <GridParent as="section" noGutter ref={targetRef} pb={140}>
            <StyledGridChild
                gridRow={1}
                gridColumn={{
                    _: flipped ? '3/ span 10' : 'span 10',
                    tablet: flipped ? '8 / span 5' : 'span 6',
                }}
                flipped={flipped}
            >
                <animated.div style={{ ...styles }}>
                    <Box
                        display="grid"
                        alignItems="center"
                        gridTemplateColumns="repeat(36,1fr)"
                        height="100%"
                        justifyContent={flipped ? 'flex-start' : 'flex-end'}
                        style={flipped ? { transform: 'rotateY(-180deg)' } : undefined}
                    >
                        <Parallax
                            speed={-2}
                            style={{
                                zIndex: 11,
                                gridArea: '1 / 1 / auto / span 36',
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: flipped ? 'flex-start' : 'flex-end',
                            }}
                        >
                            <StyledProduct image={productImg} flipped={flipped} alt="product" />
                        </Parallax>

                        <Parallax
                            speed={1}
                            style={{
                                zIndex: 9,
                                position: 'relative',
                                height: '100%',
                                gridArea: '1 / 1 / auto / span 36',
                            }}
                        >
                            <WhiteTextWrapper flipped={flipped}>{textSvg}</WhiteTextWrapper>
                        </Parallax>
                        <BlueBackground flipped={flipped} />
                    </Box>
                </animated.div>
            </StyledGridChild>
            <GridChild
                mx={{ _: '1rem', laptopS: '0' }}
                gridColumn={{
                    _: 'span 12',
                    tablet: flipped ? '3 / span 4' : '7 / span 6',
                    laptopS: flipped ? '2 / span 4' : '8 / span 4',
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                    position="relative"
                >
                    {children}
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default ProductBlock;
