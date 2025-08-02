import Button from 'components/ui/Button';
import { Block, Blocks } from '../components/layout';
import TextField from '../components/ui/TextField';
import { useCallback, useState, type ChangeEvent, type JSX } from 'react';
import Text from 'components/ui/Text';

export default function ResetPassword(): JSX.Element {

    const [ email, setEmail ] = useState<string>('');

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>):void => setEmail(e.target.value), []);

    const handleSubmit = useCallback( ():void => {
        // Need to check if email is actually registered

    }, [ email ]);

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
                <Text>
                    Please enter your email to send a reset password link.
                </Text>
            </Block>
            <Block>
                <TextField 
                    label = 'Email'
                    value = { email }
                    onChange = { handleEmailChange }
                />
            </Block>
            <Block>
                <Button
                    variant = 'outlined'
                    onClick = { handleSubmit }
                >
                    Request
                </Button>
            </Block>
        </Blocks>
    );

};