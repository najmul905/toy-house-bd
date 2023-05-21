import React, { useContext } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { contextProvider } from '../../AuthProvider/AuthProvider';
const LogIn = () => {
const {logIn}=useContext(contextProvider)
const navigate=useNavigate()
// location
const location=useLocation()
console.log(location)
const from=location.state?.from?.pathname || '/';

  const auth = getAuth();
const provider=new GoogleAuthProvider()
const handelGoogle=()=>{
  signInWithPopup(auth,provider)
  .then(result=>{console.log(result.user)
  navigate(from)
  })
  .catch(error=>{console.log(error)})
}

const handelLogIn=(event)=>{
event.preventDefault()
const form=event.target
const email=form.email.value;
const password=form.password.value;
console.log(email,password)
logIn(email,password)
.then(result=>{
  console.log(result.user)
navigate(from)

})
.catch(error=>{console.log(error)})
}

    return (
        <div>
           
            <div className="">
  <div className="hero-content ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl mt-3 font-bold text-center">LogIn Now</h1>
      <form onSubmit={handelLogIn} className="card-body">
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
          <button className="btn btn-primary">LogIn</button>
         
          <br />
          <button className='bg-green-600 text-white px-2 rounded-xl' onClick={handelGoogle}>SingIn with Google</button>
          <div className='text-center'> <Link to="/singUp"><button className="btn btn-link">Create a new account</button></Link></div>
         
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default LogIn;