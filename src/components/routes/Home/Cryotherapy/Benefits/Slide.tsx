import { getClampValue } from '@utils/helpers';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React, { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import GradientBG from '@components/atoms/GradientBg';
import Typography from '@components/atoms/Typography';

interface SlideProps {
    title: string;
    icon: ReactElement;
    description: string;
    poster: any;
}

const OverImgText = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    left: 0;
    padding: 0 1rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.textOverGradient};

    ${mediaQueries.tablet} {
        padding: 1.25rem;
    }
`;

const StyledWrapper = styled.div`
    flex: 1;
    padding: 1.25rem 1.25rem 1.5rem;

    ${mediaQueries.tablet} {
        padding: 1.5rem 2.5rem 3.25rem;
    }
`;

const Slide = ({ title, icon, description, poster }: SlideProps) => {
    const { tabletL, tablet } = useBreakpoint();

    return (
        <Box width={tabletL ? 435 : 265} height="100%" display="flex" flexDirection="column">
            <GradientBG>
                <AspectRatio ratio={tablet ? 435 / 150 : 265 / 90}>
                    {cloneElement(poster, { style: { height: '100%', width: '100%' } })}
                    <OverImgText>
                        <div>
                            {React.cloneElement(icon, {
                                size: tablet ? 'xl' : 'large',
                                color: 'var(--white)',
                            })}
                        </div>
                        <Typography
                            variant="h2"
                            fontSize={getClampValue('20px', '30px')}
                            color="var(--white)"
                            ml="1rem"
                        >
                            {title}
                        </Typography>
                    </OverImgText>
                </AspectRatio>
            </GradientBG>
            <StyledWrapper className="backdrop-blur-dark">
                <Typography variant="paragraph" color="var(--white)">
                    {description}
                </Typography>
            </StyledWrapper>
        </Box>
    );
};

export default Slide;
