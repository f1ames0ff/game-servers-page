import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { FilesController } from "../controllers/files.controller";
import { StaticController } from "../controllers/static.controller";
import { FilesService } from "../services/files.service";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../..', 'public/static'),
        }),
    ],
    controllers: [
        StaticController,
        FilesController
    ],
    providers: [FilesService],
})
export class AppModule {}