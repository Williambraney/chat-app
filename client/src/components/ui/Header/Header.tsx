import { Typography, type SxProps, type Theme } from '@mui/material';
import { type JSX, type ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function Header({ 
    sx,
    children 
} : HeaderProps ): JSX.Element {

    return (
        <Typography 
            variant = 'h1'
            sx = { {
                ...sx
            } }
        >
            { children }
        </Typography>
    );

};
