import { TextField as MUITextField } from '@mui/material';
import type { ChangeEvent, CSSProperties } from 'react';

type TextFieldProps = {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    sx?: CSSProperties;
}

export default function TextField({
    label,
    value,
    onChange,
    sx
}: TextFieldProps ){

    return (
        <MUITextField 
            label = { label }
            value = { value }
            onChange = { onChange }
            sx = {{
                backgroundColor :  '#F0FFF4',
                borderRadius : '4px',
                ...sx
            }}
        />
    )
};