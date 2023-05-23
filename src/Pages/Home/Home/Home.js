import React from 'react';
import Banner from '../../../Banner/Banner';
import Infocards from '../../../Infocards/Infocards';
import Services from '../../../Banner/Services/Services';
import MakeAppiontment from '../../../Banner/MakeAppiontment/MakeAppiontment';
import Extainal from '../../../Banner/Extainal/Extainal';
import Testmounial from '../../../Banner/Testmoniul/Testmounial';

const Home = () => {
    return (
        <div className='mx-5px'>
            <Banner></Banner>
            <br></br>
            <Infocards></Infocards>
            <Services></Services>

            <br></br>
             

             <Extainal></Extainal>
            <br></br>

            <MakeAppiontment></MakeAppiontment>
            <br></br>
            <Testmounial></Testmounial>
        </div>
    );
};

export default Home;