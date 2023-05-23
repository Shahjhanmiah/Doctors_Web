import React from 'react';

const Card = ({data}) => {
    const { decripation,name,icon,bgClass} = data
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl px-6 text-white ${bgClass}`}>
                <figure><img src={icon} alt="Movie" className='w-50%' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{decripation}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;