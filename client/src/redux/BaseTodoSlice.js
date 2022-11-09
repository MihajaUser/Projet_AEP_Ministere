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
        const nouveau = action.payload.nouveau;
        const ancien = action.payload.ancien.tacheAdduction;
        const aAjouter = getNouveauTache(nouveau, ancien)
        const aModifier = getTacheAModifier(nouveau, ancien)
        const aSupprimer = getTacheASupprimer(nouveau, ancien)

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

        if (aSupprimer.length > 0) {
          console.log("supprimer base")
          aSupprimer.map((element) => (
            deleteTacheAdduction(element.id)
          ))
        }
      },

      setBaseTacheAdduction: (state, action) => {
        state.tacheAdduction = (action.payload)
      },
      autreReducer: (state, action) => {

      }
    }
  }
)
function getNouveauTache(nouveau, ancien) {
  return nouveau.filter(object1 => {
    return !ancien.some(object2 => {
      return object1.id === object2.id;
    });
  });
}

function getTacheAModifier(nouveau, ancien) {
  return nouveau.filter(object1 => {
    return ancien.some(object2 => {
      return object1.id === object2.id && object1.etat !== object2.etat;
    });
  });
}

function getTacheASupprimer(nouveau, ancien) {
  return ancien.filter(object1 => {
    return !nouveau.some(object2 => {
      return object1.id === object2.id;
    });
  });

}
export const { saveChange, setBaseTacheAdduction, autreReducer } = baseTodoSlice.actions;
export default baseTodoSlice.reducer