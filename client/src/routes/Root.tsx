import { Blocks } from 'components/layout';
import Header from '../components/ui/Header';
import { Outlet } from 'react-router-dom';
import type { JSX } from 'react';
import AppHeader from 'components/common/AppHeader';

export default function Root(): JSX.Element {
    return (
        <Blocks
            sx = { {
                flexDirection : 'column',
                minWidth : '100vw',
                minHeight : '100vh',
                backgroundColor : 'background',
            } }
        >
            { /* Add your layout components here, like Header, Footer, etc. */ }
            <AppHeader />
            { /* Outlet for nested routes */ }
            <Outlet />
        </Blocks>
    );
}