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
            state.isLoading = false;
        },
        addItem: (state) => {
            state.isLoading = true;
        },
        deleteTodo: (state, action) => {
            state.todoItem = state.todoItem.filter((item) => item.id !== action.payload.id)
            state.isLoading = false;
        },
        deleteItem: (state) => {
            state.isLoading = true;
        },
        fetchItems: (state) => {
            state.isLoading = true;
        },
        fetchTodo: (state, action) => {
            state.todoItem = action.payload
            state.isLoading = false;
        },
        updateItems: (state) => {
            state.isLoading = true;
        },
        updateTodo: (state, action) => {
            state.isLoading = false;
            state.todoItem = state.todoItem.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, task: action.payload.task };
                }
                return item;
            });
        },
        toggleCompleted: (state) => {
            state.isLoading = true;
        },
        toggleCompletedTask: (state, action) => {
            state.isLoading = false;
            state.todoItem = state.todoItem.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,completed:action.payload.completed};
                }
                return item;
            })
        }
    }
})
export const {
    addTodo,
    deleteTodo,
    deleteItem,
    addItem,
    fetchItems,
    fetchTodo,
    updateTodo,
    updateItems,
    toggleCompleted,
    toggleCompletedTask,
} = todosSlice.actions
export default todosSlice