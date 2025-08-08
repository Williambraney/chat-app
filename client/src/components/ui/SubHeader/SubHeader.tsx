import { Typography, type SxProps, type Theme } from '@mui/material';
import { type JSX, type ReactNode } from 'react';

interface SubHeaderProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Optional, defaults to 'h1'
  sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function SubHeader({ 
    sx,
    variant = 'h2',
    children 
} : SubHeaderProps ): JSX.Element {

    return (
        <Typography 
            variant = { variant }
            sx = { sx }
        >
            { children }
        </Typography>
    );

};
