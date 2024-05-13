import { useContext, useState } from "react";
import BookedCard from "./BookedCard";
import { AuthContext } from "../authprovider/Authprovider";


const BookingService = () => {
    const {user}=useContext(AuthContext)
    const [bookservice,setBookservice]=useState([]);

    fetch(`http://localhost:5000/booking/${user?.email}`,{
        method:'GET'
    }).then(res =>res.json())
    .then(data=>{
        console.log(data)
        setBookservice(data)
    })


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 lg:p-10 ">


            {bookservice.length > 0 ? (
                bookservice.map(booked => (
                    <BookedCard key={booked._id} booked={booked}></BookedCard>
                ))
            ) : (
                <p className="text-center font-lato mt-6 font-bold">You have not booked anything yet.</p>
            )}
            {/* {bookservice.map(booked => {
                // Check if the user booked something and if the message is not added by the user
                if (booked.currentUserEmail === user.email ) {
                    return <BookedCard key={booked._id} booked={booked}></BookedCard>;
                } else {
                    return <p>You don't book anything.</p>; // Don't render the message
                }
            })} */}
        </div>
    );
};

export default BookingService;