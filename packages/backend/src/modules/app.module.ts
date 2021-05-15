import { Module } from '@nestjs/common';
import { FilesController } from "../controllers/files.controller";
import { FilesService } from "../services/files.service";
import { MainController } from "../controllers/main.controller";

@Module({
    controllers: [
        MainController,
        FilesController
    ],
    providers: [FilesService],
})
export class AppModule {}