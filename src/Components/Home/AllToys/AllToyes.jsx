import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';
import AllToysCard from '../AlltoysCard/AllToysCard';

const AllToyes = () => {
    const {data}=useContext(contextProvider)
    return (
        <div className='mx-14'>
            <h1>All toys page{data.length}</h1>
            <div className='grid md:grid-cols-3 gap-4 mb-10'>
            {
                data.map(info=><AllToysCard
                key={info._id}
                info={info}
                >

                </AllToysCard>)
            }
            </div>
           
        </div>
    );
};

export default AllToyes;