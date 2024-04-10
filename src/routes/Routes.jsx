import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home/Home'
import Root from "../layout/Root/Root";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            }
        ]
    }
])

export default router;