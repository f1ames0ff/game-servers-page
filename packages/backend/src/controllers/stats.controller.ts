import { Controller, Get, HttpException, HttpStatus, Param, Query } from "@nestjs/common";
import { GameType, StatsService } from "../services/stats.service";

@Controller('stats')
export class StatsController {
    constructor(private trackingService: StatsService) {
    }

    @Get()
    async getStats(
        @Query('type') type: GameType,
        @Query('port') port: number
    ) {
        try {
            return await this.trackingService.queryServer(type, port);
        } catch (error) {
            if (error.error) {
                throw new HttpException('No server response', HttpStatus.NOT_FOUND);
            }
        }
    }
}