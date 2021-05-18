import { Injectable } from "@nestjs/common";
import gamedig, { Type } from 'gamedig';
import { ConfigService } from "./config.service";
import { AppGameType, AppStatsQueryResult, IDTech1, IDTech2, IDTech3, ServerStatsPayload } from "@app/shared/types";

export type GameType = AppGameType & Type;

@Injectable()
export class StatsService {
    constructor(private configService: ConfigService) {
    }

    async queryServer(type: GameType, port: number) {
        const { host } = this.configService;

        return gamedig.query({
            type: 'valheim' as GameType,
            host,
            port
        }).then((data) => {
            return this.assemblePayload(data as AppStatsQueryResult, type);
        });
    }

    private assemblePayload(result: AppStatsQueryResult, type: GameType): ServerStatsPayload {
        const {
            name,
            password,
            players,
            bots,
            maxplayers: maxPlayers,
            raw,
            map
        } = result;

        const gameMap = ( <IDTech1>raw ).map ?? ( <IDTech2>raw ).mapname ?? ( <IDTech3>raw ).mapname;

        return {
            name,
            map: gameMap ?? map,
            type,
            password,
            players,
            bots,
            maxPlayers,
            raw
        };
    }
}