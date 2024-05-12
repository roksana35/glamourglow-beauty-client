import { Link } from "react-router-dom";


const AllCard = ({service}) => {
    const {_id,name,photo,price,description,username,userphoto}=service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mb-10">
        <figure><img src={photo} className="w-[350px] h-[300px]  p-2 lg:p-4 rounded-lg" alt="Album"/></figure>
        <div className="card-body lg:ml-2 lg:mt-5 lg:p-4  ">
        <h2 className="text-xl font-lato font-bold inline-block">Service Name:{name}</h2>
        <p ><span className="font-lato font-semibold" >Price:</span>{price}</p>
        <p ><span className="font-lato font-semibold">Provider Image:</span><img src={userphoto} className="w-[40px] h-[40px] ml-2 rounded-md inline-block" alt="Service Provider" /></p>
        <p ><span className="font-lato font-semibold">Provider Name:</span> {username}</p>
        <p><span className="font-lato font-semibold">Description:</span>{description.slice(0,100)}</p>       
        <div className="card-actions justify-end">
            <Link to={`/service/${_id}`} className="btn btn-secondary">View Details</Link>
        </div>
        </div>
    </div>
    );
};

export default AllCard;