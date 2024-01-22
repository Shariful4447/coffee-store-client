import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'


import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader : () =>fetch('http://localhost:3000/coffee')
    // children: [
    //   {
    //     path: "Home",
    //     element: <Home/>,
    //   },
    //   {
    //     path: "Login",
    //     element: <Login/>,
    //   },
    // ],
  },
  {
    path: "addCoffee",
    element: <AddCoffee/>,
  },
  {
    path: "update",
    element: <UpdateCoffee/>,
  },
  
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
