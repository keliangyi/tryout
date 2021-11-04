import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export const usePrompt = (when: boolean, message: string = '确认要离开？系统可能不会保存您所做的更改') => {
    const history = useHistory();

    const self = useRef<any>(null);

    const onWindowOrTabClose = (event: any) => {
        if (!when) {
            return;
        }

        if (typeof event == 'undefined') {
            event = window.event;
        }

        if (event) {
            event.returnValue = message;
        }

        return message;
    };

    useEffect(() => {
        if (when) {
            self.current = history.block(message);
        } else {
            self.current = null;
        }

        window.addEventListener('beforeunload', onWindowOrTabClose);

        return () => {
            if (self.current) {
                self.current();
                self.current = null;
            }

            window.removeEventListener('beforeunload', onWindowOrTabClose);
        }
    }, [message, when]);
};