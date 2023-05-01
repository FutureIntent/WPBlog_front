import { useCallback, useEffect, useRef } from 'react';

interface UseEventListenerProps {
    eventName: string;
    listener: EventListener | ((event: KeyboardEvent) => void);
    isAllowOutsideClose?: boolean;
    updateValue?: string | null;
}

export const useEventListener = ({
    eventName,
    listener,
    isAllowOutsideClose,
    updateValue,
}: UseEventListenerProps): void => {
    const savedListener = useRef(listener);

    useEffect(() => {
        savedListener.current = listener;
    }, [listener]);

    const handleEventListener = useCallback((event: any) => {
        savedListener.current?.(event);
    }, []);

    useEffect(() => {
        if (isAllowOutsideClose) {
            window.addEventListener(eventName, handleEventListener);
        }

        return () => window.removeEventListener(eventName, handleEventListener);
    }, [eventName, updateValue]);
};
