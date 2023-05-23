import React from 'react';
import chari from '../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chari} className=" rounded-lg  lg:w-1/2 shadow-2xl"alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Our Doctor Chamber!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;