import { ReactElement, RefObject } from 'react';

import themeStyles from '@theme/configs';

import Box from '@components/atoms/Box';

import { SliderPagination } from '@components/molecules/Slider';

const Pagination = ({
    sliderPaginationRef,
}: {
    sliderPaginationRef: RefObject<HTMLElement>;
}): ReactElement => (
    <Box
        pl={{ _: 0, tablet: '2.5rem' }}
        position="absolute"
        bottom={0}
        width="100%"
        zIndex={themeStyles.zIndices.sliderArrows}
        display="flex"
        justifyContent="center"
        mb="2.5rem"
    >
        <SliderPagination
            bulletColor="var(--white)"
            className="swiper-pagination"
            ref={sliderPaginationRef}
        />
    </Box>
);
export default Pagination;
