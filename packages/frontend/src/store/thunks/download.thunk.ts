import {createAsyncThunk} from "@reduxjs/toolkit";
import {downloadFile} from "../../api/files.api";
import {blobToFileDownload} from "../../utils";

export type ModType = 'required' | 'optional';

export interface DownloadFileThunkParams {
    type: string
    modType: ModType
    name: string
}

export const downloadFileThunk = createAsyncThunk(
    'files/download',
    async ({type, modType, name}: DownloadFileThunkParams, thunkAPI) => {
        const uri = `${type}/${modType}/${name}`;
        const buffer = await downloadFile(uri);

        blobToFileDownload(new Blob([buffer]), name);
    }
);
