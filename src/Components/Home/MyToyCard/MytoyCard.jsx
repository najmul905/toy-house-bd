import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MytoyCard = ({data,handelDelete}) => {
   


const{name,quantity,_id,image}=data
console.log(name,quantity)
    // delete operation
    // const handelDelete=(_id)=>{
    //   console.log('delete',_id)
    //   fetch(`http://localhost:5000/toys/${_id}`,{
    //     method:'DELETE'
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data)
      
    //     if(data.deletedCount>0){
    //       alert('Deleted SuccessFully')
        
    //   }
    //   })
    // }
    
    return (
        <div className='mb-4'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelDelete(_id)} className="btn btn-primary">Delete</button>
      <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MytoyCard;