import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedService = ({ data, managedata, setManagedata }) => {
  const {
    _id,name,photo,price,description,username,userphoto,
  } = data;

  const handleDelete=id=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });

  }

  return (
    <div className="card lg:card-side lg:h-[330px] bg-base-100 shadow-xl">
    <figure><img src={photo} className="w-[500px] h-[300px]  p-2 lg:p-4 rounded-lg" alt="Album"/></figure>
    <div className="card-body lg:ml-2 lg:mt-5 lg:p-4  ">
    <h2 className="text-xl font-lato font-bold inline-block">Service Name:{name}</h2>
    <p ><span className="font-lato font-semibold" >Price:</span>{price}</p>
    <p ><span className="font-lato font-semibold">Provider Image:</span><img src={userphoto} className="w-[40px] h-[40px] ml-2 rounded-md inline-block" alt="Service Provider" /></p>
    <p ><span className="font-lato font-semibold">Provider Name:</span> {username}</p>
    <p><span className="font-lato font-semibold">Description:</span>{description.slice(0,100)}</p>
            
    <div className="card-actions ">
        <Link to={`/service/${_id}`} className="btn btn-secondary">View Details</Link>
        <button className="btn btn-primary">Update</button>
        <button className="btn btn-primary">Delete</button>
    </div>
    </div>
</div>
  );
};

export default MyAddedService;
