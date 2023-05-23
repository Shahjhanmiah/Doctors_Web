import React from 'react';

const Service = ({data}) => {
    const {name,img, decription} = data
    return (
        <div>
            <div className="card  bg-black text-white w-350 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{decription}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;