import React from 'react';
import HeaderLayOut from '../HeaderLayOut/HeaderLayOut';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import ReactTab from '../ReactTab/ReactTab';
import Slider from '../Slider/Slider';



const Home = () => {
    return (
        <div className='mx-14'>
            
            <Banner></Banner>
           
            <Slider></Slider>
           <ReactTab></ReactTab>
            
        </div>
    );
};

export default Home;