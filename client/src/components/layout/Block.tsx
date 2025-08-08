import { Box, type SxProps, type Theme } from '@mui/material';
import type { JSX, ReactNode } from 'react'

interface BlockProps {
    children : ReactNode;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function Block({
    children,
    sx
}: BlockProps ): JSX.Element {
    return (
        <Box
            sx = { {
                display : 'flex',
                ...sx
            } }
        >
            { children }
        </Box>
    )
};