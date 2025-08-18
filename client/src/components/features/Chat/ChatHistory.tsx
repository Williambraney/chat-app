import { Blocks } from 'components/layout';
import type { JSX } from 'react';
import ChatMessage from './ChatMessage';

const DummyChatHistory = [
    { id : 1, message : 'Hello, how are you?', isSender : true },
    { id : 2, message : 'I\'m fine, thanks! And you?', isSender : false },
    { id : 3, message : 'Doing well, just working on a project.', isSender : true },
    { id : 4, message : 'That sounds interesting!', isSender : false },
    { id : 5, message : 'Yes, it\'s a chat application.', isSender : true },
    { id : 6, message : 'Great! I love chat apps.', isSender : false },
    { id : 7, message : 'Me too! They are very useful.', isSender : true },
    { id : 8, message : 'Absolutely! Do you use any specific ones?', isSender : false },
    { id : 9, message : 'Yes, I use Slack and Discord.', isSender : true },
    { id : 10, message : 'Nice choices! Both are very popular.', isSender : false }
];

export default function ChatHistory(): JSX.Element {

    return (
        <Blocks
            direction = 'column'
            sx = { {
                marginTop : '50px',
                width : '100%'
            } }
        >
            { DummyChatHistory.map(chat => (
                <ChatMessage
                    key = { chat.id }
                    isSender = { chat.isSender }
                    message = { chat.message }
                />
            )) }
        </Blocks>
    );
}