import TextField from "components/ui/TextField";
import { useCallback, useState, type ChangeEvent, type JSX } from "react";

export default function ChatTextField(): JSX.Element {
    
        const [ message, setMessage ] = useState<string>( '' );

        const handleChange = useCallback( ( e: ChangeEvent<HTMLInputElement> ): void => setMessage( e.target.value ), [] );

        return (
            <TextField // Wil eventually need to be a rich text or something for multi media
                label = "Type a message"
                onChange = { handleChange }
                value = { message }
            />    
        );

}