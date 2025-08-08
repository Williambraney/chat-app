import { List as MUIList } from '@mui/material'
import type { JSX, ReactNode } from 'react'

interface ListProps {
    children: ReactNode;
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