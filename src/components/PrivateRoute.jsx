import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const loacation=useLocation()
    // console.log(location.pathname)
    if(loading){
        return <span className="loading ml-32 lg:ml-96 loading-ring loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;