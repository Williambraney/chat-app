import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Root from './routes/Root.tsx';
import Register from './pages/Register.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { JSX } from 'react';

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
            // { path : 'sessions/:id', element : <SessionPage /> },
        ],
    },
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