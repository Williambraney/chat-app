import Button from 'components/ui/Button';
import { useCallback, type JSX } from 'react';

export default function ChatSendButton(): JSX.Element {

    const handleSend = useCallback((): void => {
        console.log('sending')
    }, []); 

    return (
        <Button
            onClick = { handleSend }
        >
            Send
        </Button>
    )
}