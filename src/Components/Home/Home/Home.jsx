import React from 'react';
import HeaderLayOut from '../HeaderLayOut/HeaderLayOut';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import ReactTab from '../ReactTab/ReactTab';



const Home = () => {
    return (
        <div className=''>
            
            <Banner></Banner>
            <h1>This is Home page</h1>
           <ReactTab></ReactTab>
            
        </div>
    );
};

export default Home;