import { Box, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

type BlocksProps = {
  children: ReactNode;
  sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
};

export default function Blocks({ sx, children }: BlocksProps) {
    return (
        <Box
            display='flex'
            sx={ {
                flexDirection : 'row',
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