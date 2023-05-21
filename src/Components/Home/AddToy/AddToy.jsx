import React, { useContext } from 'react';
import { contextProvider } from '../../../AuthProvider/AuthProvider';

const AddToy = () => {
const {user,loader}=useContext(contextProvider)
const {email,displayName}=user
if(loader){
    return <progress className="progress w-full"></progress>
}
// setLoader(false)
const handelPost=(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value;
    const image=form.image.value;
    const email=form.email.value;
    const displayName=form.seller.value;
    const category=form.category.value;
    const rating=form.rating.value;
    const quantity=form.quantity.value;
    const price=form.price.value;
    const details=form.details.value;
    const info={displayName,email,image,name,category,rating,quantity,details,price}
    console.log(info)
    fetch('http://localhost:5000/toys',{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
}

    return (
        <div className='mx-14 rounded'>
            <h1 className='text-3xl font-bold bg-rose-300 text-center' >Add Toy</h1>
           <form onSubmit={handelPost} className='text-center bg-white'>     
<div>
    
<input className='bg-slate-200 rounded mb-2 mr-2 p-3' placeholder='Image' type="text" name="image" id="" />
<input className='bg-slate-200 rounded mb-2 p-3' placeholder='Toy Name' type="text" name="name"  id="" />
</div>
<div>
<input className='bg-slate-200 rounded mb-2 mr-2 p-3'  type="text" name="seller" defaultValue={displayName} disabled placeholder='Seller  Name' id="" />

<input className='bg-slate-200 rounded mb-2 p-3' type="email" name="email" placeholder='Email' id="" disabled defaultValue={email} />
</div>
<div>
<input className='bg-slate-200 rounded mb-2 mr-2 p-3'  type="text" name="category" placeholder='Category' id="" />
<input className='bg-slate-200 rounded mb-2 p-3'  type="number" name="rating" placeholder='Rating' id="" />
</div>
<div>
<input className='bg-slate-200 rounded mb-2 mr-2 p-3'  type="number" name="quantity" placeholder='Quantity' id="" />
<input className='bg-slate-200 rounded mb-2 p-3' placeholder='Price' type="number" name="price" id="" />
</div>
<div>
<input className='bg-slate-200 rounded mb-2 p-3 w-full' placeholder='Details' type="text" name="details" id="" />
</div>
<button className='bg-green-500 text-white font-bold px-3 py-2 rounded mb-10 '>Submit</button>
           </form>
        </div>
    );
};

export default AddToy;