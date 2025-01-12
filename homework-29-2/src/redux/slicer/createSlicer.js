import {createSlice} from "@reduxjs/toolkit";

const slicerList = createSlice({
    name: "list",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
            console.log(newTodo);
        },
        deleteTodo: (state,action) => {
            return state.filter(item => item.id !== action.payload);
        },
        editTodo:(state,action) =>{
             const {id, newText} = action.payload;
             const todo = state.find((item) => item.id === id)
             if(todo){
                 todo.text = newText
             }
        }
    }
})
export const {addTodo,deleteTodo,editTodo} = slicerList.actions;
export default slicerList.reducer;
