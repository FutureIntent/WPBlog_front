import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

const ServiceTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 8.5rem;
    padding: 30px 20px;

    ${mediaQueries.laptopS} {
        max-width: 1210px;
        margin: 0 auto;
        padding: 0;
        width: 100%;
    }

    ${mediaQueries.tablet} {
        align-items: center;
        display: grid;
        flex-direction: row;
        grid-template-columns: minMax(350px, 1fr) minMax(300px, 650px);
        height: 100%;
    }
`;

export default ServiceTabContainer;
