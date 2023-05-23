import React, { useState } from 'react';
import AppiontmentBanner from './AppiontmentBanner';
import AvailableAppiontment from './AvailableAppiontment/AvailableAppiontment';

const Appiontment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppiontmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            >

            </AppiontmentBanner>
            <AvailableAppiontment
            selectedDate={selectedDate}
            >

            </AvailableAppiontment>
        </div>
    );
};

export default Appiontment;