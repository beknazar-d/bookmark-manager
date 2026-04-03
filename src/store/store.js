import { configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./slices/slice";
const store =configureStore({
    reducer:{
        cards:cardsReducer
    }
});
export default store;