import { format } from 'date-fns';
import React, { useState } from 'react';
import AppiontmentOption from '../AppiontmentOption';
import BookingModal from '../BookingModal';

const AvailableAppiontment = ({selectedDate}) => {
    const [appiontmentOption,setAppiontmentOption] = useState([])
    const [treatment,setTreatment] = useState(null)
    useState(()=>{
        fetch('appiontmentOption.json')
        .then(res=>res.json())
        .then(data=> setAppiontmentOption (data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-center text-white'>Available Appiontment{format(selectedDate, "PP")}</p>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 '>
                {
                    appiontmentOption.map(option=> <AppiontmentOption

                        key={option._id}
                        appiontmentOption={option}
                        setTreatment={setTreatment}
                    >

                    </AppiontmentOption>)
                }
            </div>
           { 
           treatment &&
           <BookingModal
           selectedDate={selectedDate}
            treatment={treatment}
            >

            </BookingModal>}
        </section >
    );
};

export default AvailableAppiontment;