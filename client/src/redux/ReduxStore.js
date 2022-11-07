import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./StationSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer
  }
})