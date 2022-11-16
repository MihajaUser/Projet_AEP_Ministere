import { createSlice } from "@reduxjs/toolkit";
const stationIdSlice = createSlice(
  {
    name: "station",
    initialState: {
      stations: []
    },
    reducers: {
      setStationById: (state, action) => {
        state.stations = (action.payload)
      },
    }
  }
)
export const { setStationById } = stationIdSlice.actions;
export default stationIdSlice.reducer