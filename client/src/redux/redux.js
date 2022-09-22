import { configureStore, createSlice } from "@reduxjs/toolkit";
import Axios, * as others from 'axios';
const stationSlice = createSlice(
  {
    name: "station",
    initialState: {
      stations: []
    },
    reducers: {
      setStation: (state, action) => {
        state.stations = (action.payload)
      },
      getStationById: (state, action) => {
      }
    }
  }
)
export const { setStation, getStationById } = stationSlice.actions;
export const store = configureStore({
  reducer: {
    station: stationSlice.reducer
  }
})
