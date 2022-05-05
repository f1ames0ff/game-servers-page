import { Module } from '@nestjs/common';
import { FilesController } from "./controllers/files.controller";
import { FilesService } from "./services/files.service";
import { StatsController } from "./controllers/stats.controller";
import { StatsService } from "./services/stats.service";
import { ConfigService } from "./services/config.service";
import { AppExceptionFilter } from './filters/exception.filter';
import { APP_FILTER } from '@nestjs/core';
import {DbService} from "./services/db.service";

@Module({
    controllers: [
        FilesController,
        StatsController
    ],
    providers: [
        FilesService,
        StatsService,
        ConfigService,
        DbService,
        {
            provide: APP_FILTER,
            useClass: AppExceptionFilter,
        }
    ],
})
export class AppModule {
    constructor(private configService: ConfigService) {
        configService.loadConfig();
    }
}
