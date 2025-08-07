import { createContext, useState, useContext } from 'react';
import type { JSX, ReactNode } from 'react';

interface User {
    userName: string;
    email: string;
    avatar?: string;
    dateOfBirth?: Date;
}

interface AuthContextType {
    userName: string;
    onSetUser: (userName: string) => void;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {

    const [ userName, setUserName ] = useState<string>('');

    const handleSetUser = ( userName: string ): void => setUserName( userName );

    return (
        <AuthContext.Provider value = { { userName, onSetUser : handleSetUser } }>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;

}