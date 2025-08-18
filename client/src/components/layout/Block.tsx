import { Box, type SxProps, type Theme } from '@mui/material';
import type { JSX, ReactNode } from 'react'

interface BlockProps {
    children : ReactNode;
    fit?: boolean;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function Block({
    children,
    fit,
    sx
}: BlockProps ): JSX.Element {
    return (
        <Box
            sx = { {
                display : 'flex',
                height: !fit && '100%',
                width: !fit && '100%',
                ...sx
            } }
        >
            { children }
        </Box>
    )
};