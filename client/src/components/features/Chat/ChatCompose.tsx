import Blocks from 'components/layout/Blocks';
import TextField from 'components/ui/TextField';
import { useCallback, useState, type JSX } from 'react';
import ChatSendButton from './ChatSendButton';
import Block from 'components/layout/Block';

export default function ChatCompose(): JSX.Element {

    const [ message, setMessage ] = useState<string>( '' );

    const handleChange = useCallback( ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setMessage( e.target.value );
    }, [] );

    return (
        <Blocks>
            <Block>
                <TextField // Wil eventually need to be a rich text or something for multi media
                    label = 'Type a message'
                    onChange = { handleChange }
                    value = { message }
                />
            </Block>
            <Block>
                <ChatSendButton />  
            </Block>
        </Blocks>

    );

}