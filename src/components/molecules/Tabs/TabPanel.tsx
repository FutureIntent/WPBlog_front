import { TabPanel as ReactTabPanel } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

const TabPanel = styled(ReactTabPanel)`
    grid-column: 1 / span 12;
    grid-row: 1 / 1;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    &.react-tabs__tab-panel--selected {
        opacity: 1;
    }

    ${mediaQueries.tablet} {
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }
`;

export default TabPanel;
