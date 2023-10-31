import { configureStore } from "@reduxjs/toolkit";
import TyphoSlice from "./TyphoSlice";

const store =configureStore({
    reducer:{
        Typho:TyphoSlice
    }
})

export default store