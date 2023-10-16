import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Home/Home'
import { Contact } from '../Contact/Contact'
import { Us } from '../Us/Us'
import { Services } from '../Services/Services'

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
                element: <Us />
            },
            {
                path: '/servicios',
                element: <Services />
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