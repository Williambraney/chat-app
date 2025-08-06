import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';
import { useCallback, useState, type ChangeEvent, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginRequest {
    userName: string;
    password: string;
}

interface LoginResponse {
    message: string;    
}

export default function Login(): JSX.Element {

    const navigate = useNavigate();

    const [ userName, setUserName ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSubmit = useCallback( async () => {

        try {

            const res = await fetch('/api/login', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({ userName, password } as LoginRequest )
            });
            const data: LoginResponse = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            navigate( '/app/dashboard')

        } catch ( error ) {

            alert('Login failed. Please try again.');
            console.log('Login error:', error);
            return;

        }

    }, [ userName, password, navigate ]);

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
            <Block>
                <Blocks
                    sx = { {
                        flexDirection : 'column',
                        alignItems : 'center',
                        justifyContent : 'center',
                        gap : 1,
                        width : '100%',
                    } }
                >
                    <Block>
                        <Text>
                            Don't have an account? <a href = '/register'>Register</a>
                        </Text>
                    </Block>
                    <Block>
                        <Text>
                            Forgot your password? <a href = '/resetPassword'>Reset it</a>
                        </Text>
                    </Block>
                    <Block>
                        <Text>
                            Bypass login for testing: <a href = '/app'>Bypass</a>
                        </Text>
                    </Block>
                </Blocks>
            </Block>
        </Blocks>
    );

};