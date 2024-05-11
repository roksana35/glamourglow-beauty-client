import { useState } from "react";

import { useLoaderData, } from "react-router-dom";
// /import { Modal } from "@headlessui/react";


const Detailspage = () => {
    const service =useLoaderData();
    console.log(service)
    const {photo,name,description,username,userphoto,price}=service;

    const [isopen,setIsopen]=useState(false);

    const handleOpenModal=()=>{
        setIsopen(true)
    }
    const handleCloseModal=()=>{
        setIsopen(false)
    }
   
    // const card=data.find(item=>item._id === id)
    // console.log(card)

   
    return (
        <div>
            <div className="card lg:w-[800px] bg-base-100 shadow-xl mt-5 mx-auto">
  <figure><img className=" rounded-md w-[300px] h-[250px] lg:w-[500px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span>Service Name:</span>
      {name}</h2>
      <p><span className="font-lato font-semibold"> Price:</span>{price}</p>
      <p><span className="font-lato font-semibold">Service Provider Name:</span>{username}</p>
      <p><span className="font-lato font-semibold">Service Provider Image:</span><img className="w-[50px] rounded-md" src={userphoto}></img></p>
    <p><span className="font-lato font-semibold">Description:</span>{description}</p>
    <div className="card-actions justify-end">
      {/* <button onClick={handleOpenModal} className="btn btn-primary">Book Now</button> */}
      <label htmlFor="my_modal_7"   className="btn btn-primary">Book Now</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">

  <form className="card-body p-3">
    {/* service name and image */}
    <div className="flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Image</span>
          </label>
          <input type="text" name="image" placeholder=" Service Image" className="input input-bordered" required />
          
        </div>

    </div>
    {/* provider name and email */}
    <div className="flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text"> Provider Name</span>
          </label>
          <input type="text" name="providername" placeholder="Provider Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Provider Email</span>
          </label>
          <input type="email" name="Provideremail" placeholder=" Provider Email" className="input input-bordered" required />
          
        </div>

    </div>
    {/* current user name and email */}
    <div className="flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Currentuser Name</span>
          </label>
          <input type="text" name="currentname" placeholder="Currentuser Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Currentuser Email</span>
          </label>
          <input type="email" name="currentemail" placeholder=" Currentuser Email" className="input input-bordered" required />
          
        </div>

    </div>
    {/* date and address */}
    <div className="flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name="address" placeholder=" address" className="input input-bordered" required />
          
        </div>

    </div>

      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </div>
  </div>
</div>

       

            </div>
        

        
    );
};

export default Detailspage;