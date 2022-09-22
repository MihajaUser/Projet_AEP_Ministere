import React, { useEffect, useMemo } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { getStation } from "./../../../service/StationS"
import { setStation } from "./../../../redux/redux"
import { useState } from "react";
const Home = () => {
  const dispatch = useDispatch();
  const [myStation, setMystation] = useState();
  useEffect(() => {
    const hamdleGetData = async () => {
      const x = await getStation(); setMystation(x.data);
    }
    if (!myStation)
      hamdleGetData()
    if (myStation) {
      dispatch(setStation(myStation))
    }
  }, [myStation, dispatch])
  return (
    <div style={{ height: '80%' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
