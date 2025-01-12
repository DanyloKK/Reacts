import {createSlice} from "@reduxjs/toolkit";

const slicerList = createSlice({
    name: "list",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter(item => item !== action.payload);
        },
    }
})
export const {addTodo,deleteTodo,editTodo} = slicerList.actions;
export default slicerList.reducer;
