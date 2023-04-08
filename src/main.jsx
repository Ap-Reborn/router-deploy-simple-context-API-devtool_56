import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import MainLayout from './Component/Layout/MainLayout';
import OrderReview from './Component/OrderReview/OrderReview';
import toast, { Toaster } from 'react-hot-toast';
import Grandpa from './Component/Grandpa/Grandpa';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path:'review',
        element: <OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
