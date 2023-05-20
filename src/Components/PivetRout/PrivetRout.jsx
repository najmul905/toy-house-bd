import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loader}=useContext(contextProvider)
    

if(loader){
    return <progress className="progress w-56"></progress>
}
    if(user){
        return children
    }
    return <Navigate to='/logIn' replace></Navigate>
    
    
};

export default PrivetRout;