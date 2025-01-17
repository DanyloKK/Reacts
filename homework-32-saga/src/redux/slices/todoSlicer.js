import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoItem: [],
    isLoading: false
}
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            state.todoItem.push(action.payload)
        }
    }
})
export const {addTodo} = todosSlice.actions
export default todosSlice