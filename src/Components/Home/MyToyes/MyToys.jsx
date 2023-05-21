import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';
import MytoyCard from '../MyToyCard/MytoyCard';

const MyToys = () => {
const {data,user,loader}=useContext(contextProvider)
if(loader){
    return <progress className="progress w-56"></progress>
}
const {email}=user
console.log(email)

const myToy=data.filter(info=>info.email===email)
console.log(myToy.length)
    return (
        <div className='mx-14'>
           <h1>My Toys page{myToy.length}</h1> 
           <div mb-4>
           {
            myToy.map(data=><MytoyCard
            key={data._id}
            data={data}
            ></MytoyCard>)
           }
           </div>
        </div>
    );
};

export default MyToys;