import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    loading: false
};
 const createSlicer = createSlice({
    name: "Swapi",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.userInfo.push(action.payload);
        },
        removeUserData: (state) => {
           state.userInfo = []
        }
    }
})
export const {getUserData, removeUserData} = createSlicer.actions
export const getUserInfo = (searchTerm) => async (dispatch) => {
     dispatch(removeUserData());
    try {
        const response = await fetch(searchTerm)
        const data = await response.json()
        dispatch(getUserData(data))
    } catch (error) {
        console.log(error)
    }
}

export default createSlicer.reducer;
