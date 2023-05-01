import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import GridParent from '@components/atoms/GridParent';

const TabPanelWrapper = styled(GridParent).attrs(() => ({
    noGap: true,
    noGutter: true,
}))`
    ${mediaQueries.laptopS} {
        margin-left: 2rem;
        padding: 11.5rem 0;
        width: 100%;
    }
`;

export default TabPanelWrapper;
