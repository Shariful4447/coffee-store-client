import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import DataTable from './components/dataTable/DataTable.jsx'


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
    path: "data",
    element: <DataTable></DataTable>,
    
  },

  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee/>,
    loader : ({params}) =>fetch(`http://localhost:3000/coffee/${params.id}`)
  },
  
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
