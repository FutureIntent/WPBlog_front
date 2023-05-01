import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import PdfFile from '@components/molecules/Icons/PdfFile';

const StyledTypography = styled(Typography)`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;

    ${mediaQueries.tablet} {
        -webkit-line-clamp: 4;
    }
`;

const FileCard = ({ fileName, hasMargin = false }: { fileName: string; hasMargin?: boolean }) => (
    <Box
        display="flex"
        width={{ _: '220px', tablet: '270px' }}
        height={{ _: '85px', tablet: '120px' }}
        boxShadow={theme.shadows.card}
        p={{ _: '0.6rem', tablet: '1.25rem' }}
        backgroundColor="var(--white)"
        mb={hasMargin ? '1rem' : ''}
    >
        <Box mr="1rem">
            <PdfFile color="var(--blue-brand)" size="xl" />
        </Box>
        <Box width={{ _: '155px', tablet: '166px' }}>
            <StyledTypography variant="caption" color="var(--black-brand)">
                {fileName}
            </StyledTypography>
        </Box>
    </Box>
);

export default FileCard;
