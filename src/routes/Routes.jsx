import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/chefsinfo")
            },
            {
                path: '/chefsinfo/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefsinfo/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
                
        ]
}
]);

export default router;