import { TextField as MUITextField } from '@mui/material';
import type { ChangeEvent } from 'react';

type TextFieldProps = {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
    label,
    value,
    onChange
}: TextFieldProps ){

    return (
        <MUITextField 
            label = { label }
            value = { value }
            onChange = { onChange }
        />
    )
};