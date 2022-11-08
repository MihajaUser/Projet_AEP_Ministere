import { createSlice } from "@reduxjs/toolkit";
import { addTacheAdduction } from "../service/TacheAdductionS.js";
const baseTodoSlice = createSlice(
  {
    name: "baseTodo",
    initialState: {
      tacheAdduction: []
    },
    reducers: {
      setBaseTacheAdduction: (state, action) => {
        state.tacheAdduction = (action.payload)
      },
      addBaseTacheAdduction: (state, action) => {
        addTacheAdduction(action.payload);
      }
    }
  }
)
export const { setBaseTacheAdduction, addBaseTacheAdduction } = baseTodoSlice.actions;
export default baseTodoSlice.reducer