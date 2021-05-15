import { PORT } from "./constants";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import path from "path";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    app.useStaticAssets(path.join(__dirname, '../public/static/images'), {prefix: '/images'});
    app.useStaticAssets(path.join(__dirname, '../../frontend/build'), {prefix: '/'});

    await app.listen(PORT);
}

bootstrap();