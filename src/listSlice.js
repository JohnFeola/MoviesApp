import {createSlice} from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers:{
        addToList: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const {addToList} = listSlice.actions;

export default listSlice.reducer;