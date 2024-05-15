import { useContext, useEffect, useState } from "react";
import AllCard from "./AllCard";
import { AuthContext } from "../authprovider/Authprovider";
import axios from "axios";


const Allservice = () => {
    const [loading,setLoading]=useState(true);
   
        
    const[services,setServices]=useState([]);
    
    
    
   
        fetch('https://beauty-and-grooming-server.vercel.app/services',{
            method:'GET'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
                
                setLoading(false)
            })
            // console.log(count)
           

    return (
        <div>
            {loading?( <span className="loading loading-spinner ml-32 mx-auto lg:ml-96 block justify-center loading-lg text-center  items-center"></span>):( <div className="lg:w-[700px] mb-3 mx-auto">
        {
            services.map(service=><AllCard key={service._id} service={service}></AllCard>)
        }
        </div> )}
        

        </div>
        
    );
};

export default Allservice;