import { createSlice } from "@reduxjs/toolkit";
const canalisationSlice = createSlice(
  {
    name: "canalisation",
    initialState: {
      canalisations: []
    },
    reducers: {
      setCanalisation: (state, action) => {
        state.canalisations = (action.payload)
      },
      getCanalisationById: (state, action) => {
      }
    }
  }
)
export const { setCanalisation, getCanalisationById } = canalisationSlice.actions;
export default canalisationSlice.reducer