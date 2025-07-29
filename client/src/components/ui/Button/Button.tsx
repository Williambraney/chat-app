import { Button as MUIButton, type ButtonProps as MUIButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & MUIButtonProps; // ✅ Extend MUI's ButtonProps

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <MUIButton { ...props }>
            { children }
        </MUIButton>
    );
}