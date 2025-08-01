import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';
import { useCallback, useState, type ChangeEvent } from 'react';

type RegisterRequest = {
    userName: string;
    email: string;
    avatar?: string;
    dateOfBirth?: string;
    password: string;
}

type RegisterResponse = {
    message: string;
}

export default function Register() {

    const [ userName, setUserName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');
    const [ avatar, setAvatar ] = useState<string>('');
    const [ dateOfBirth, setDateOfBirth ] = useState<string>('');

    const handleSubmit = useCallback( async () => {

        const registerData = {
            userName,
            email,
            password,
            avatar,
            dateOfBirth
        } as RegisterRequest;

        try {

            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData)
            });
            console.log('Response:', res);
            const data: RegisterResponse = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Register failed');
            }

            console.log(data.message);

        } catch ( error ) {

            console.error('Register error:', error);
            alert('Register failed. Please try again.');
            return;

        }

        console.log('Register submitted with:', { userName, email, password, avatar, dateOfBirth });

    }, [ userName, email, password, avatar, dateOfBirth ]);

    const handleUserNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handleConfirmPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
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
                    Register
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
                    label = 'Email'
                    value = { email }
                    onChange = { handleEmailChange }
                />
            </Block>
            <Block>
                Date of birth - 
            </Block>
            <Block>
                Avatar - 
            </Block>
            <Block>
                <TextField 
                    label = 'Password'
                    value = { password }
                    onChange = { handlePasswordChange }
                />
            </Block>
            <Block>
                <TextField 
                    label = 'Confirm password'
                    value = { confirmPassword }
                    onChange = { handleConfirmPasswordChange }
                />
            </Block>
            <Block>
                <Button
                    variant = 'outlined'
                    onClick = { handleSubmit }
                >
                    Register
                </Button>
            </Block>
        </Blocks>
    );

};