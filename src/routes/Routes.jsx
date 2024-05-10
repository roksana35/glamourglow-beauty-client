import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Errorpage from "../pages/Errorpage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router=createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            
        ]
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])
export default router;