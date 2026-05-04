import { configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./slices/slice";
import authReducer from './slices/authSlice';
const store =configureStore({
    reducer:{
        cards:cardsReducer,
        auth:authReducer
    },
    devTools: process.env.NODE_ENV
   
});

export default store;