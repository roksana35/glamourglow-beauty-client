import { useContext, useState } from "react";

import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// /import { Modal } from "@headlessui/react";


const Detailspage = () => {
  
    const service =useLoaderData();
    const{user}=useContext(AuthContext);

    // console.log(service)
    const {_id,photo,name,description,username,userphoto,useremail,price,serviceArea}=service;

    const handlePurchese=event=>{
      event.preventDefault();
      const form =event.target;
      const serviceName=form.serviceName.value;
      const serviceId=form.serviceId.value;
      const serviceImage=form.serviceImage.value;
      const providerName=username.value;
      const providerEmail=useremail.value;
      const currentUserName=user?.displayName;
      const currentUserEmail=user?.email;
      const Date = form.date.value;
      const address =form.area.value;
      const status='pending';
      // console.log(serviceName,serviceImage,serviceId,providerName,providerEmail,currentUserName,currentUserEmail,Date,address,status)
      const purchaseInf={serviceName,serviceImage,serviceId,providerName,providerEmail,currentUserName,currentUserEmail,Date,address,status}
      fetch('https://beauty-and-grooming-server.vercel.app/purchase',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(purchaseInf)
      })
      .then(res =>res.json())
      .then(data=>{
        // console.log(data)
        const purchase=data;
        if(data.insertedId){
          Swal.fire({
              title: "success",
              text: "Sucessfully Booked Service",
              icon: "success"
            });
      }

      })
    }
   
    return (
        <div>
          <Helmet>
            <title>Details Page</title>
          </Helmet>
            <div className="card lg:w-[800px] bg-base-100 shadow-xl mt-5 mx-auto">
  <figure><img className=" rounded-md w-[300px] h-[250px] lg:w-[500px] lg:h-[400px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span>Service Name:</span>
      {name}</h2>
      <p><span className="font-lato font-semibold"> Price:</span>{price}</p>
      <p><span className="font-lato font-semibold"> Service Area: </span>{serviceArea}</p>
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

  <form onSubmit={handlePurchese} className="card-body p-3">
    {/* service name and image */}
    <div className="md:flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text"> Service ID</span>
          </label>
          <input type="text" name="serviceId" value={_id} readOnly placeholder=" Service ID" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Name</span>
          </label>
          <input type="text" name="serviceName" value={name} readOnly placeholder=" Service Name" className="input input-bordered" required />
          
        </div>

    </div>
    {/* provider name and email */}
    <div className="md:flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text"> Provider Name</span>
          </label>
          <input type="text" name="providerName" value={username} readOnly placeholder="Provider Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Provider Email</span>
          </label>
          <input type="email" name="providerEmail" value={useremail} readOnly placeholder=" Provider Email" className="input input-bordered" required />
          
        </div>

    </div>
    {/* current user name and email */}
    <div className="md:flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Currentuser Name</span>
          </label>
          <input type="text" name="currentName" value={user?.displayName}  readOnly placeholder="Currentuser Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Currentuser Email</span>
          </label>
          <input type="email" name="currentEmail" value={user?.email} readOnly placeholder=" Currentuser Email" className="input input-bordered" required />
          
        </div>

    </div>
    {/* date and address */}
    <div className="md:flex gap-4 justify-center items-center">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <select  className="py-2 lg:px-4 w-full rounded-md text-gray-700 border-2 " name="area" id="area">
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Tangail">Tangail</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Mirpur 11">Mirpur 11</option>
                            
                            
                        </select>

          {/* <input type="text" name="address" placeholder=" address" className="input input-bordered" required /> */}
          
        </div>

    </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input type="text" name="serviceImage" value={photo} readOnly placeholder=" address" className="input input-bordered" required />
          
        </div>

      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Purchase</button>
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