import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    key: sessionStorage.getItem("key") || false
}

const keySlice = createSlice({
    name: "key",
    initialState,
    reducers: {
        setKey: (state, action) => {
            if (action.payload) {
                sessionStorage.setItem('key', action.payload);
            } else {
                sessionStorage.removeItem('key');
            }
            state.key = action.payload;
        }
    }
})

export const { setKey } = keySlice.actions;
export default keySlice.reducer