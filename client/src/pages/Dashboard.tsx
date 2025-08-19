import { Block, Blocks } from 'components/layout';
import Header from 'components/ui/Header';
import Text from 'components/ui/Text';
import { useAuth } from '../contexts/AuthContext';
import type { JSX } from 'react';

export default function Dashboard(): JSX.Element {

    const { userName } = useAuth();

    return (
        <Blocks
            direction = 'column'
        >
            <Block>
                <Header>Dashboard</Header>
            </Block>
            <Block>
                <Blocks
                    direction = 'column'
                >
                    <Block>
                        <Text> Hello { userName }! </Text>
                    </Block>
                    <Block>
                        <Text>Welcome to your dashboard!</Text>
                    </Block>
                    <Block>
                        <Text>Here are a list of people to message.</Text>
                    </Block>
                </Blocks>
            </Block>
        </Blocks>
    );

}