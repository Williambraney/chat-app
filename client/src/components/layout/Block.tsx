import { Box } from '@mui/material';
import type { ReactNode } from 'react'

type BlockProps = {
    children : ReactNode;
}

export default function Block({
    children
}: BlockProps ) {
    return (
        <Box
            style = { {
                display : 'flex'
            } }
        >
            { children }
        </Box>
    )
};