import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import MyAddedService from "./MyAddedService";


const ManageService = () => {
    const {user}=useContext(AuthContext);
    const [managedata,setManagedata]=useState([]);

    fetch(`http://localhost:5000/manageservice/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setManagedata(data)

    })

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                managedata.map(data=><MyAddedService key={data._id} data={data} managedata={managedata} setManagedata={setManagedata}></MyAddedService>)
            }
        </div>
    );
};

export default ManageService;