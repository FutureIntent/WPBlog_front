import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const StyledBox = styled(Box)<{ aspectRatio?: number }>`
    aspect-ratio: 270/230;

    ${mediaQueries.tablet} {
        aspect-ratio: 384/310;
    }

    ${mediaQueries.laptopS} {
        aspect-ratio: 960/310;
    }
`;

const StyledTypography = styled(Typography)`
    align-items: flex-end;
    background-color: rgba(16, 16, 28, 0.5);
    bottom: 0;
    display: flex;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
`;

const BlurredDiv = styled.div`
    overflow: hidden;
    transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;

    &.hovered {
        filter: blur(20px);
        transform: scale(1.1);
    }
`;

interface CardProps {
    imageData: IGatsbyImageData;
    title?: string;
}

const Card = ({ imageData, title }: CardProps) => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const [isHovered, setIsHovered] = useState(false);

    const styles = tablet ? 300 : 160;

    return (
        <Box
            overflow="hidden"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <BlurredDiv className={isHovered ? 'hovered' : 'null'}>
                <BackgroundImage minHeight={styles} imageData={imageData}>
                    <StyledBox
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </BackgroundImage>
            </BlurredDiv>
            {isHovered && title && (
                <StyledTypography
                    p={{ _: '1.25rem', tablet: '2.5rem' }}
                    variant={{ _: 'accent', tablet: 'h2' }}
                    color="var(--white)"
                    mt="1.25rem"
                    transformText="capitalize"
                >
                    {t(title)}
                </StyledTypography>
            )}
        </Box>
    );
};

export default Card;
