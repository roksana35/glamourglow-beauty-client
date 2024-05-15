import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateService = () => {
    const updateData=useLoaderData();
    // console.log(updateData)
    const  {
        _id,name,photo,price,description,username,useremail,userphoto,
      }=updateData;
    const handleUpdate=(event)=>{
        event.preventDefault();
        const form =event.currentTarget;
        const serviceName =form.serviceName.value;
        const price=form.price.value;
        const providerName=form.providerName.value;
        const providerEmail=form.providerEmail.value;
        const serviceImage=form.serviceImage.value;
        const date=form.date.value;
        const address=form.area.value;
        // console.log(serviceImage,serviceName,providerEmail,providerName,price,date,address)
        const updateData={serviceImage,serviceName,providerEmail,providerName,price,date,address}
        fetch(`https://beauty-and-grooming-server.vercel.app/update/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data?.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Craft Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }

        })
            
    

      }
    return (
        <div>
          <Helmet>
            <title>Update Service </title>
          </Helmet>
            <form onSubmit={handleUpdate} className="card-body p-3 lg:w-[600px] mx-auto">
    {/* service name and image */}
    <div className="flex gap-4">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Name</span>
          </label>
          <input type="text" name="serviceName" value={name}  placeholder=" Service ID" className="input input-bordered" required />
         
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" value={price}  placeholder=" Service ID" className="input input-bordered" required />
        </div>

    </div>
    {/* provider name and email */}
    <div className="flex gap-4">
    <div className="form-control">
          <label className="label">
            <span className="label-text"> Provider Name</span>
          </label>
          <input type="text" name="providerName" value={username} placeholder="Provider Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Provider Email</span>
          </label>
          <input type="email" name="providerEmail" value={useremail}  placeholder=" Provider Email" className="input input-bordered" required />
          
        </div>

    </div>
    
    {/* date and address */}
    <div className="flex gap-4 ">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  placeholder="Date" className="input  input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <select  className="py-2 lg:ml-5 px-4 w-full rounded-md text-gray-700 border-2 " name="area" id="area">
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
          <input type="text" name="serviceImage" defaultValue={photo}  placeholder=" address" className="input input-bordered" required />
          
        </div>

      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateService;