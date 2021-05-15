import axios from "axios";
import { SERVER_URL } from "../constants";


export type FileType = 'valheim' | 'quake-cpma' | string;

export interface FileTree {
    optional: FileList
    required: FileList
}

export interface FileList {
    [key: string]: { size: number }
}


export function loadFileList(type: FileType) {
    const url = `${ SERVER_URL }/files/list`;

    return axios.get<FileTree>(url, {
        params: { type }
    }).then(response => response.data);
}

export function downloadFile(fileUri: string) {
    const url = `${ SERVER_URL }/files/download`;

    return axios.get<ArrayBuffer>(url, {
        params: { fileName: fileUri },
        responseType: 'blob'
    }).then(response => {
        return response.data;
    });
}