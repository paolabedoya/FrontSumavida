import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
