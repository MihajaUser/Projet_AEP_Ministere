import React, { useEffect, useMemo } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { getStation } from "./../../../service/StationS"
import { getCanalisation } from "./../../../service/Canalisation"
import { setStation } from "../../../redux/StationSlice"
import { useState } from "react";
import { setCanalisation } from "../../../redux/CanalisationSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [myStation, setMystation] = useState();
  const [myTacheAdduction, setMyTacheAdduction] = useState();

  useEffect(() => {
    const handleTacheAdduction = async () => {
      const x = await getStation();
      setMystation(x.data);
    }
    if (!myStation)
      handleTacheAdduction()
    if (myStation) {
      dispatch(setStation(myStation))
    }
  }, [myTacheAdduction, dispatch])
  useEffect(() => {
    const handleStation = async () => {
      const x = await getStation();
      setMystation(x.data);
    }
    if (!myStation)
      handleStation()
    if (myStation) {
      dispatch(setStation(myStation))
    }
  }, [myStation, dispatch])
  //ho an'ilay canalisation 
  // mamorona variable en local alony a vide izy eto
  const [myCanalisation, setMyCanalisation] = useState();
  useEffect(() => {
    const getDataCanalisation = async () => {
      const y = await getCanalisation();
      setMyCanalisation(y.data);
    }
    if (!myCanalisation)
      getDataCanalisation()
    if (myCanalisation) {
      dispatch(setCanalisation(myCanalisation))
    }
  }, [myCanalisation, dispatch])

  return (
    <div style={{ height: '80%' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
