import { Module } from '@nestjs/common';
import { FilesController } from "../controllers/files.controller";
import { FilesService } from "../services/files.service";
import { StatsController } from "../controllers/stats.controller";
import { StatsService } from "../services/stats.service";

@Module({
    controllers: [
        FilesController,
        StatsController
    ],
    providers: [
        FilesService,
        StatsService
    ],
})
export class AppModule {
}