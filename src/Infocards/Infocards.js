import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import  phone from '../assets/icons/phone.svg'
import quoke from '../assets/icons/quote.svg'
import Card from './Card/Card';


const Infocards = () => {
    const Data = [
        {
            id:1,
            name:"open in hourse",
            decripation:"open in  8.00am to 9.00 pm everyday",
            icon: clock,
            bgClass:" bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {
            id:2,
            name:"Our location",
            decripation:"open in  8.00am to 9.00 pm everyday ",
            icon: marker,
            bgClass:"bg-black"
        },
        {
            id:3,
            name:"Our Contact Us",
            decripation:"open in  8.00am to 9.00 pm everyday",
            icon: phone,
            bgClass:" bg-gradient-to-r from-cyan-500 to-blue-500"
        }
    ]
    return (
        <div>
             <div className=' mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
            {
                Data.map(data=><Card key={data.id}
                data={data}>

                </Card>)
            }
        </div>
            
        </div>
    );
};

export default Infocards;