import { createSlice } from "@reduxjs/toolkit";
const temporaireTacheSlice = createSlice(
  {
    name: "temporaireTache",
    initialState: [
      { id: 1, nom: "faire les course", etat: false },
      { id: 2, nom: "menage", etat: false }],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          etat: false,
          nom: action.payload
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
export const { addTask, toggleTask, deleteTask } = temporaireTacheSlice.actions;
export default temporaireTacheSlice.reducer