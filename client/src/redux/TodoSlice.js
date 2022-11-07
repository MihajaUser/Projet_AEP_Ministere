import { createSlice } from "@reduxjs/toolkit";
const TodoSlice = createSlice(
  {
    name: "Todo",
    initialState: {
      Todos: []
    },
    reducers: {
      setTodo: (state, action) => {
        state.Todos = (action.payload)
      },
      getTodoById: (state, action) => {
      }
    }
  }
)
export const { setTodo, getTodoById } = TodoSlice.actions;
export default TodoSlice.reducer