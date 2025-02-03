import { createSlice } from "@reduxjs/toolkit";
import API from "../constants/constants";

const initialState = { items: [], loading: false };

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
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

export const { addItem, deleteItem, fetchItems, fetchStart } = todosSlice.actions;

export const addTodo = (text) => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(API.URL_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await response.json();

    dispatch(addItem({ id: data.id, text }));
  } catch (e) {
    console.error(e);
  }
};

export const getTodos = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(API.URL_TODO);

    const data = await response.json();

    dispatch(fetchItems(data));
  } catch (e) {
    console.error(e);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const response = await fetch(`${API.URL_TODO}/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    dispatch(deleteItem(data));
  } catch (e) {
    console.error(e);
  }
};
