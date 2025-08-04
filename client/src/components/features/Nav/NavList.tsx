import { Blocks } from 'components/layout';
import type { JSX, ReactNode } from 'react';

interface NavListProps {
    children: ReactNode;
};

export default function NavList({ 
    children 
}: NavListProps ): JSX.Element {
    return (
        <Blocks
            direction = 'column'
            sx = { {
                border : '1px solid black',
                height : '100vh',
                width : '100px'
            } }
        >
            { children }
        </Blocks>
    );
}