import { useState } from "react";


const BookedCard = ({booked}) => {
    const {Date,_id,address,currentUserName,currentUserEmail,providerEmail,providerName,serviceImage,serviceName,status}=booked;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={serviceImage} className="w-[360px] h-[250px] lg:w-[450px] lg:h-[300px] mt-2 rounded-md" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          Service:
            {serviceName}
            <div className="badge badge-secondary">{status}</div>
          </h2>
          <div>
          
          <p><span className="font-lato font-semibold mr-1">location:</span>{address}</p>
          </div>
          <div >
            <p><span className="font-lato font-semibold mr-1">ProviderName:</span>{providerName}</p>
            <p> <span className="font-lato font-semibold mr-1">ProviderEmail:</span>{providerEmail}</p>
          </div>
          <div>
            <p><span className="font-lato font-semibold mr-1">CurrentUserName:</span>{currentUserName}</p>
            <p> <span className="font-lato font-semibold mr-1">CurrentUserEmail</span>{currentUserEmail}</p>
          </div>
          
        </div>
      </div>
    );
};

export default BookedCard;