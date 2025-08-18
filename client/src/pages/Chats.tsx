import ChatList from 'components/features/ChatList/ChatList';
import { Block, Blocks } from 'components/layout';
import SubHeader from 'components/ui/SubHeader';
import type { JSX } from 'react';

export default function Chats(): JSX.Element {
    return (
        <Blocks
            sx = { {
                // width : '100vw'
            } }
        >
            <Block
                sx = {{
                    alignItems: 'start',
                    height: '100%'
                }}
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
                        <Blocks
                            direction = 'row'
                        >
                            <Block>
                                <ChatList />
                            </Block>
                        </Blocks>
                    </Block>
                </Blocks>
            </Block>
            <Block>
                Here is you chat content
            </Block>
        </Blocks>
    );
}