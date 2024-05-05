import App from './App' 
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { HomePage } from './components/HomePage'

export const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/homepage/*',
        element: <HomePage/>
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]