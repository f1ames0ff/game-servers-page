import {FileInfo} from "./file-info.interface";

export interface FileMap {
    [key: string]: FileMap | FileInfo
}
