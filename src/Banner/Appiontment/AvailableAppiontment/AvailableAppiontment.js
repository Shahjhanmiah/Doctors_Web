import { format } from 'date-fns';
import React, { useState } from 'react';
import AppiontmentOption from '../AppiontmentOption';

const AvailableAppiontment = ({selectedDate}) => {
    const [appiontmentOption,setAppiontmentOption] = useState([])
    useState(()=>{
        fetch('appiontmentOption.json')
        .then(res=>res.json())
        .then(data=> setAppiontmentOption (data))
    },[])
    return (
        <section className='mt-16'>
            <p className='text-center text-white'>Available Appiontment{format(selectedDate, "PP")}</p>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    appiontmentOption.map(option=> <AppiontmentOption

                        key={option._id}
                        appiontmentOption={option}
                    >

                    </AppiontmentOption>)
                }
            </div>
        </section >
    );
};

export default AvailableAppiontment;