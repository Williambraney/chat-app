import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Root from './routes/Root.tsx';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                index : true,
                element : <Login />,
            },
            // { path : 'sessions', element : <SessionsPage /> },
            // { path : 'sessions/:id', element : <SessionPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider 
                router = { Router } 
            />
        </>
    )
}

export default App;