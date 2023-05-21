import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';
import MytoyCard from '../MyToyCard/MytoyCard';
import { useState } from 'react';

const MyToys = () => {

   



const {data,user,loader}=useContext(contextProvider)
if(loader){
    return <progress className="progress w-56"></progress>
}
const {email}=user
console.log(email)

const [toys,setToys]=useState(data)

const myToy=toys.filter(info=>info.email===email)
// console.log(myToy.length)



const handelDelete=(_id)=>{
    // console.log('delete',_id)
    fetch(`https://toy-house-server-xi.vercel.app/toys/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    
      if(data.deletedCount>0){
        alert('Deleted SuccessFully')
      const remaining=toys.filter(toy => toy._id !== _id)
setToys(remaining)
    }
    })
  }
    return (
        <div className='mx-14'>
           
           <div mb-4>
           {
            myToy.map(data=><MytoyCard
            key={data._id}
            data={data}
            handelDelete={handelDelete}
            ></MytoyCard>)
           }
           </div>
        </div>
    );
};

export default MyToys;