import { ReactElement } from 'react';

import themeStyles from '@theme/configs';

import Box from '@components/atoms/Box';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';

const PrevSlide = ({ prevSlide }: { prevSlide: () => void }): ReactElement => (
    <Box
        onClick={prevSlide}
        position="absolute"
        left={0}
        top={0}
        zIndex={themeStyles.zIndices.sliderArrows}
        display="flex"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
        ml={{ _: 0, tablet: '2.8125rem' }}
    >
        <ArrowLeft size="large3" color="var(--white)" />
    </Box>
);

export default PrevSlide;
