import { Provider } from 'react-redux'
import { Outlet } from 'react-router'

import { store } from 'app/model'
import { Navbar } from 'widgets/Navbar'

export const Providers = () => (
    <Provider store={store}>
        <h1>User App</h1>
        <Navbar />
        <Outlet />
    </Provider>
)
