import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';

const AllToyes = () => {
    const {data}=useContext(contextProvider)
    return (
        <div>
            <h1>All toys page{data.length}</h1>
            {/* {
                data.map(info=>)
            } */}
        </div>
    );
};

export default AllToyes;