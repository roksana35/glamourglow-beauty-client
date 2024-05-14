import { useContext, useEffect, useState } from "react";
import AllCard from "./AllCard";
import { AuthContext } from "../authprovider/Authprovider";
import axios from "axios";


const Allservice = () => {
    const [loading,setLoading]=useState(true);
    // const [itemPerPage,setItemPerPage]=useState(3);
    // const [count,setCount]=useState(0)
    // const [search, setSearch] = useState('')
    // const [searchText, setSearchText] = useState('')
        
    const[services,setServices]=useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //       const { data } = await axios(
    //         `{
    //             http://localhost:5000
    //         }/all-service?search=${searchText}`
    //       )
    //       setServices(data)
    //     }
    //     getData()
    //   }, [searchText])
    
    
   
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
            {/* <form >
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form> */}
            {loading?( <span className="loading loading-spinner ml-32 mx-auto lg:ml-96 block justify-center loading-lg text-center  items-center"></span>):( <div className="lg:w-[700px] mb-3 mx-auto">
        {
            services.map(service=><AllCard key={service._id} service={service}></AllCard>)
        }
        </div> )}
        

        </div>
        
    );
};

export default Allservice;