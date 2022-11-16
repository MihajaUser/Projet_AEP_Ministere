import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./StationSlice";
import temporaireTacheSliceReducer from "./TemporaireTacheSlice";
import baseTodoSliceReducer from "./BaseTodoSlice";
import canalisationReducer from "./CanalisationSlice";
import stationIdReducer from "./StationIdSlice"
export const store = configureStore({
  reducer: {
    station: stationReducer,
    temporaireTache: temporaireTacheSliceReducer,
    baseTodo: baseTodoSliceReducer,
    canalisation: canalisationReducer,
    stationId: stationIdReducer
  }
})