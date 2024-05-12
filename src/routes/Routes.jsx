import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Errorpage from "../pages/Errorpage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Addservice from "../components/Addservice";
import Allservice from "../components/Allservice";
import Detailspage from "../components/Detailspage";
import PrivateRoute from "../components/PrivateRoute";
import ManageService from "../components/ManageService";


const router=createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Homepage></Homepage>
            },
            {
                path:'/addservice',
                element:<Addservice></Addservice>
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><Detailspage></Detailspage></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/service',
                element:<Allservice></Allservice>
            },
            {
                path:'/manageservice',
                element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
            }
            
            
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