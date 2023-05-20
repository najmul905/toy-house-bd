import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loader}=useContext(contextProvider)
    // location
    const location=useLocation()
    console.log(location)

if(loader){
    return <progress className="progress w-56"></progress>
}
    if(user){
        return children
    }
    return <Navigate to='/logIn' state={{from:location}} replace></Navigate>
    
    
};

export default PrivetRout;