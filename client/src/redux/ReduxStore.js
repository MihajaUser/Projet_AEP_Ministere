import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./StationSlice";
import todoSliceReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer,
    todo: todoSliceReducer
  }
})