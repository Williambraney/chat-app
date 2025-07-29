import { TextField as MUITextField } from '@mui/material';

type TextFieldProps = {
    label: string;
}

export default function TextField({
    label
}: TextFieldProps ){

    return (
        <MUITextField 
            label = { label }
        />
    )
};