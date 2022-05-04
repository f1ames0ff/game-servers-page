import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getHostAddress} from "../../utils";


const generalSlice = createSlice({
    name: 'general',

    initialState: {
        background: ''
    },

    reducers: {
        updateBackground(state, action: PayloadAction<string>) {
            state.background = `${getHostAddress()}/images/${action.payload}`;
            return state;
        }
    }
});

export type GeneralState = ReturnType<typeof generalSlice.reducer>;
export const {updateBackground} = generalSlice.actions;
export default generalSlice;
