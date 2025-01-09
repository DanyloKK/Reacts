import {createSlice} from '@reduxjs/toolkit'
 const counters = createSlice({
    name: 'counter',
    initialState: {
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value++
        },
        decrement:(state)=>{
            state.value--
        }
    }
})
console.log(counters.actions);
export default counters