import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/inicio',
        element: <h1>Inicio</h1>
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
])

function Navigation() {
    return <RouterProvider router={router} />
}

export default Navigation