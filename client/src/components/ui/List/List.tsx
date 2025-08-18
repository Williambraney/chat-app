import { List as MUIList, type SxProps, type Theme } from '@mui/material'
import type { JSX, ReactNode } from 'react'

interface ListProps {
    children: ReactNode;
    sx?: SxProps<Theme>; // ✅ Accepts any valid MUI sx style
}

export default function List({ 
    children
}: ListProps ): JSX.Element {

    return ( 
        <MUIList>
            { children }
        </MUIList>
    );

};