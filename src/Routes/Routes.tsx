import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "../Layout/Layout"
import Home from "../Pages/Home/Home"
import Treatment from "../Pages/Treatment/Treatment"

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path:'/home/treatment',
                    element:<Treatment/>
                }

            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}
