import { Box, type SxProps, type Theme } from '@mui/material';
import type { JSX, ReactNode } from 'react';

interface BlocksProps {
  children: ReactNode;
  direction ?: 'row' | 'column'; // Optional prop to set flex direction
  sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function Blocks({ 
    sx, 
    direction = 'row', // Default to 'row' if not provided
    children 
} : BlocksProps ): JSX.Element {
    return (
        <Box
            display = 'flex'
            sx = { {
                flexDirection : direction,
                alignItems : 'center',
                justifyContent : 'flex-start',
                gap : 0,
                ...sx,
            } }
        >
            { children }
        </Box>
    );
}