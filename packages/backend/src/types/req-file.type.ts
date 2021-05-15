import { Request } from "express";

interface Params {
    fileName: string
}

export type RequestFile = Request<any, any, any, Params>;
