import axios from "axios";
import { getHostAddress } from "../utils/http.utils";


export type AppFileType = 'valheim' | 'quake-cpma' | string;

export interface AppFileTree {
    optional: AppFileList
    required: AppFileList
}

export interface AppFileList {
    [key: string]: { size: number }
}


export function loadFileList(type: AppFileType) {
    const url = `${ getHostAddress() }/files/list`;

    return axios.get<AppFileTree>(url, {
        params: { type }
    }).then(response => response.data);
}

export function downloadFile(fileUri: string) {
    const url = `${ getHostAddress() }/files/download`;

    return axios.get<ArrayBuffer>(url, {
        params: { fileName: fileUri },
        responseType: 'blob'
    }).then(response => {
        return response.data;
    });
}