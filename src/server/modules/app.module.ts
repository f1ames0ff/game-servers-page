import next from 'next';
const env = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev: env })
import { Module } from '@nestjs/common';
import { FilesController } from "../controllers/files.controller";
import { FilesService } from "../services/files.service";
import { StatsController } from "../controllers/stats.controller";
import { StatsService } from "../services/stats.service";
import { ConfigService } from "../services/config.service";
import { AppExceptionFilter } from '../filters/exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { ViewController } from "../controllers/view.controller";
import { ViewService } from "../services/view.service";

@Module({
    controllers: [
        ViewController,
        FilesController,
        StatsController,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AppExceptionFilter,
        },
        FilesService,
        StatsService,
        ConfigService,
        ViewService
    ],
})
export class AppModule {
    constructor(private configService: ConfigService) {
        configService.loadConfig();


    }
}