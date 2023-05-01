import { ReactNode, ReactElement, useState, useEffect, useRef, useMemo } from 'react';

import ModalContext from './ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps): ReactElement => {
    const modalNode = useRef(null);
    const [stateModalNode, setStateModalNode] = useState<HTMLElement | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [data, setData] = useState<number>();
    const value = useMemo(
        () => ({
            modalNode: stateModalNode,
            type,
            setType,
            data,
            setData,
        }),
        [data, stateModalNode, type],
    );

    useEffect(() => {
        setStateModalNode(modalNode.current);
    }, [modalNode]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            <div ref={modalNode} />
        </ModalContext.Provider>
    );
};
export default ModalProvider;
