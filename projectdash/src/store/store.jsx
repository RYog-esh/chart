import { configureStore } from '@reduxjs/toolkit';
import getBarDataValueSliceReducer from '../slice/slice';

export const store = configureStore({
    reducer: {
        barData: getBarDataValueSliceReducer
    }
})