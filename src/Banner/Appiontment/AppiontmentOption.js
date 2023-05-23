import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppiontmentOption = ({ appiontmentOption,setTreatment }) => {
    const { name, slots } = appiontmentOption
    return (
        <div>
            <div className="card w-96 bg-black shadow-xl">
                <div className="card-body text-center my-10">
                    <h2 className=" text-center text-2xl text-white">{name}</h2>
                    <p>{slots.length > 0 ? slots[0]:"Tray in  Anotherday"}</p>
                    <p>{slots.length} {slots.length > 1 ? "space":"sapce" }</p>
                    <div className=" justify-ceter">
                        <label 
                        htmlFor="booking-modal"  
                        className="btn btn-primary"
                        onClick={()=>setTreatment(appiontmentOption)}
                        >Book Appiontement</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOption;