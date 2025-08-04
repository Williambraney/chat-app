import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react';
import NavList from './NavList';
import NavListItem from './NavListItem';
import LightDarkMode from './LightDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faComments, faGear, faStar } from '@fortawesome/free-solid-svg-icons';

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
                        to = 'dashboard'
                    >
                        <FontAwesomeIcon 
                            icon = { faChartLine } 
                        />
                    </NavListItem>
                    <NavListItem
                        to = 'settings'
                    >
                        <FontAwesomeIcon 
                            icon = { faGear } 
                        />
                    </NavListItem>
                    <NavListItem
                        to = 'chats'
                    >
                        <FontAwesomeIcon 
                            icon = { faComments } 
                        />
                    </NavListItem>
                    <NavListItem
                        to = 'starred'
                    >
                        <FontAwesomeIcon 
                            icon = { faStar } 
                        />
                    </NavListItem>
                    <LightDarkMode />
                </NavList>
            </Block>
        </Blocks>
    );
}