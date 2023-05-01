import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

const TabsContainer = styled.div`
    box-shadow: ${({ theme }) => theme.shadows.card};
    margin-bottom: 1.25rem;
    min-width: 17.5rem;
    padding-top: 5.625rem;

    ${mediaQueries.tablet} {
        margin-bottom: 2.5rem;
        padding-top: 8.5rem;
    }

    ${mediaQueries.laptopS} {
        margin-bottom: unset;
        min-width: 21.5rem;
        padding: 5.625rem 0 12.5625rem;
    }
`;

export default TabsContainer;
