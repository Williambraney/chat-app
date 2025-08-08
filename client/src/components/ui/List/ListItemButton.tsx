import { ListItemButton as MUIListItemButton, type SxProps, type Theme } from '@mui/material';
import type { JSX } from 'react';

interface ListItemButtonProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function ListItemButton({ 
    children, 
    sx
}: ListItemButtonProps ): JSX.Element {
    return (
        <MUIListItemButton 
            sx = { sx }
        >
            { children }
        </MUIListItemButton>
    );
}
