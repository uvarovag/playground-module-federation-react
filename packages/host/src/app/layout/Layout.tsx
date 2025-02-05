import { Outlet } from 'react-router'

import { Navbar } from 'widgets/Navbar'

export const Layout = () => (
    <>
        <h1>Host App</h1>
        <Navbar />
        <hr />
        <Outlet />
    </>
)
