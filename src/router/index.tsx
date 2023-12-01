import About from '@/views/About'
import Home from '@/views/Home'
import { Navigate, RouteObject } from 'react-router-dom'
const routes: RouteObject[] = [
    { path: '/', element: <Navigate to='home' /> },
    { path: '/home', element: <Home /> },
    { path: '/about/:ids', element: <About /> },
]

export default routes
