import {combineReducers, configureStore} from "@reduxjs/toolkit";
import generalSlice from "./reducers/app.reducer";

export const appStore = configureStore({
    reducer: combineReducers({
        general: generalSlice.reducer
    })
});

export type AppState = ReturnType<typeof appStore.getState>;
