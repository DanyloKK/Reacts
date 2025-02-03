import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: false };

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    deleteTodo: (state) => {
      state.loading = true;
    },
    addTodo: (state) => {
      state.loading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.loading = false;
    }
  },
});

export const { addItem, addTodo, deleteItem, deleteTodo, fetchItems, fetchStart } = todosSlice.actions;
