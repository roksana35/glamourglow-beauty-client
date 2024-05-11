import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ServicesCard from "../components/ServicesCard";


const Homepage = () => {

    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services',{
        method:'GET'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setServices(data.slice(0,6))
    })


    },[])
    
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
            <button className="btn btn-secondary  ">show all</button>

            </div>
            
            
        </div>
    );
};

export default Homepage;