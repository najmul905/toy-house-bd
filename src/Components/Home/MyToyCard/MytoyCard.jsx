import React from 'react';
import { Link } from 'react-router-dom';

const MytoyCard = ({data}) => {
    const {name,image,_id}=data
const [toys,setToys]=use
    // delete operation
    const handelDelete=(_id)=>{
      console.log('delete',_id)
      fetch(`http://localhost:5000/toys/${_id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)})
    }
    
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