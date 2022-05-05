import { Request } from "express";

interface ReqFileParams {
    fileName: string
}

export type RequestFile = Request<any, any, any, ReqFileParams>;
