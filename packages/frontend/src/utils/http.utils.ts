import {SERVER_PORT, SERVER_URL} from "../constants";

export function getHostAddress() {
    return `${SERVER_URL}:${SERVER_PORT}`;
}
