import { Block, Blocks } from 'components/layout';
import Avatar from 'components/ui/Avatar';
import SubHeader from 'components/ui/SubHeader';
import type { JSX } from 'react';

export interface ChatListItemProps {
    id: string;
    userName: string;
    content: string;
    timestamp: Date;
    avatar: string;
}

export default function ChatListItem({ 
    id,
    userName, 
    content, 
    avatar,
    timestamp 
}: ChatListItemProps ): JSX.Element  {
    return (
        <Block
            sx = { {
                borderBottom : '1px solid lightgray',
                padding : '1rem',
                '&:hover' : {
                    backgroundColor : 'lightgray',
                    cursor : 'pointer'
                }
            } }
            onClick = { () => console.log( `Clicked on chat ${ id }` ) }  
        >
            <Blocks
                direction = 'column'
            >
                <Block>
                    <Avatar
                        avatar = { avatar }
                        sx = { {
                            width : 30,
                            height : 30
                        } }
                    />
                    <SubHeader
                        variant = 'h5'
                    >
                        { userName }
                    </SubHeader>
                </Block>
                <Block>
                    { content }
                </Block>
            </Blocks>
        </Block>
    );
};