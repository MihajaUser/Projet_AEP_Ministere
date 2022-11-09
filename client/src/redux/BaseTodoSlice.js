import { createSlice } from "@reduxjs/toolkit";
import { addTacheAdduction, deleteTacheAdduction, updateTacheAdduction } from "../service/TacheAdductionS.js";

function getNouveauTache(array1, array2) {
  return array1.filter(object1 => {
    return !array2.some(object2 => {
      return object1.id === object2.id;
    });
  });
}

function getTacheAModifier(nouveau, ancien) {
  const result = []
  for (var i = 0; i < ancien.length; i++) {
    if (ancien[i].etat != nouveau[i].etat) {
      result.push(ancien[i])
    }
  }
  return result;
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
        const aAjouter = getNouveauTache(nouveau, ancien)
        const aModifier = getTacheAModifier(nouveau, ancien)
        if (aModifier.length > 0) {
          console.log("modifier base")
          aModifier.map((element) => (
            updateTacheAdduction(element)
          ))
        }
        if (aAjouter.length > 0) {
          console.log("ajouter base")
          aAjouter.map((element) => (
            addTacheAdduction(element)
          ))
        }
      },
      setBaseTacheAdduction: (state, action) => {
        state.tacheAdduction = (action.payload)
      }
    }
  }
)
export const { saveChange, setBaseTacheAdduction, addBaseTacheAdduction, deleteBaseTacheAdduction, toggleBaseTacheAdduction } = baseTodoSlice.actions;
export default baseTodoSlice.reducer