

const ServicesCard = ({service}) => {
    const {name,photo,price,description,username,userphoto}=service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={photo} className="w-[350px] h-[300px]  p-2 lg:p-4 rounded-lg" alt="Album"/></figure>
        <div className="card-body lg:ml-2 lg:mt-5 lg:p-4  ">
        <h2 className="text-xl font-lato font-bold inline-block">Service Name:{name}</h2>
        <p ><span className="font-lato font-semibold" >Price:</span>{price}</p>
        <p ><span className="font-lato font-semibold">Provider Image:</span><img src={userphoto} className="w-[50px] h-[50px] rounded-md inline-block" alt="Service Provider" /></p>
        <p ><span className="font-lato font-semibold">Provider Name:</span> {username}</p>
                
        <div className="card-actions justify-end">
            <button className="btn btn-secondary">View Details</button>
        </div>
        </div>
    </div>
    );
};

export default ServicesCard;