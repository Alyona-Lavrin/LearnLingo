import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  language: "",
    level: "",
  price: "",
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,

    reducers: {
        changeLanguage(state, { payload }) {
            state.language = payload;
        },
        changeLevel(state, { payload }) {
            state.level = payload
        },
        changePrice(stae, { payload }) {
            stae.price = payload
        }
    },
})

export const filtersReducer = filtersSlice.reducer;
export const { changeLanguage, changeLevel, changePrice } = filtersSlice.actions;