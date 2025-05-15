import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Root from '../AllPages/Root';
import Home from '../components/Home/Home';
import MyBookings from '../components/MyBookings/MyBookings';
import Blogs from '../components/Blogs/Blogs';

import LowyerDetails from '../components/LowyerDetails/LowyerDetails';
import ContactUs from '../components/Navber/ContactUs/ContactUs';

export const router = createBrowserRouter([
  {
    path: "/",
    Component :Root,
    errorElement :<errorPages></errorPages>,
    children :[
      {
        index: true,
        Component:Home,
        loader:()=> fetch('/lowyerinfo.json'),
        path:"/",
      }
      ,
      {
        path:'/myBookings' ,
        loader:()=> fetch('/lowyerinfo.json'),
        Component:MyBookings,
      },
      {
        path:'/blogs',
        component:Blogs

      },
      {
        path:'/contactUs',
        component:ContactUs
      },
      {
        path:'/lowyerDetails/:id',
        loader:()=> fetch('/lowyerinfo.json'),
        Component:LowyerDetails
      }
      
      
    ]
  },
  
]);

