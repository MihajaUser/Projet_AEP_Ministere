import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div style={{ height: '80%' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
