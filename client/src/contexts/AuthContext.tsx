import { createContext, useState, useContext, useEffect } from 'react';
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

    useEffect(() => {
        // Grab the token from localStorage
        const token = localStorage.getItem('token');
  
        if (!token) {
            // No token, nothing to do here
            return;
        }
  
        // Immediately-invoked async function because useEffect can't be async directly
        (async (): Promise<void> => {
            try {
                // Call your backend API /api/me with the Authorization header including the token
                const res = await fetch('/api/me', {
                    headers : { 
                        'Authorization' : `Bearer ${token}` 
                    }
                });

                if (!res.ok) {
                    // Token might be invalid or expired — clean up localStorage
                    localStorage.removeItem('token');
                    localStorage.removeItem('userName');
                    setUserName('');  // Reset your user state in React
                    return;
                }

                // Extract the user object from the response
                const { user } = await res.json();

                // Update your React state with the username from user object
                setUserName(user.userName || user.username);

                // Optionally sync localStorage userName if you want to keep it updated
                localStorage.setItem('userName', user.userName || user.username);

            } catch (error) {
                console.error('Failed to validate token:', error);
                // If error happens (network, etc), clean up anyway to avoid stale state
                localStorage.removeItem('token');
                localStorage.removeItem('userName');
                setUserName('');
            }
        })();

    }, []); // Runs once on mount

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