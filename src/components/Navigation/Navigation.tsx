import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Home/Home'
import { Contact } from '../Contact/Contact'
import { Us } from '../Us/Us'
import { Services } from '../Services/Services'
import { Login } from '../Login/Login'
import LoginContext from '../../context/LoginContext'
import { useLocalStorage } from '@uidotdev/usehooks'
import { Profile } from '../Profile/Profile'
import { Contacts as AdminContacts } from '../Admin/Contacts/Contacts'
import { NotFound } from '../NotFound/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/admin/contactos',
                element: <AdminContacts />,
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
                path: '/eventos',
                element: <h1>Eventos</h1>
            },
            {
                path: '/contacto',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/history',
                element: <h3>Historia</h3>
            },
            {
                path: '/recommendations',
                element: <h3>Recomendaciones</h3>
            },
            {
                path: '/events',
                element: <h3>Eventos</h3>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],
    },
])

export function Navigation() {
    const [token, setToken] = useLocalStorage<string>("token")
    const [refreshToken, setRefreshToken] = useLocalStorage<string>("refresh_token")
    return (
        <LoginContext.Provider value={{
            token: token,
            refresh_token: refreshToken,
            setToken: setToken,
            setRefreshToken: setRefreshToken
        }} >
            <RouterProvider router={router} />
        </LoginContext.Provider>
    )
}