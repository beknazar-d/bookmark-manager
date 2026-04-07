import { configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./slices/slice";
import authReducer from './slices/authSlice';
const store =configureStore({
    reducer:{
        cards:cardsReducer,
        auth:authReducer
    }
});
export default store;