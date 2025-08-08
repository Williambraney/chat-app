import AppHeader from 'components/common/AppHeader';
import NavBar from 'components/features/Nav/Nav';
import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout(): JSX.Element {
    return (
        <Blocks>
            <Block>
                <NavBar />
            </Block>
            <Block>
                <Blocks
                    sx = { {
                        flexDirection : 'column',
                        width : '90vw',
                        minHeight : '100vh',
                        backgroundColor : 'background'
                    } }
                >
                    <AppHeader />
                    <Block
                        sx = { {
                            width : '100%',
                            height : '100%'
                        } }
                    >
                        <Outlet />
                    </Block>
                </Blocks>
            </Block>
        </Blocks>
    );
}