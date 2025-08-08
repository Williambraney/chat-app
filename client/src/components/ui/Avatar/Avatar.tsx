import type { JSX, ReactNode } from 'react';
import { Avatar as MUIAvatar, type SxProps, type Theme } from '@mui/material';

type AvatarProps = { children: ReactNode; avatar?: never, sx?: SxProps<Theme> } | { avatar: string; children?: never, sx?: SxProps<Theme> };

export default function Avatar(props: AvatarProps): JSX.Element {
    return (
        <MUIAvatar 
            src = { 'avatar' in props ? props.avatar : undefined }
            sx = { props.sx }
        >
            { 'children' in props ? props.children : undefined }
        </MUIAvatar>
    );
}