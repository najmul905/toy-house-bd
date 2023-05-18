import React from 'react';
import HeaderLayOut from '../HeaderLayOut/HeaderLayOut';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='md:mx-12 mx-4'>
            
            <Banner></Banner>
            <h1>This is Home page</h1>
            
        </div>
    );
};

export default Home;