import type { JSX } from 'react';
import ChatListItem, { type ChatListItemProps } from './ChatListItem';
import { Blocks } from 'components/layout';
import { List } from 'components/ui/List';


const dummyChats: ChatListItemProps[] = [
    {
        id : '1',
        userName : 'User1',
        content : 'Hello!',
        timestamp : new Date()
    },
    {
        id : '2',
        userName : 'User2',
        content : 'Hi there!',
        timestamp : new Date()
    },
    {
        id : '3',
        userName : 'User3',
        content : 'Good morning!',
        timestamp : new Date()
    },
    {
        id : '4',
        userName : 'User4',
        content : 'How are you?',
        timestamp : new Date()
    }
]

export default function ChatList(): JSX.Element {
    return (
        <List
            sx = { {
                border : '1px solid black',
            } }
        >
            {
                dummyChats.map( chat => 
                    <ChatListItem 
                        key = { chat.id }
                        id = { chat.id }
                        userName = { chat.userName }
                        content = { chat.content }
                        timestamp = { chat.timestamp }
                        avatar = { chat.avatar }
                    />
                )
            }
        </List>
    );
}
