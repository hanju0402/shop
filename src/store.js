import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: {name : 'kim', age : 20},

    reducers : {
        changeName(state) {
            state.name = 'park'
        }
    }
});

export let {changeName} = user.actions;

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers : {
        changeCount(state, action) {
            const index = action.payload;
            state[index].count += 1;
        }
    }
});

export let {changeCount} = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
