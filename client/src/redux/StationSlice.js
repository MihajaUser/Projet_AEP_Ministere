import { createSlice } from "@reduxjs/toolkit";
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
export default stationSlice.reducer