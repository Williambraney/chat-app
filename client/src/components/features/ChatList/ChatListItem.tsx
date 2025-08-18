import { Block, Blocks } from 'components/layout';
import Avatar from 'components/ui/Avatar';
import { ListItemButton } from 'components/ui/List';
import SubHeader from 'components/ui/SubHeader';
import { useCallback, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleClick = useCallback(() => navigate( 'chat/' + id ), [ id, navigate ] );

    return (
        <ListItemButton
            sx = { {
                borderBottom : '1px solid lightgray',
                padding : '1rem',
                '&:hover' : {
                    backgroundColor : 'lightgray',
                    cursor : 'pointer'
                }
            } }
            onClick = { handleClick }  
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
        </ListItemButton>
    );
};