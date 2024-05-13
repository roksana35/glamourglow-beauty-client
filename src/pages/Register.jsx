import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate=useNavigate();
  const {createuser,user,setUser,updateuser,googleSignIn}=useContext(AuthContext);
  const handlesignup=async(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const photo=form.photo.value;
    const pass=form.password.value;
    // console.log(name,email,photo,pass)
    try{
     const result=await createuser(email,pass)
    // console.log(result)
    await updateuser(name,photo)
    setUser({...user,displayName:name,photoUrl:photo})
      toast.success('Signup Successfully')
      navigate('/')


    }catch(err){
      // console.log(err.message)
      toast.error(err?.message)
    }
    
  }
  const handlegoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      // console.log(result.user)
      toast.success('Successfully Login')
    }).catch((error)=>{
      const errorcode =error.message;
      // console.log(error.message)
    })
  }



    return (

      <div>
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="min-h-screen bg-cover mt-4 p-4 rounded-xl bg-center flex items-center justify-center" style={{backgroundImage: "url('https://i.ibb.co/ScvD5wm/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg')"}}>
        {/* <div className="bg-white p-8 rounded-lg shadow-lg"></div> */}
        <form onSubmit={handlesignup} className="bg-black p-2 lg:p-8 bg-opacity-45 rounded-lg shadow-lg lg:m-5 lg:w-2/4">
   <div className="form-control">
     <label className="label">
       <span className="label-text text-white">Name</span>
     </label>
     <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
   </div>
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
   <div className="form-control">
     <label className="label">
       <span className="label-text text-white">PhotoURL</span>
     </label>
     <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered    w-full" required />
     
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary w-full">Register</button>
   </div>
   <div className="text-center mt-3 ">
   <span className="text-white text-center"> Already have an account then <Link to='/login'><button className="text-white font-semibold text-purple-600 ml-3">Login</button></Link></span> 
   <div className=" p-2 lg:ml-7 mx-auto">
      <button onClick={handlegoogleSignIn}  className="btn btn-outline border-2 text-white border-purple-800 mx-auto"> Continue with Google</button>
   </div>
   </div>
   <ToastContainer />
  

 </form>
 
   </div>
   {/* footer */}
   <Footer></Footer>
      </div>
        
    )
};

export default Register;