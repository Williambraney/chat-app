import TextField from "components/ui/TextField";

export default function ChatCompose() {

    const [ message, setMessage ] = useState<string>( '' );

    const handleChange = useCallback( ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setMessage( e.target.value );
    }, [] );

    return (
        <TextField // Wil eventually need to be a rich text or something for multi media
            label = "Type a message"
            onChange = { (e) => console.log(e.target.value) }
        />

    )

}