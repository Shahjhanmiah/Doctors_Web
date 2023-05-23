import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppiontmentOption = ({ appiontmentOption }) => {
    const { name, slots } = appiontmentOption
    return (
        <div>
            <div className="card w-96 bg-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-white">{name}</h2>
                    <p>{slots}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOption;