import { Request, Response } from "express";
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { isAppStatsError } from "../type-guards/is-app-stats-error.type-guard";
import { HttpArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";

interface RespondOptions {
    statusCode: number;
    message: string;
}

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        if (isAppStatsError(exception)) {
            console.error(`error: ${ exception.message }`);

            this.respond(ctx, {
                statusCode: HttpStatus.NOT_FOUND,
                message: exception.message
            });
        } else {
            this.respond(ctx, {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal server error.'
            });
        }

    }

    private respond(ctx: HttpArgumentsHost, { statusCode, message }: RespondOptions) {
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        response
            .status(statusCode)
            .json({
                statusCode,
                message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}