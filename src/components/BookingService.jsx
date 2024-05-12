import { useState } from "react";
import BookedCard from "./BookedCard";


const BookingService = () => {
    const [bookservice,setBookservice]=useState([]);

    fetch('http://localhost:5000/booking',{
        method:'GET'
    }).then(res =>res.json())
    .then(data=>{
        console.log(data)
        setBookservice(data)
    })


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 lg:p-10 ">
           {
            bookservice.map(booked=><BookedCard key={booked._id} booked={booked}></BookedCard>)
           }
        </div>
    );
};

export default BookingService;