import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        changeCount(state, action) {
            const prodId = action.payload;
            const index = state.findIndex((prod) => prod.id === prodId);

            if (index !== -1) {
                state[index].count += 1;
            }
        },

        addProduct(state, action) {

            function hasIdZero(prods, id) {
                // 배열에서 id가 0인 객체를 찾습니다.
                const prod = prods.find(prod => prod.id === id);

                // 찾은 객체가 존재하면 true를 반환, 그렇지 않으면 false를 반환합니다.
                return !!prod;
            }
            let foundId = false;
            let paramProd = action.payload;
            let id = 0;

            console.log(foundId);
            while (!foundId) {
                if (hasIdZero([...state], id)) {
                    id++
                } else {
                    foundId = true;
                }
            }


            const newProd = {
                id: id,
                name: paramProd.name,
                count: paramProd.count,
            }


            return [...state, newProd];
        }
    }
});

export let { changeCount, addProduct } = cart.actions;

export default cart;