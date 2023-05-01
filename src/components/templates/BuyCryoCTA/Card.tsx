import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

const Card = styled.div`
    background-color: var(--white);
    box-shadow: ${({ theme }) => theme.shadows.card};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -5rem;
    max-width: 900px;
    padding: 1.25rem 1.5rem;

    ${mediaQueries.tablet} {
        flex-direction: row;
        margin-top: -11rem;
        padding: 1.875rem 2.5rem;
    }

    ${mediaQueries.laptopS} {
        margin-top: 0;
    }
`;

export default Card;
