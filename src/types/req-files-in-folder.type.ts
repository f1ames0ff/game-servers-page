import { Request } from "express";

interface Params {
    type: string
}

export type RequestFilesInFolder = Request<Params>;
