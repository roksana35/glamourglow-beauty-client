import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen bg-cover mt-4 p-4 rounded-xl bg-center flex items-center justify-center" style={{backgroundImage: "url('https://i.ibb.co/ScvD5wm/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg')"}}>
             {/* <div className="bg-white p-8 rounded-lg shadow-lg"></div> */}
             <form className="bg-black p-8 bg-opacity-45 rounded-lg shadow-lg m-5 w-2/4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered    w-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Login</button>
        </div>
        <div className="text-center mt-3 ">
        <span className="text-white text-center"> New here? Create a account <Link to='/register'><button className="text-white font-semibold text-purple-600 ml-3">Register</button></Link></span> 
        <div className=" p-2 lg:ml-7 mx-auto">
      <button  className="btn btn-outline border-2 text-white border-purple-800 mx-auto"> Continue with Google</button>
   </div>

        </div>
       

      </form>
      
        </div>
    );
};

export default Login;