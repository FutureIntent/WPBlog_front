import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const StyledTypography = styled(Typography)`
    position: relative;

    &::after {
        background-color: var(--blue-brand);
        bottom: -0.75rem;
        content: '';
        height: 5px;
        left: 0;
        position: absolute;
        width: 60%;
    }
`;

const TabContent = ({ title, description }: { title: string; description: string }) => (
    <Box
        pt="10.4rem"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        height="100%"
        maxWidth={590}
    >
        <StyledTypography variant="h2" color="var(--white)" transformText="uppercase" mb="1.75rem">
            {title}
        </StyledTypography>
        <Typography variant="paragraph" color="var(--white)">
            {description}
        </Typography>
    </Box>
);

export default TabContent;
