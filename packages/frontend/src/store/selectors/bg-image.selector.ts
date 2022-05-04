import {AppState} from "../store";

export const selectBgImage = (state: AppState) => state.general.background;
