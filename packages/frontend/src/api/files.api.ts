import axios from "axios";
import {getHostAddress} from "../utils";
import {AppFileTree, AppFileType} from "./types";


export function loadFileList(type: AppFileType) {
    const url = `${getHostAddress()}/files/list`;

    return axios.get<AppFileTree>(url, {
        params: {type}
    }).then(response => response.data);
}

export function downloadFile(fileUri: string) {
    const url = `${getHostAddress()}/files/download`;

    return axios.get<ArrayBuffer>(url, {
        params: {fileName: fileUri},
        responseType: 'blob'
    }).then(response => {
        return response.data;
    });
}
