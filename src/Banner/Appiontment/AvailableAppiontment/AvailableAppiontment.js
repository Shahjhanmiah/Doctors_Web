import { format } from 'date-fns';
import React from 'react';

const AvailableAppiontment = ({selectedDate}) => {
    return (
        <div>
            <p className='text-center text-white'>Available Appiontment{format(selectedDate, "PP")}</p>
        </div>
    );
};

export default AvailableAppiontment;