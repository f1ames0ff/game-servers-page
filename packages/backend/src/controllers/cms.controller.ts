import {Body, Controller, Get, Header, HttpCode, Post, Query, Res} from "@nestjs/common";
import {Response} from "express";
import {PageModel} from "../types";
import {CmsService} from "../services/cms.service";

@Controller('cms')
export class CmsController {
    constructor(private cmsService: CmsService) {
    }

    @Get('pages')
    @HttpCode(200)
    @Header('Content-Type', 'application/octet-stream')
    async listPages(
        @Query('fileName') fileName: string,
        @Res() response: Response
    ): Promise<PageModel>{
        throw new Error('not implemented');
    }

    @Post('pages')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async createPage(
        @Body() page: PageModel,
        @Res() response: Response
    ): Promise<Response> {
        // TODO
        await this.cmsService.createPage(page);
        return response;
    }
}
