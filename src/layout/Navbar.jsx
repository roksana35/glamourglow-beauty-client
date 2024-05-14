import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";


const Navbar = () => {
  const {user,logoutUser}=useContext(AuthContext);
  const [theme,setTheme]=useState(localStorage.getItem('theme') || ("light"));
  useEffect(()=>{
    localStorage.setItem('theme',theme);
    const localTheme=localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme)

  },[theme]);
  const HandleTheme=e=>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  const [hovered, setHovered] = useState(false);

    return (
        <div className="navbar bg-base-100 top-0 h-[78px] sticky z-50">
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
    {/* <Link to='/' className="btn btn-ghost flex gap-0 lg:text-2xl font-lato lg:hidden">
          <span><img src="https://i.ibb.co/XWyxF9h/12343867-4962315.jpg" className="w-[40px] h-[40px] md:w-[70px] md:h-[60px] mr-0 rounded-md mt-0 " alt="" /></span> GlamourGlow <br /> Beauty
        </Link> */}
    <Link to='/' className="btn btn-ghost  gap-0 md:inline-block lg:text-2xl font-lato hidden sm:inline-block"><span><img src="https://i.ibb.co/XWyxF9h/12343867-4962315.jpg" className="w-[40px] h-[40px] md:w-[70px] md:h-[60px] mr-0 rounded-md mt-0 " alt="" /></span></Link>
    <p className="lg:text-3xl font-lato font-extrabold"><span className="bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text font-extrabold">GlamourGlow</span><br /> beauty</p>
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
  <label className="cursor-pointer grid place-items-center">
  <input onClick={HandleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
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