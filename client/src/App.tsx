import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Root from './routes/Root.tsx';
import Register from './pages/Register.tsx';
import Settings from './pages/Settings.tsx';
import Chats from './pages/Chats.tsx';
import Starred from './pages/Starred.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { JSX } from 'react';
import ResetPassword from './pages/ResetPassword.tsx';
import Dashboard from './pages/Dashboard.tsx';
import RootLayout from './routes/RootLayout.tsx';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                index : true,
                element : <Login />,
            },
            { path : 'register', element : <Register /> },
            { path : 'resetPassword', element : <ResetPassword /> }
        ]
    },
    {
        path : '/app',
        element : <RootLayout />,
        children : [
            {
                index : true,
                element : <Dashboard />,
            },
            { path : 'dashboard', element : <Dashboard /> },
            { path : 'settings', element : <Settings /> },
            { path : 'chats', element : <Chats /> },
            { path : 'starred', element : <Starred /> },
        ]
    }
]);

function App(): JSX.Element {
    return (
        <LocalizationProvider 
            dateAdapter = { AdapterDateFns }
        >
            <RouterProvider 
                router = { Router } 
            />
        </LocalizationProvider>
    )
}

export default App;