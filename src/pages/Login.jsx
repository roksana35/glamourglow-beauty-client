import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";


const Login = () => {
  const {loginuser,googleSignIn}=useContext(AuthContext);

    const handleLogInUser=e=>{
      e.preventDefault();
      const form =e.target;
      const email= form.email.value;
      const pass=form.password.value;
      console.log(email,pass)
      loginuser(email,pass)
      .then(res=>{
        const result=res.user 
        console.log(result)
      }).catch((error)=>{
        const errorcode=error.message
        console.log(error.message)
      })
    }
    const handlegoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user)
      }).catch((error)=>{
        const errorcode =error.message;
        console.log(error.message)
      })
    }


    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-cover mt-4 p-4 rounded-xl bg-center flex items-center justify-center" style={{backgroundImage: "url('https://i.ibb.co/ScvD5wm/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg')"}}>
             {/* <div className="bg-white p-8 rounded-lg shadow-lg"></div> */}
             <form onSubmit={handleLogInUser} className="bg-black p-2 lg:p-8 bg-opacity-45 rounded-lg shadow-lg lg:m-5 lg:w-2/4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered    w-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Login</button>
        </div>
        <div className="text-center mt-3 ">
        <span className="text-white text-center"> New here? Create a account <Link to='/register'><button className="text-white font-semibold text-purple-600 ml-3">Register</button></Link></span> 
        <div className=" p-2 lg:ml-7 mx-auto">
      <button onClick={handlegoogleSignIn}  className="btn btn-outline border-2 text-white border-purple-800 mx-auto"> Continue with Google</button>
   </div>

        </div>
       

      </form>
      
        </div>

        {/* footer */}
        <Footer></Footer>

      </div>
        
    );
};

export default Login;