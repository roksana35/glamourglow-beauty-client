import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";


const Addservice = () => {
    const {user}=useContext(AuthContext)

    const handleAddServices=event=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const price=form.price.value;
        const serviceArea=form.area.value;
        const photo=form.photo.value;
        const description=form.description.value;
        console.log(name,price,serviceArea,photo,description)
        // const useremail=user.email;
        // const username=user.displayName;
        // const addService={name,price,serviceArea,photo,description,username,useremail}
    }

    return (
        <div className="min-h-screen bg-cover mt-4  rounded-xl bg-center flex items-center justify-center" style={{backgroundImage: "url('https://i.ibb.co/TLf4NSL/ecofriendly-beauty-product.jpg')"}}>
           <form onSubmit={handleAddServices} className=" p-3 lg:p-8 border-r-emerald-500 border text-white">
                {/*  name and price */}
                <div className="md:flex mb-1 md:gap-3">
                    <div className="form-control  md:w-1/2 sm:w-full">
                        <label className="label">
                            <span className="label-text text-white"> Service Name</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full" type="text" name="name" required placeholder="Enter Name"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="price" required placeholder="Price" />
                        </label>
                    </div>
                    
                </div>
                
                {/* service area  &  photourl*/}
                <div  className="md:flex mb-1 md:gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Service Area</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="area" required placeholder="Service Area"  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white"> Image URL</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="photo" required placeholder=" Image URL"  />
                        </label>
                    </div>
                </div>
                

                
                <div className="form-control w-full md:mb-4">
                        <label className="label">
                            <span className="label-text text-white">Description</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full " type="text" name="description" required placeholder="Description"  />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary w-full">Add </button>
                    </div>


            </form>

        </div>
            
            
        
    );
};

export default Addservice;