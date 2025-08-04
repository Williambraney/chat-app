import { Block } from 'components/layout';
import type { JSX, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavListItemProps {
    children: ReactNode;
    to: string;
}

// WE want a navListItem for settings, chats, starred, dark mode?
export default function NavListItem({
    children,
    to
}: NavListItemProps ): JSX.Element {
    return (
        <NavLink to = { to }>
            <div>{ children }</div>
        </NavLink>
    );
}