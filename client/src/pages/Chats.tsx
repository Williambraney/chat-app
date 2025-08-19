import Chat from 'components/features/Chat/Chat';
import ChatList from 'components/features/ChatList/ChatList';
import { Block, Blocks } from 'components/layout';
import SubHeader from 'components/ui/SubHeader';
import type { JSX } from 'react';

export default function Chats(): JSX.Element {

    return (
        <Blocks
            sx = { {
                width : '100%'
            } }
        >
            <Block
                sx = { {
                    alignItems : 'start',
                    height : '100%',
                    width : 'fit-content',
                    padding : '8px'
                } }
            >
                <Blocks
                    direction = 'column'
                >
                    <Block>
                        <SubHeader
                            variant = 'h3'
                        >
                            Chats
                        </SubHeader>
                    </Block>
                    <Block>
                        <ChatList />
                    </Block>
                </Blocks>
            </Block>
            <Block
                sx = { {
                    width : '100%'
                } }
            >
                <Chat />
            </Block>
        </Blocks>
    );
}