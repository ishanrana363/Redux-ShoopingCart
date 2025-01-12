import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../pages/home-page/HomePage"
import Cart from "../components/cart/Cart"



export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path : "cart",
                element : <Cart></Cart>
            }
        ]
    }
])