import { ListItemButton as MUIListItemButton, type SxProps, type Theme } from '@mui/material';
import type { JSX, ReactNode } from 'react';

interface ListItemButtonProps {
    children: ReactNode;
    onClick: (event) => void;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function ListItemButton({ 
    children, 
    onClick,
    sx
}: ListItemButtonProps ): JSX.Element {
    return (
        <MUIListItemButton 
            sx = { sx }
            onClick = { onClick }
        >
            { children }
        </MUIListItemButton>
    );
}
