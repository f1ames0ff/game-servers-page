import { appStore } from "../store";

export function selectBgImage() {
    return appStore.getState().general.background;
}