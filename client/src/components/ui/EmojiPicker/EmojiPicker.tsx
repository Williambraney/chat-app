import type { JSX } from 'react';
import EmojiPicker from 'emoji-picker-react';

interface EmojiPickerBasicProps {
    open: boolean;
    onEmojiClick: (emoji: { emoji: string }) => void;
}

export default function EmojiPickerBasic({ 
    open, 
    onEmojiClick

}: EmojiPickerBasicProps): JSX.Element {
    return (
        <EmojiPicker
            open = { open }
            onEmojiClick = { onEmojiClick }
        />
    );
}