/* eslint-disable react-hooks/exhaustive-deps */
import FocusTrap from 'focus-trap-react';
import { ReactElement, ReactNode, useEffect, forwardRef, ForwardedRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/atoms/Box';

import { ModalSize } from '@components/molecules/Modal/Modal';

import ModalHeader from './ModalHeader';

const modalSizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            height: 'max-content',
            maxWidth: '20rem',
            margin: '0 auto',
            borderRadius: '6px',
        },
        medium: {
            height: 'max-content',
            maxWidth: '56.25rem',
            margin: '0 auto',
            borderRadius: '8px',
        },
    },
});

const AnimatedBox = styled(animated(Box))<Pick<ModalBodyProps, 'size'>>`
    background: ${({ background }) => background};
    position: relative;
    ${modalSizeVariant}
`;

interface ModalBodyProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    actions?: ReactNode;
    size?: ModalSize;
    title?: string;
    background: string;
}

const ModalBody = (
    { isOpen, onClose, children, actions, size, title, background }: ModalBodyProps,
    ref: ForwardedRef<HTMLElement>,
): ReactElement => {
    const animation = useSpring({
        from: {
            y: 100,
        },
    });

    useEffect(() => {
        if (isOpen) {
            animation.y.start(0, { delay: 50 });
        } else {
            animation.y.start(100);
        }
    }, [isOpen]);

    return (
        <FocusTrap
            active={isOpen}
            focusTrapOptions={{
                fallbackFocus: 'html',
                returnFocusOnDeactivate: false,
                clickOutsideDeactivates: true,
                allowOutsideClick: true,
            }}
        >
            <AnimatedBox
                size={size}
                borderRadius={{ _: 0, laptopS: 8 }}
                width="100%"
                height={{ _: '100vh', laptopS: 'max-content' }}
                maxHeight={{ _: '100vh', laptopS: '90vh' }}
                bg={{ light: 'base.p100', dark: 'base.m60' }}
                display="flex"
                flexDirection="column"
                background={background}
                p="1rem"
                ref={ref}
                style={animation}
            >
                <ModalHeader
                    outsideBtn={background === 'transparent'}
                    title={title}
                    onClose={onClose}
                    hasCloseIcon
                />
                <RemoveScroll forwardProps>
                    <Box width="100%" maxHeight="100%" p="1rem" overflowY="auto" flex={1}>
                        {children}
                    </Box>
                </RemoveScroll>
                {actions && <Box>{actions}</Box>}
            </AnimatedBox>
        </FocusTrap>
    );
};

export default forwardRef(ModalBody);
