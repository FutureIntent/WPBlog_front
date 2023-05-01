import { hexToRGB } from '@utils/helpers';
import React, { ReactNode, ReactPortal, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import { useModalContext } from '@providers/ModalProvider';

import { useEventListener } from '@hooks/useEventListener';

import { colors } from '@theme/configs/colors';

import Box from '@components/atoms/Box';

import ModalBody from './ModalBody';

export type ModalSize = 'small' | 'medium';

const BaseModalBackground = styled(animated.div)`
    align-items: center;
    background-color: rgba(${hexToRGB(colors.blackBrand)}, 0.8);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: ${({ theme }) => theme.zIndices.modal};
`;
interface ModalProps {
    children: ReactNode;
    name: string;
    onClose: () => void;
    actions?: ReactNode;
    size?: ModalSize;
    title?: string;
    background?: string;
}

const Modal = ({
    children,
    name,
    onClose,
    size,
    actions,
    title,
    background = 'var(--white)',
}: ModalProps): null | ReactPortal => {
    const [isActive, setIsActive] = useState(false);
    const { modalNode, type } = useModalContext();
    const targetElement = useRef<HTMLElement>(null);
    const animation = useSpring({
        from: {
            opacity: 0,
        },
        onRest: () => {
            if (!isActive) {
                onClose();
            }
        },
    });

    const handleCloseModal = () => {
        setIsActive(false);
    };

    useEffect(() => {
        const isCurrentModal = name === type;

        setIsActive(isCurrentModal);
    }, [name, type]);

    useEffect(() => {
        if (isActive) {
            animation.opacity.start(1);
        } else {
            animation.opacity.start(0, { delay: 100 });
        }
    }, [isActive]);

    const close = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEventListener({
        eventName: 'keydown',
        listener: close,
        updateValue: type,
    });

    const handleOutside = (event: SyntheticEvent) => {
        const parentPosition = 10;
        const comparedPosition = targetElement.current?.compareDocumentPosition(
            event.target as Node,
        );

        if (comparedPosition === parentPosition) {
            handleCloseModal();
        }
    };

    if (modalNode && name === type) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return createPortal(
            <BaseModalBackground style={animation} onMouseDown={handleOutside}>
                <Box maxWidth="100rem" flexGrow={1} padding={{ _: '0', laptopS: '0 5rem' }}>
                    <ModalBody
                        actions={actions}
                        isOpen={isActive}
                        onClose={handleCloseModal}
                        ref={targetElement}
                        size={size}
                        title={title}
                        background={background}
                    >
                        {children}
                    </ModalBody>
                </Box>
            </BaseModalBackground>,
            modalNode,
        );
    }

    return null;
};

export default Modal;
