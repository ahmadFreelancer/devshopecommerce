import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 1},
    reducers: {
        increment(state, action) {
            // console.log(state.counter++)
            state.counter++
        },
        decrement(state, action) {
            console.log("DC")
        },
    },
});

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer,
})

export default store;