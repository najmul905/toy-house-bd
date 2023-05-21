import React from 'react';
import image from '../../../../public/banner3.jpg'
import './banner.css'
const Banner = () => {
    return (
<div className=' relative'>

<div>
<div>
<h2 className='hover:text-white font-bold italic text-3xl bg-white p-4 rounded-full h-32 w-32 absolute bottom-56 left-32'>
    <span className='text-green-600 hover:text-rose-500'>Toy</span> <span className='text-green-800 hover:text-rose-500'>House</span>
</h2>
</div>
<div>
<h1 className='text-4xl font-bold text-white absolute bottom-32 left-14'>Welcome to <span className='italic'>Toy House BD</span></h1>
<button className='border border-white rounded hover:bg-yellow-900 text-white px-3 py-1 font-bold absolute left-14 bottom-24'>Shop Now</button>
</div>
</div>
<div>
<img className='h-96 w-full' src={image} alt="" />
</div>


</div>
    );
};

export default Banner;