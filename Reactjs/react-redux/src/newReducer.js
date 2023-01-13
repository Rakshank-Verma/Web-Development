import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    alpha:"a"
}

export const newReducer = createReducer(initialState, {
    addA : (state)=>{
        state.alpha = state.alpha.concat("a")
    },

    addB : (state)=>{
        state.alpha = state.alpha.concat("b")
    },

});
