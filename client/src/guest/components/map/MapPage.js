import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";
import "./styles.scss";

export default function MapPage() {
  const [map, setMap] = useState(null);

  return (
    <div className="App">
      {map && <Sidebar map={map} />}
      <Map setMap={setMap} />
    </div>
  );
}
