import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { contextProvider } from '../../AuthProvider/AuthProvider';

import { updateProfile } from 'firebase/auth';

const SingUp = () => {
const {createUser}=useContext(contextProvider)


const handelSingUp=(event)=>{
event.preventDefault();
const form=event.target;
const name=form.name.value;
const image=form.image.value;
const email=form.email.value;
const password=form.password.value;
console.log(name,image,email,password)

createUser(email,password)
.then(result=>{
  const user=result.user
  updateUser(user,name,image)
  console.log(user)
})
.catch(error=>{
  console.log(error)
})
}

const updateUser=(user,image,name)=>{
  updateProfile(user,{
    displayName:name,
    photoURL:image
  })
  .then(result=>{console.log(result.user)})
  .catch(error=>{console.log(error)})
}

    return (
        <div>
            <div className="">
  <div className="hero-content ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl mt-3 font-bold text-center">SingUp Now</h1>
      <form onSubmit={handelSingUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='image' className="input input-bordered" />
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