import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react/jsx-runtime';
import ChatHistory from './ChatHistory';
import ChatCompose from './ChatCompose';
import { useParams } from 'react-router-dom';

export default function Chat(): JSX.Element {

    const { chatID } = useParams();

    return (
        <Blocks
            direction = 'column'
            sx = { {
                width : '100%',
            } }
        >
            <Block
                fit = { true }
            >
                <ChatHistory />
            </Block>
            <Block>
                <ChatCompose />
            </Block>
        </Blocks>
    );
};