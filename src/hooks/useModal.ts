import { useModalContext } from '@providers/ModalProvider';

interface UseModalReturn {
    openModal: (data: any) => void;
    closeModal: () => void;
    data?: any;
}

export const useModal = (name: string): UseModalReturn => {
    const { setType, setData, data } = useModalContext();

    const openModal = (modalData: any) => {
        setType(name);
        setData(modalData);
    };

    const closeModal = () => {
        setType(null);
        setData();
    };

    return { openModal, closeModal, data };
};
