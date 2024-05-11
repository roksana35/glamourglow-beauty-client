import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import ServicesCard from "../components/ServicesCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";


const Homepage = () => {
    const {loading}=useContext(AuthContext);

    const[services,setServices]=useState([]);
    if(loading){
        return <span className="loading loading-spinner ml-32 lg:ml-96 loading-lg text-center block items-center"></span>
    }

    
        fetch('http://localhost:5000/services',{
        method:'GET'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
        setServices(data.slice(0,6))
        
    })


   
    
    return (
        <div className="mt-6">
            <Slider></Slider>
            <p>service:{services.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                
                {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }

                
            </div>
            <div className="flex justify-center mt-6">
            <Link to='/allservice' className="btn btn-secondary  ">show all</Link>

            </div>
            
            
        </div>
    );
};

export default Homepage;