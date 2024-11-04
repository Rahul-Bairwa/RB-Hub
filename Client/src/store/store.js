import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "../store/reducers/categorySlice";

export default configureStore({
    reducer:{
        category:categoryReducer,
    },
})