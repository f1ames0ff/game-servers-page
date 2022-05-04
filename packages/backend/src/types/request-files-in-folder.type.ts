import { Request } from "express";

interface ReqFilesInFolderParams {
    type: string
}

export type RequestFilesInFolder = Request<ReqFilesInFolderParams>;
