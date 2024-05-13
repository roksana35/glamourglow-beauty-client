import { useContext, useState } from "react";
import Slider from "../components/Slider";
import ServicesCard from "../components/ServicesCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";
import { Helmet } from "react-helmet-async";
import About from "../components/About";


const Homepage = () => {
    const {loading}=useContext(AuthContext);

    const[services,setServices]=useState([]);
    if(loading){
        return <span className="loading loading-spinner ml-32 lg:ml-96 loading-lg text-center block items-center"></span>
    }

    
        fetch('https://beauty-and-grooming-server.vercel.app/services',{
        method:'GET'
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        
        setServices(data.slice(0,6))
        
    })


   
    
    return (
        <div className="mt-6">
            <Helmet>
                <title>Home Page </title>
            </Helmet>
            <Slider></Slider>
            <div className="text-center mt-4">
            <p className="text-3xl font-lato font-extrabold">Our <span className="bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text font-bold">Services</span></p>
            <p>Grooming is more than just an outward presentation; it's a holistic practice embodying self-respect, <br /> attention to detail,  and personal refinement. It's the art of nurturing oneself, both physically and mentally, <br /> to radiate confidence and poise. </p>

            </div>
            
            <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4 md:gap-8">
                
                {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }

                
            </div>
            <div className="flex justify-center mt-6">
            <Link to='/service' className="btn btn-secondary  ">show all</Link>

            </div>
            <div className="mt-5 mb-4">
                <About></About>
            </div>
            
            
        </div>
    );
};

export default Homepage;