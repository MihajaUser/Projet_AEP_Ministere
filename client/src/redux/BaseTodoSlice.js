import { createSlice } from "@reduxjs/toolkit";
import { addTacheAdduction, deleteTacheAdduction, updateTacheAdduction } from "../service/TacheAdductionS.js";

function getDifference(array1, array2) {
  return array1.filter(object1 => {
    return !array2.some(object2 => {
      return object1.id === object2.id;
    });
  });
}
const baseTodoSlice = createSlice(
  {
    name: "baseTodo",
    initialState: {
      tacheAdduction: []
    },
    reducers: {
      saveChange: (state, action) => {
        const nouveau = action.payload.nouveau;
        const ancien = action.payload.ancien.tacheAdduction;
        const difference = getDifference(nouveau, ancien)
        difference.map((element) => (
          addTacheAdduction(element)
        ))
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