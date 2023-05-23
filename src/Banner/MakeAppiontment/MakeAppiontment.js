import React from 'react';
import img from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppiontment = () => {
    return (
        <div>
             <div className='mt-16'
        style={{
            background:`url(${appointment})`
        }} 
        >
            <div className="hero  bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={img} className="  hidden lg:block lg:w-1/2 -mt-40 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className="text-3xl font-bold">Appionmet!</h4>
                        <h1 className=' text-4xl text fond-bold text-lg-primary'>Make a appiooment letter pir today</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default MakeAppiontment;