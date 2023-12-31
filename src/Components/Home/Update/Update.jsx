import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { contextProvider } from '../../../AuthProvider/AuthProvider';

const Update = () => {

const data=useLoaderData()

const {loader}=useContext(contextProvider)

if(loader){
    return <progress className="progress w-56"></progress>
}

const handelUpdate=(event)=>{
    event.preventDefault()
    const form=event.target
    const price=form.price.value;
    
    const quantity=form.quantity.value;
    const details=form.details.value;
    const updatedData={quantity,details,price}
    console.log(updatedData)
fetch(`https://toy-house-server-xi.vercel.app/toys/${data._id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatedData)
})
.then(res=>res.json())
.then(data=>{console.log(data)})

  
}

    return (
        <div>
        
            <div className='mx-14 rounded'>
            <h1 className='text-3xl font-bold bg-rose-300 text-center' >Update Your Information</h1>
           <form onSubmit={handelUpdate} className='text-center bg-white'>     



<div className=''>
    
<div>
    <h1>Quantity</h1>
    <input className='bg-slate-200  rounded   p-3'  type="number" name="quantity" placeholder='Quantity' defaultValue={data?.quantity} id="" /></div>
    <br />
    <h1>Price</h1>
<input className='bg-slate-200 rounded  p-3' placeholder='Price' type="number" name="price" defaultValue={data?.price} id="" />
</div>
<div className='mt-2'>
    <h1>Details</h1>
<input className='bg-slate-200 rounded mb-2 p-3 w-1/2' placeholder='Details' defaultValue={data.details} type="text" name="details" id="" />
</div>
<button className='bg-green-500 text-white font-bold px-3 py-2 rounded mb-10 '>Update</button>
           </form>
        </div>
        </div>
    );
};

export default Update;