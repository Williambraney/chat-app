import { Block, Blocks } from 'components/layout';
import Header from 'components/ui/Header';
import Text from 'components/ui/Text';
import type { JSX } from 'react';

export default function Dashboard(): JSX.Element {

    return (
        <Blocks
            direction = 'column'
        >
            <Block>
                <Header>Dashboard</Header>
            </Block>
            <Block>
                <Text>Welcome to your dashboard!</Text>
            </Block>
        </Blocks>
    );

}