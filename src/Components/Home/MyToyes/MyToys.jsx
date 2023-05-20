import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';

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
        <div>
           <h1>My Toys page{myToy.length}</h1> 
        </div>
    );
};

export default MyToys;