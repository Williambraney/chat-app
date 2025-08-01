import type { JSX, ReactNode } from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

type AvatarProps = { children: ReactNode; avatar?: never } | { avatar: string; children?: never };

export default function Avatar(props: AvatarProps): JSX.Element {
    return (
        <MUIAvatar 
            src = { 'avatar' in props ? props.avatar : undefined }
        >
            { 'children' in props ? props.children : undefined }
        </MUIAvatar>
    );
}