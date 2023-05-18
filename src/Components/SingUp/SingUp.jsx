import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div>
            <div className="">
  <div className="hero-content ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl mt-3 font-bold text-center">SingUp Now</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='Photo URL' className="input input-bordered" required/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name='email' className="input input-bordered" required/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp</button>
          <h1 className='text-center text-green-400'>If already have any account:</h1>
          <br />
          <div className='text-center'> <Link to="/logIn">          <button className="btn btn-primary">LogIn</button>
</Link></div>
         
        </div>
      </form>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default SingUp;