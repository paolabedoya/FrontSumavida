import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/inicio',
                element: <Home />
            },
            {
                path: '/nosotros',
                element: <h1>Nosotros</h1>
            },
            {
                path: '/servicios',
                element: <h1>Servicios</h1>
            },
            {
                path: '/calendario',
                element: <h1>Calendario</h1>
            },
            {
                path: '/contacto',
                element: <h1>Contacto</h1>
            },
        ]
    },
])

export function Navigation() {
    return <RouterProvider router={router} />
}