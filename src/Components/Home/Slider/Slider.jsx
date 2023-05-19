import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full md:w-1/2 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img src="https://static3.depositphotos.com/1000865/118/i/950/depositphotos_1183767-stock-photo-toy-car.jpg" className=" w-full rounded" />
    {/* <div>
        <button className='bg-red-500 absolute'>Buy Now</button>
    </div> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
   
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://st.depositphotos.com/1455321/1564/i/950/depositphotos_15645257-stock-photo-yellow-toy-car.jpg" className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://c8.alamy.com/comp/HTPJD8/little-mclaren-p1tm-electric-car-for-kids-battery-powered-toy-supercar-HTPJD8.jpg" className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-76426693/76426693.jpg" className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;