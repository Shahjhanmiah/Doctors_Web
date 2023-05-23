import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, array } = review
    return (
        <div>
            <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title"></h2>
                    <p>{array}</p>
                    <div className="card-action">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img}alt=""/>
                            </div>
                        </div>
                        <div>
                           <h1 className='text-3xl font-bold'>{name}</h1>
                           <h1 className='4xl font-bold'>{location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;