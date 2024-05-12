import { useContext, useEffect, useState } from "react";
import AllCard from "./AllCard";
import { AuthContext } from "../authprovider/Authprovider";


const Allservice = () => {
    const {loading}=useContext(AuthContext)
        
    const[services,setServices]=useState([]);
    if(loading){
        return <span className="loading loading-spinner ml-32 lg:ml-96 block justify-center loading-lg text-center  items-center"></span>
    }
    
   
        fetch('https://beauty-and-grooming-server.vercel.app/services',{
            method:'GET'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            })
            
    


    return (
        <div>
            <div className="lg:w-[700px] mx-auto">
        {
            services.map(service=><AllCard key={service._id} service={service}></AllCard>)
        }
        </div>

        </div>
        
    );
};

export default Allservice;