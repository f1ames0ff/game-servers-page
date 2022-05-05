import {FileModel} from "./file.model";

export interface PageModel {
    backgroundImageUrl: string;
    title: string;
    content: string;
    subtitle?: string;
    downloads: {
        required: FileModel[]
    }
}
