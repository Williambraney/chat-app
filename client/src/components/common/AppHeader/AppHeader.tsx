import Header from 'components/ui/Header';
import type { JSX } from 'react/jsx-runtime';

export default function AppHeader(): JSX.Element {
    return (
        <Header
            sx = { {
                fontSize : '1.5rem',
                padding : '1rem',
                // width : '100%',
            } }
        >
            Chat app
        </Header>
    );
};