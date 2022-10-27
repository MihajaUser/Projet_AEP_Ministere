import React from 'react';
import SideBar from '../components/Sidebar/SideBar';
import { Outlet } from "react-router";
import Header from '../components/header/Header.js'
const Main = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Main;