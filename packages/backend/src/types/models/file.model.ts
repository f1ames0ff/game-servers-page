import {MIME} from "../mime.enum";

export interface FileModel {
    url: string;
    size: number;
    mime: MIME;
}

