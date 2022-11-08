import { createSlice } from "@reduxjs/toolkit";
const baseTodoSlice = createSlice(
  {
    name: "baseTodo",
    initialState: [
    ],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          done: false,
          text: action.payload
        }
        state.push(newTask);
      },

      deleteTask: (state, action) => {
        state = state.filter(t => t.id !== action.payload)
        return state;
      }
    }
  }
)
export const { addTask, deleteTask } = baseTodoSlice.actions;
export default baseTodoSlice.reducer