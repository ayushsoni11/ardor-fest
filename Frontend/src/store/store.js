import {configureStore} from "@reduxjs/toolkit";
import userReducer  from './slices/userSlice.js'
import eventReducer from './slices/eventSlice.js';

export const store = configureStore({
    reducer : {
        user : userReducer,
        event : eventReducer,
    },
});