import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Home/Home'
import { Contact } from '../Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
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
                element: <Contact />
            },
        ]
    },
])

export function Navigation() {
    return <RouterProvider router={router} />
}