import { Controller, Get, Header, HttpCode, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { FileMap, FilesService } from "../services/files.service";

@Controller('files')
export class FilesController {
    constructor(private filesService: FilesService) {
    }

    @Get('list')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async list(@Query('type') type: string): Promise<FileMap> {
        return await this.filesService.fileList(type);
    }

    @Get('download')
    @HttpCode(200)
    @Header('Content-Type', 'application/octet-stream')
    file(@Query('fileName') fileName: string, @Res() response: Response) {
        this.filesService.download(fileName, response);
    }
}