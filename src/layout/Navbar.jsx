import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";


const Navbar = () => {
  const {user,logoutUser}=useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 top-0 sticky z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink  to='/' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-bold'}>Home</NavLink></li>
        <li><NavLink  to='/services' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-bold'}>Services</NavLink></li>
        <li>
          <Link>Dashboard</Link>
          <ul className="p-1 w-full">
          <li><NavLink  to='/addservice' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Add Service</NavLink></li>
          <li><NavLink  to='/manageservice' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Manage Service</NavLink></li>
          <li><NavLink  to='/booking' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Booking Service</NavLink></li>
          <li><NavLink  to='/todo' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Service-To-Do </NavLink></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl lg:text-2xl font-lato"><span><img src="https://i.ibb.co/XWyxF9h/12343867-4962315.jpg" className="w-[70px] h-[60px] mr-0 rounded-md mt-0" alt="" /></span> GlamourGlow <br /> Beauty</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink  to='/' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-bold'}>Home</NavLink></li>
    <li><NavLink  to='/service' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-bold'}>Services</NavLink></li>
        <li></li>
      <li>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-1 w-full">
          <li><NavLink  to='/addservice' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Add Service</NavLink></li>
          <li><NavLink  to='/manageservice' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Manage Service</NavLink></li>
          <li><NavLink  to='/booking' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Booking Service</NavLink></li>
          <li><NavLink  to='/todo' className={({isActive})=>isActive?'text-purple-600 font-bold':'font-normal'}> Service-To-Do </NavLink></li>
            
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
  {
            user? <div className="dropdown dropdown-end flex items-center justify-center">
              
                <div title={user?.displayName} className="w-10 rounded-full ">
                  <img className="flex items-center justify-center rounded-full"  src={user?.photoURL}>
                  </img>
                  
                </div>
            <button onClick={()=>logoutUser()}  className="btn bg-purple-600 text-white">Sign Out </button>
            </div>
            :
            <Link to='/login'>
            <button className="btn bg-purple-600 text-white">Login</button>
            </Link>

          }
    
    
    
  </div>
</div>
    );
};

export default Navbar;