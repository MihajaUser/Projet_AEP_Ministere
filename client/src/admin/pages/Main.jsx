import React from 'react';
import SideBar from '../components/Sidebar/SideBar';
import { Outlet } from "react-router";
import Header from '../components/header/Header.js'
import '../App.css'
const Main = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className='MyOutlet' >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;