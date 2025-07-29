import { Blocks } from 'components/layout';
import Header from '../components/ui/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <Blocks
            sx = { {
                flexDirection : 'column',
                minWidth : '100vw'
            } }
        >
            { /* Add your layout components here, like Header, Footer, etc. */ }
            <Header>
                Chat App
            </Header>
            { /* Outlet for nested routes */ }
            <Outlet />
        </Blocks>
    );
}