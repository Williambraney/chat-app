import { ListItem as MUIListItem, type SxProps, type Theme } from '@mui/material';
import type { JSX } from 'react';

interface ListItemProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function ListItem({ 
    children, 
    sx
}: ListItemProps ): JSX.Element {
    return (
        <MUIListItem 
            sx = { sx }
        >
            { children }
        </MUIListItem>
    );
}
