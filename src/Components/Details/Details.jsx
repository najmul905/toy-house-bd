import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider/AuthProvider';

const Details = () => {
const {id}=useParams()

const {data}=useContext(contextProvider)
// const [info,setInfo]=useState('')
const info=data.find(dt=>dt._id==id)
console.log(info)

    return (
        <div className='mx-14 my-6'>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={info.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {info.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{info.details}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Ratings: {info.rating}</div>
      <div className="badge badge-outline">Price: {info.price}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;