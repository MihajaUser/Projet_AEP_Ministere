import { createSlice } from "@reduxjs/toolkit";
const temporaireTacheSlice = createSlice(
  {
    name: "temporaireTache",
    initialState: [
    ],
    reducers: {
      setTemporaryTask: (state, action) => {
        state = (action.payload)
        return state
      },
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          id_utilisateur: 0,
          nom: action.payload,
          etat: false
        }
        state.push(newTask);
      },
      toggleTask: (state, action) => {
        const task = state.find(t => t.id === action.payload);
        task.etat = !task.etat;
      },
      deleteTask: (state, action) => {
        state = state.filter(t => t.id !== action.payload)
        return state;
      }
    }
  }
)
export const { addTask, toggleTask, deleteTask, setTemporaryTask } = temporaireTacheSlice.actions;
export default temporaireTacheSlice.reducer 