import { createContext, useContext } from 'react';

interface ModalContextProps {
    modalNode: HTMLElement | null;
    type: string | null;
    setType: (type: string | null) => void;
    data?: any;
    setData: (data?: any) => void;
}

const ModalContext = createContext<ModalContextProps>({
    modalNode: null,
    type: null,
    setType: () => {},
    setData: () => {},
});

export const useModalContext = (): ModalContextProps => useContext(ModalContext);

export default ModalContext;
