import React from 'react';

const AllToysCard = ({info}) => {

    const{displayName,email,image,name}=info
    console.log(displayName,image)
    return (
        <div>
            <div className="card w-auto glass">
  <figure><img className='' src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Seller name: {displayName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllToysCard;