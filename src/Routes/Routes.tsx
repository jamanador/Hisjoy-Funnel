import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ProcessingPage from "../Pages/Treatment/ProcessingPage"; // Import Processing Page
import SingleProduct from "../Pages/Treatment/SingleProduct";
import Treatment from "../Pages/Treatment/Treatment";

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
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
                },
                {
                    path: '/home/treatment/processing/:productName',
                    element: <ProcessingPage />
                },
                {
                    path: '/home/treatment/product/:productName',
                    element: <SingleProduct/>
                }
            ]
        }
    ]);
    
    return <RouterProvider router={router} />;
}
