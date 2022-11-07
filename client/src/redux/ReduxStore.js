import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./StationSlice";
import todoSliceReducer from "./TodoSlice";
import canalisationReducer from "./CanalisationSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer,
    todo: todoSliceReducer,
    canalisation: canalisationReducer
  }
})