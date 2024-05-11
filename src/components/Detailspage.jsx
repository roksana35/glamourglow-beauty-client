import { BsListNested } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Detailspage = () => {
    const service =useLoaderData();
    console.log(service)
    const {photo,name,description,username,userphoto,price}=service;
    
   
    // const card=data.find(item=>item._id === id)
    // console.log(card)

   
    return (
        <div className="card lg:w-[800px] bg-base-100 shadow-xl mt-5">
  <figure><img className=" rounded-md lg:w-[500px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span>Service Name:</span>
      {name}</h2>
      <p><span> Price:</span>{price}</p>
      <p><span>Service Provider Name:</span>{username}</p>
      <p><span>Service Provider Image:</span><img src={userphoto}></img></p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link><button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default Detailspage;