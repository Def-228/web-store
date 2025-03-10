import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/productSlice"
import homeProductsReducer from "../store/homeProductsSlice"
import "../i18n"

export const store = configureStore({
    reducer:{
        products: productReducer,
        homeProducts: homeProductsReducer,
    }
})