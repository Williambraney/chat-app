import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';
import { useCallback, useState, type ChangeEvent, type JSX } from 'react';
import DatePicker from 'components/ui/DatePicker';
import { EmojiPicker } from 'components/ui/EmojiPicker';
import Avatar from 'components/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';


interface RegisterRequest {
    userName: string;
    email: string;
    avatar?: string;
    dateOfBirth?: Date;
    password: string;
}

interface RegisterResponse {
    message: string;
}

export default function Register(): JSX.Element {

    const navigate = useNavigate();

    const [ userName, setUserName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');
    const [ avatar, setAvatar ] = useState<string>('');
    const [ dateOfBirth, setDateOfBirth ] = useState<Date | null>(null);
    const [ emojiPickerOpen, setEmojiPickerOpen ] = useState<boolean>(false);

    const handleSubmit = useCallback( async () => {

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!userName || !email || !password || !confirmPassword || !dateOfBirth) {
            alert('Please fill in all required fields');
            return;
        }

        const registerData = {
            userName,
            email,
            password,
            avatar,
            dateOfBirth
        } as RegisterRequest;

        try {

            const res = await fetch('/api/register', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(registerData)
            });
            const data: RegisterResponse = await res.json();
            
            if (!res.ok) {
                throw new Error(data.message || 'Register failed');
            }
            
            console.log('Response:', res);
            console.log(data.message);

            navigate( '/' );

        } catch ( error ) {

            console.error('Register error:', error);
            alert(error);
            return;

        }

        console.log('Register submitted with:', { userName, email, password, avatar, dateOfBirth });

    }, [ userName, email, password, avatar, dateOfBirth, confirmPassword, navigate ]);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>, name: string) => {
        const { value } = e.target;
        switch (name) {
        case 'userName':
            setUserName(value);
            break;
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        case 'confirmPassword':
            setConfirmPassword(value);
            break;
        }
    }, []);

    const handleEmojiOpen = useCallback((): void => {
        setEmojiPickerOpen(!emojiPickerOpen);
    }, [ emojiPickerOpen ]);

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
                    onChange = { e => handleInputChange(e, 'userName') }
                />
            </Block>
            <Block>
                <TextField 
                    label = 'Email'
                    value = { email }
                    onChange = { e => handleInputChange(e, 'email') }
                />
            </Block>
            <Block>
                <DatePicker
                    label = 'Date of Birth'
                    value = { dateOfBirth }
                    onChange = { date => setDateOfBirth(date) }
                />
            </Block>
            <Block>
                Avatar - 
                <Button
                    variant = 'outlined'
                    onClick = { handleEmojiOpen }
                >
                    Choose avatar
                </Button>
                <Avatar>
                    { avatar }
                </Avatar>
                <EmojiPicker 
                    open = { emojiPickerOpen }
                    onEmojiClick = { e => {
                        setAvatar(e.emoji);
                        setEmojiPickerOpen(false);
                    } }
                />
            </Block>
            <Block>
                <TextField 
                    label = 'Password'
                    value = { password }
                    onChange = { e => handleInputChange(e, 'password') }
                />
            </Block>
            <Block>
                <TextField 
                    label = 'Confirm password'
                    value = { confirmPassword }
                    onChange = { e => handleInputChange(e, 'confirmPassword') }
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