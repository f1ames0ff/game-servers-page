import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SERVER_URL } from "../constants";


const generalSlice = createSlice({
    name: 'general',

    initialState: {
        background: ''
    },

    reducers: {
        updateBackground(state, action: PayloadAction<string>) {
            state.background = `${ SERVER_URL }/images/${ action.payload }`;
            return state;
        }
    }
});

export type GeneralState = ReturnType<typeof generalSlice.reducer>;
export const { updateBackground } = generalSlice.actions;
export default generalSlice;
