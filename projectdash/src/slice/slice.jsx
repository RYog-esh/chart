import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const getBarDataValueSlice = createSlice({
    name: 'BarData',
    initialState: initialState,
    reducers:{
        getBarData(state, action){
            state.push(action.payload)
        }
    }
})

export const { getBarData } = getBarDataValueSlice.actions
export default getBarDataValueSlice.reducer