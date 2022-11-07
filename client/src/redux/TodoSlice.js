import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice(
  {
    name: "todo",
    initialState: [
      { id: 1, text: "faire les course", done: false },
      { id: 2, text: "menage", done: false }],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          done: false,
          text: action.payload
        }
        state.push(newTask);
      },
      toggleTask: (state, action) => {
        const task = state.find(t => t.id === action.payload);
        task.done = !task.done;
      },
      deleteTask: (state, action) => {
        state = state.filter(t => t.id !== action.payload)
        return state;
      }
    }
  }
)
export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer