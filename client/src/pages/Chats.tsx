import ChatList from 'components/features/ChatList/ChatList';
import { Block, Blocks } from 'components/layout';
import SubHeader from 'components/ui/SubHeader';
import type { JSX } from 'react';

export default function Chats(): JSX.Element {
    return (
        <Blocks
            direction = 'column'
            sx = { {
                // width : '100vw'
            } }
        >
            <Block>
                <SubHeader
                    variant = 'h3'
                >
                    Chats
                </SubHeader>
            </Block>
            <Block>
                <Blocks
                    direction = 'row'
                >
                    <Block>
                        <ChatList />
                    </Block>
                </Blocks>
            </Block>
        </Blocks>
    );
}