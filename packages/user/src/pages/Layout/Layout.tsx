import { Outlet } from 'react-router'

import { Navbar } from 'widgets/Navbar'

export const Layout = () => {
    return (
        <>
            <h1>remote document app</h1>
            <Navbar />
            <Outlet />
        </>
    )
}
