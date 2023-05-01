import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import Form from '@components/molecules/Form/Form';

const StyledGridParent = styled(GridParent)`
    z-index: 1;
`;

const FormBlock = () => (
    <StyledGridParent>
        <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
            <Box mt={{ _: '4rem', tablet: '-22rem' }}>
                <Form />
            </Box>
        </GridChild>
    </StyledGridParent>
);

export default FormBlock;
