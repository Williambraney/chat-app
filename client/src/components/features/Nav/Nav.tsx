import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react';
import NavList from './NavList';
import NavListItem from './NavListItem';
import LightDarkMode from './LightDarkMode';

export default function NavBar(): JSX.Element {
    return (
        <Blocks
            direction = 'column'
            sx = { {
                border : '1px solid black',
                height : '100vh',
                width : '100px'
            } }
        >
            <Block>
                <NavList>
                    <NavListItem
                        to = '/settings'
                    >
                        Settings
                    </NavListItem>
                    <NavListItem
                        to = '/chats'
                    >
                        Chats
                    </NavListItem>
                    <NavListItem
                        to = '/starred'
                    >
                        Starred
                    </NavListItem>
                    <LightDarkMode />
                </NavList>
            </Block>
        </Blocks>
    );
}