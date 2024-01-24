import { configureStore } from "@reduxjs/toolkit";
import keySlice from "./key";

const store = configureStore({
    reducer: {
        key: keySlice,
    }
})

export default store;