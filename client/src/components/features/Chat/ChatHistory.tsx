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
    { id : 10, message : 'Nice choices! Both are very popular.', isSender : false },
    { id : 11, message : 'What features do you like most about them?', isSender : true },
    { id : 12, message : 'I really like the integration with other tools.', isSender : false },
    { id : 13, message : 'Customization options are great too!', isSender : true },
    { id : 14, message : 'What about you?', isSender : false },
    { id : 15, message : 'I think they should be more user-friendly.', isSender : true },
    { id : 16, message : 'That’s a good point. Sometimes the UI can be overwhelming.', isSender : false },
    { id : 17, message : 'Exactly! Simplicity is key for me.', isSender : true },
    { id : 18, message : 'Have you tried any open-source chat apps?', isSender : false },
    { id : 19, message : 'I’ve looked at a few, like Rocket.Chat.', isSender : true },
    { id : 20, message : 'Oh, I’ve heard of that one. How was your experience?', isSender : false },
    { id : 21, message : 'It’s pretty good, but setup can be tricky.', isSender : true },
    { id : 22, message : 'I see. Maybe we could build our own someday!', isSender : false },
    { id : 23, message : 'That would be awesome! We could add all our favorite features.', isSender : true },
    { id : 24, message : 'Let’s brainstorm some ideas for it soon.', isSender : false },
    { id : 25, message : 'Definitely! I’ll start a list and share it with you.', isSender : true },
];

export default function ChatHistory(): JSX.Element {

    return (
        <Blocks
            direction = 'column'
            sx = { {
                width : '100%',
                padding : '8px',
                overflowY : 'auto',
                maxHeight : '800px'
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