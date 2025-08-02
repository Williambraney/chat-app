import AppHeader from 'components/common/AppHeader';
import NavBar from 'components/common/NavBar';
import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout(): JSX.Element {
    return (
        <Blocks
            sx = { {
                flexDirection : 'column',
                minWidth : '100vw',
                minHeight : '100vh',
                backgroundColor : 'background',
            } }
        >
            <AppHeader />
            <NavBar />
            <Block>
                <Outlet />
            </Block>
        </Blocks>
    );
}