import styled from 'styled-components';

import breakpoints from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

const ContentWrapper = styled.div`
    box-shadow: ${({ theme }) => theme.shadows.card};
    max-width: 745px;
    padding: 1.25rem;

    @media all and (max-width: ${breakpoints.tablet}) {
        background-color: var(--white);
    }

    ${mediaQueries.tablet} {
        box-shadow: unset;
        padding: 2.75rem 3.4rem;
    }
`;

export default ContentWrapper;
