import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home/Home.jsx';
import AllToyes from './Components/Home/AllToys/AllToyes.jsx';
import MyToys from './Components/Home/MyToyes/MyToys.jsx';
import AddToy from './Components/Home/AddToy/AddToy.jsx';
import Blog from './Components/Home/Blog/Blog.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import SingUp from './Components/SingUp/SingUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"allToy",
        element:<AllToyes></AllToyes>
      },
      {
        path:"myToy",
        element:<MyToys></MyToys>
      },
      {
        path:"addToy",
        element:<AddToy></AddToy>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"singUp",
        element:<SingUp></SingUp>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
