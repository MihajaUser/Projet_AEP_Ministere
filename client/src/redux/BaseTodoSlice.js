import { createSlice } from "@reduxjs/toolkit";
import { addTacheAdduction, deleteTacheAdduction, updateTacheAdduction } from "../service/TacheAdductionS.js";

const baseTodoSlice = createSlice(
  {
    name: "baseTodo",
    initialState: {
      tacheAdduction: []
    },
    reducers: {
      saveChange: (state, action) => {
        console.log("saveChange ++++++++++++++++++++++++++")
        console.log(action.payload)
        state = state.filter(t => t.id !== action.payload)
      },
      setBaseTacheAdduction: (state, action) => {
        state.tacheAdduction = (action.payload)
      },
      addBaseTacheAdduction: (state, action) => {
        addTacheAdduction(action.payload);
      },
      deleteBaseTacheAdduction: (state, action) => {
        deleteTacheAdduction(action.payload);
        return state.tacheAdduction;
      },
      toggleBaseTacheAdduction: (state, action) => {
        updateTacheAdduction(action.payload);
      }

    }
  }
)
export const { saveChange, setBaseTacheAdduction, addBaseTacheAdduction, deleteBaseTacheAdduction, toggleBaseTacheAdduction } = baseTodoSlice.actions;
export default baseTodoSlice.reducer