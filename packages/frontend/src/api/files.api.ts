import axios from "axios";
import { getHostAddress } from "../utils/http.utils";


export type FileType = 'valheim' | 'quake-cpma' | string;

export interface FileTree {
    optional: FileList
    required: FileList
}

export interface FileList {
    [key: string]: { size: number }
}


export function loadFileList(type: FileType) {
    const url = `${ getHostAddress() }/files/list`;

    return axios.get<FileTree>(url, {
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