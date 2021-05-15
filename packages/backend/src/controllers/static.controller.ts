import { Controller, Get, HttpCode, Req, Res } from "@nestjs/common";
import path from "path";
import { CLIENT_BUILD } from "../constants";
import { Request, Response } from "express";

@Controller()
export class StaticController {
    @Get()
    @HttpCode(200)
    webApp(@Req() request: Request, @Res() response: Response){
        return path.resolve(__dirname, CLIENT_BUILD, 'index.html');
    }
}