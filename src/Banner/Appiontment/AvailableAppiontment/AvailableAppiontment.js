import { format } from 'date-fns';
import React from 'react';

const AvailableAppiontment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-white'>Available Appiontment{format(selectedDate, "PP")}</p>
        </section >
    );
};

export default AvailableAppiontment;