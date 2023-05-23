import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const serveicedata  = [
        {
            id:1,
            name:"fluried terment",
            decription : "our doctor fon  in densited in your dayganti center ",
            img: fluoride
        },
        {
            id:2,
            name:"cavity terment of data ",
            decription : "our doctor fon  in densited in your dayganti center ",
            img: cavity
        },
        {
            id:3,
            name:"whentin",
            decription : "our doctor fon  in densited in your dayganti center ",
            img:whitening
        }
     ]
    return (
        <div>
            <div className='mt-16'>
            <div className='text-center'>
             <h3 className='text-xl font-bold text-primary uppercase'>Our Service</h3>
             <h2 className='text-3xl'>Service width Provider</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                serveicedata.map(data=><Service key ={data.id}
                data={data}>

                </Service>)
            }

            </div>
           
            
        </div>
        </div>
    );
};

export default Services;