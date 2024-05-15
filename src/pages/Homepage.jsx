import { useContext, useState } from "react";
import Slider from "../components/Slider";
import ServicesCard from "../components/ServicesCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";
import { Helmet } from "react-helmet-async";
import About from "../components/About";
import ExtraSection from "../components/ExtraSection";
import Extrasection2 from "../components/Extrasection2";


const Homepage = () => {
    const [loading,setLoading]=useState(true);
    const[services,setServices]=useState([]);
    

    
        fetch('https://beauty-and-grooming-server.vercel.app/services',{
        method:'GET'
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        
        setServices(data.slice(0,6))
        setLoading(false)
        
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
            {
                    loading?(<span className="loading loading-spinner ml-32 lg:ml-96 block justify-center loading-lg text-center  items-center"></span>):(<div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4 md:gap-8">
                
                    {
                            services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                        } 
                </div>)
                }
            
            
            <div className="flex justify-center mt-6">
            <Link to='/service' className="btn btn-secondary  ">show all</Link>

            </div>
            <div className="mt-5 mb-4">
                <About></About>
            </div>
            <div className="mt-5 md:mt-24">
                <p className="font-lato text-center text-3xl "><span className="font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-900 bg-clip-text">Our Products</span></p>
                <p className="text-center  mt-3 md:text-xl">Discover our product section—a haven for self-care and beauty. <br /> Explore skincare,  haircare, cosmetics, and grooming essentials handpicked to elevate your routine. <br /> From serums to makeup, each item is chosen to enhance your beauty journey.</p>
            <div className=" mt-5 md:mt-10">
                <Extrasection2></Extrasection2>
                </div>

            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
            
            
            
        </div>
    );
};

export default Homepage;