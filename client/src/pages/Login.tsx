import Header from '../components/ui/Header';
import Text from '../components/ui/Text';
import TextField from '../components/ui/TextField';

export default function Login() {

    return (
        <>
            <Header>
                Login
            </Header>
            <Text>
                Please enter your credentials to log in.
            </Text>
            <TextField 
                label = 'Username'

            />
            <TextField 
                label = 'Password'
            />
        </>
    );

};