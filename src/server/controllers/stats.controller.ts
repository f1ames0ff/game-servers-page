import { Controller, Get, Query } from "@nestjs/common";
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
        return await this.trackingService.queryServer(type, port);
    }
}