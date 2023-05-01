import { ReactElement } from 'react';

import themeStyles from '@theme/configs';

import Box from '@components/atoms/Box';

import ArrowRight from '@components/molecules/Icons/ArrowRight';

const NextSlide = ({ nextSlide }: { nextSlide: () => void }): ReactElement => (
    <Box
        aria-describedby="Show next slide"
        onClick={nextSlide}
        position="absolute"
        top={0}
        right={0}
        zIndex={themeStyles.zIndices.sliderArrows}
        display="flex"
        height="100%"
        justifyContent="flex-end"
        alignItems="center"
        mr={{ _: 0, tablet: '2.8125rem' }}
    >
        <ArrowRight size="large3" color="var(--white)" />
    </Box>
);

export default NextSlide;
