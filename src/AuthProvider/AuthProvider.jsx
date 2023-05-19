import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase';
export const contextProvider=createContext(null)
const AuthProvider = ({children}) => {
   const auth=getAuth(app)


const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,createUser=>{
        console.log('current user is here',createUser)
        setUser(createUser)
        setLoader(false)
    })
    return()=>{
        unsubscribe()
    }
},[])

const logIn=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    signOut(auth)
}

    
const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
}
const information={createUser,logOut,user,logIn}
    return (
        <div>
            <contextProvider.Provider value={information}>
                {children}
            </contextProvider.Provider>
        </div>
    );
};

export default AuthProvider;