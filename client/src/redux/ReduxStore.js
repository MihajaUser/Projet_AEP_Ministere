import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./StationSlice";
import todoSliceReducer from "./TodoSlice";
import baseTodoSliceReducer from "./BaseTodoSlice";
import canalisationReducer from "./CanalisationSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer,
    todo: todoSliceReducer,
    baseTodo: baseTodoSliceReducer,
    canalisation: canalisationReducer
  }
})