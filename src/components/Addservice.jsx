import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";

const Addservice = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const serviceArea = form.area.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const useremail = user.email;
        const username = user?.displayName;
        const userphoto=user?.photoURL;
        const addService = { name, price, serviceArea, photo, description, username, useremail,userphoto };

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    };

    return (
        <div className="min-h-screen bg-cover mt-4 rounded-xl bg-center flex items-center justify-center" style={{backgroundImage: "url('https://i.ibb.co/TLf4NSL/ecofriendly-beauty-product.jpg')"}}>
            <form onSubmit={handleAddService} className="p-3 lg:p-8 border-r-emerald-500 border text-white">
                <div className="md:flex mb-1 md:gap-3">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Service Name</span>
                        </label>
                        <select className="py-2 px-3 rounded-md text-gray-700" name="name" id="name">
                            <option value="Facial">Facial</option>
                            <option value="Hairspa">Hairspa</option>
                            <option value="waxing">waxing</option>
                            <option value="Makeup">Makeup</option>
                            <option value="Massages">Massages</option>
                            <option value="Haircut">Haircut</option>
                            <option value="Nail Care">Nail Care</option>
                        </select>
                        {/* <label className="input-ghost">
                            <input className="input input-bordered w-full" type="text" name="name" required placeholder="Service Name" />
                        </label> */}
                    </div>
                    
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <select className="py-2 px-3 rounded-md text-gray-700" name="price" id="price">
                            <option value="700">700</option>
                            <option value="1000">1000</option>
                            <option value="1300">1300</option>
                            <option value="2000">2000</option>
                            <option value="1500">1500</option>
                            <option value="3000">3000</option>
                            
                        </select>
                    </div>

                </div>
                
                <div className="md:flex mb-1 md:gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Service Area</span>
                        </label>
                        <select className="py-2 px-3 rounded-md text-gray-700" name="area" id="area">
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Tangail">Tangail</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Mirpur 11">Mirpur 11</option>
                            
                            
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Image URL</span>
                        </label>
                        <label className="input-ghost">
                            <input className="input input-bordered w-full" type="text" name="photo" required placeholder="Image URL" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full md:mb-4">
                    <label className="label">
                        <span className="label-text text-white">Description</span>
                    </label>
                    <label className="input-ghost">
                        <input className="input input-bordered w-full" type="text" name="description" required placeholder="Description" />
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary w-full">Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addservice;
