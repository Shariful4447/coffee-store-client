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
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProviders from './components/Providers/AuthProviders.jsx'
import Users from './components/Users/Users.jsx'
import Snacks from './components/Snacks/Snacks.jsx'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader : () =>fetch('http://localhost:8000/coffee')
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
    path: "snacks",
    element: <Snacks/>,
    loader : () =>fetch('http://localhost:8000/coffee')
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "data",
    element: <DataTable></DataTable>,
    
  },

  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee/>,
    loader : ({params}) =>fetch(`http://localhost:8000/coffee/${params.id}`)
  },

  {
    path: "user",
    element: <Users></Users>,
    loader : () =>fetch('http://localhost:8000/user')
  }
  

  
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
