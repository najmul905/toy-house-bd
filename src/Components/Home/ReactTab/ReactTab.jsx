import React, { useContext, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { contextProvider } from '../../../AuthProvider/AuthProvider';
import { useState } from 'react';
const ReactTab = () => {

  const {data,loader}=useContext(contextProvider)
  

  const [categoryData,setCategoryData]=useState([])
  console.log(categoryData)
  useEffect(()=>{
    fetch('https://toy-house-server-xi.vercel.app/category')
    .then(res=>res.json())
    .then(data=>setCategoryData(data))
  },[])
  const {category}=data
  console.log(data)


  const[sctg,setSctg]=useState([])
const handelCategory=(category)=>{
  console.log(category)
  const singleCategory=data.filter(ctg=>ctg.category==category)
  setSctg(singleCategory)
}
console.log(sctg)
    return (
        <div className='mt-12'>
          <div className='text-center text-3xl font-bold my-7 text-white'>
            <h1>See the Toy Cars Category</h1>
          </div>
             <Tabs>
   <div className='text-center'>
   <TabList>
      {/* <Tab>sports car</Tab>
      <Tab>truck</Tab> */}
      {categoryData.map(data=><Tab
      key={data._id}
      >
        
        <button onClick={()=>handelCategory(data.category)}>{data.category}</button>
      </Tab>)}
    </TabList>
   </div>

  <div>
  <TabPanel>

      <div className='grid md:grid-cols-4 gap-4 md:gap-4 mb-10'>
      {
        sctg.map(data=><div
        key={data._id}
        >
<div className=''>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
        </div>)
      }
      </div>
    </TabPanel>
  </div>
    <TabPanel>
    <div className='grid gap-4 md:grid-cols-4 md:gap-4  mb-10'>
      {
        sctg.map(data=><div
        key={data._id}
        >
<div className=''>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
        </div>)
      }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-4 gap-4 md:gap-4  mb-10'>
      {
        sctg.map(data=><div
        key={data._id}
        >
<div className=''>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
        </div>)
      }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReactTab;