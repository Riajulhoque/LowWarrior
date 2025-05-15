import React from 'react';
import Futter from '../components/Futter/Futter';
import Navber from '../components/Navber/Navber';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Futter></Futter>
      
    </div>
  );
};

export default Root;