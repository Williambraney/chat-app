import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';
import { useCallback, useState, type ChangeEvent } from 'react';

type LoginRequest = {
    userName: string;
    password: string;
}

type LoginResponse = {
    message: string;    
}

export default function Login() {

    const [ userName, setUserName ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSubmit = useCallback( async () => {

        try {

            console.log('Submitting login with:', { userName, password });

            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password } as LoginRequest )
            });
            console.log('Response:', res);
            const data: LoginResponse = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            console.log(data.message);

        } catch ( error ) {

            console.error('Login error:', error);
            alert('Login failed. Please try again.');
            return;

        }

        console.log('Login submitted with:', { userName, password });

    }, [ userName, password ]);

    const handleUserNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

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
                    value = { userName }
                    onChange = { handleUserNameChange }
                />
            </Block>
            <Block>
                <TextField 
                    label = 'Password'
                    value = { password }
                    onChange = { handlePasswordChange }
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