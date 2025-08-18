import { Block } from 'components/layout';
import type { JSX } from 'react/jsx-runtime';

interface ChatMessageProps {
    isSender: boolean;
    message: string;
    timestamp?: string;
} 

export default function ChatMessage({ 
    isSender, 
    message, 
    timestamp
}: ChatMessageProps): JSX.Element {

    return (
        <Block
            sx = { {
                alignSelf : isSender ? 'flex-end' : 'flex-start',
                backgroundColor : isSender ? 'primary.main' : 'secondary.main',
                color : isSender ? 'white' : 'black',
                padding : '2px',
                paddingLeft : '10px',
                borderRadius : '5px',
                margin : '1px',
                maxWidth : '70%'
            } }
        >
            <p>{ message }</p>
            <span>{ timestamp }</span>
        </Block>
    )
}