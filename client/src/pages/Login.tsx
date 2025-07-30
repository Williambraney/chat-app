import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';
import { useCallback, useState } from 'react';

export default function Login() {

    const [ userName, setUserName ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSubmit = useCallback(() => {

        //sendDetails({
        //    userName,
        //    password
        //});

        console.log('Login submitted with:', { userName,

    }, [ userName, password ]);

    return (
        <Blocks
            sx = { {
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'center',
                gap : 2,
                padding : 2,
                width : '100%', 
                maxWidth : 400,
            } }
        >
            <Block>
                <Header>
                    Login
                </Header>
            </Block>
            <Block>
                <Text>
                    Please enter your details.
                </Text>
            </Block>
            <Block>
                <TextField 
                    label = 'Username'

                />
            </Block>
            <Block>
                <TextField 
                    label = 'Password'
                />
            </Block>
            <Block>
                <Button
                    variant = 'outlined'
                    onClick = { handleSubmit }
                >
                    Login
                </Button>
            </Block>
        </Blocks>
    );

};