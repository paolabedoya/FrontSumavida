import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export function MainLayout() {
    return (
        <div style={{ 
            marginBottom: '1rem'
        }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
