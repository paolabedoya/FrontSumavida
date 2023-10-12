import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export function MainLayout() {
    return (
        <div style={{ 
            marginBottom: '1rem'
        }}>
            <Header />
            <Outlet />
        </div>
    )
}
