import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import LayoutComponent from '../../components/Layout'

import About from '@/views/About'
import Home from '@/views/Home'
import List from '@/views/List'
const withLoadingComponent = (Component: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>{Component}</React.Suspense>
)
const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/home' />,
    },
    {
        element: <LayoutComponent />,
        children: [
            {
                path: '/home',
                element: withLoadingComponent(<Home />),
            },
            { path: '/about', element: withLoadingComponent(<About />) },
            { path: '/list', element: withLoadingComponent(<List />) },
        ],
    },
    {
        path: '*',
        element: <Navigate to='/home' />,
    },
]

export default routes
