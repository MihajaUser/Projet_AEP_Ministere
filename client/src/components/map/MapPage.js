import React, { useState } from "react";
import Map from "../map/Map";
import Sidebar from "../map/Sidebar";
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
