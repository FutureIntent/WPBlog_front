import { ReactElement } from 'react';
import styled from 'styled-components';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import IconButton from '@components/atoms/IconButton';

import CloseBtn from '@components/molecules/Icons/CloseBtn';

interface StyledIconButtonProps {
    hasCloseIcon?: boolean;
    hasTitle?: boolean;
}

const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
    display: ${({ hasCloseIcon }) => (hasCloseIcon ? 'block' : 'none')};
    z-index: ${({ theme }) => theme.zIndices.modalCloseButton};
`;

interface ModalHeaderProps {
    title?: string;
    onClose: () => void;
    hasCloseIcon?: boolean;
    outsideBtn: boolean;
}

const ModalHeader = ({
    title,
    onClose,
    hasCloseIcon,
    outsideBtn,
}: ModalHeaderProps): ReactElement => (
    <Box
        position="absolute"
        right={outsideBtn ? 35 : 15}
        top={outsideBtn ? 35 : 15}
        zIndex={theme.zIndices.stepUp}
        padding={{ _: '0', laptopS: '0.5rem 1rem' }}
        minHeight={{ _: title ? '2.5rem' : '0', laptopS: '2.5rem' }}
    >
        <StyledIconButton onClick={onClose} hasCloseIcon={hasCloseIcon} hasTitle={Boolean(title)}>
            <CloseBtn size="medium3" color="var(--grey-dark)" />
        </StyledIconButton>
    </Box>
);

export default ModalHeader;
