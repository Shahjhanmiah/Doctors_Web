import React from 'react';
import quote from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import people2  from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testmounial = () => {
    const review = [
        {
            _id:1,
            name:"wiston herry ",
            array:"It is a long established fact that by the readable content",
            location:"Serrmongla",
            img:pepole1

        },
        {
            _id:2,
            name:"wiston herry ",
            array:"It is a long established fact that by the readable content",
            location:"Serrmongla",
            img: people2,

        },
        {
            _id:3,
            name:"wiston herry ",
            array:"It is a long established fact that by the readable content",
            location:"Serrmongla",
            img: people3

        },
    ]
    return (
        <div>
            <section className='my-16'>
            <div className='flex justify-between'>
                <div className='text-center'>
                   {/* <h1 className='text-xl font-bold text-center'>Testimonial</h1>
                   <h1 className='text-4xl font-bold'>What Our patients says</h1> */}
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=''></img>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                  review.map(review=><Review key={review._id}
                  review={review}>

                  </Review>)  
                }
              
            </div>
        </section>
            
        </div>
    );
};

export default Testmounial;