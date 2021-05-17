import { Injectable } from "@nestjs/common";
import { exec } from "child_process";
import { Type } from 'gamedig';
import { ConfigService } from "./config.service";
import {
    AppGameType, AppStatsError,
    AppStatsQueryResult,
    IDTech1,
    IDTech2,
    IDTech3,
    RawData,
    ServerStatsPayload
} from "@app/shared/types";

export type GameType = AppGameType & Type;

@Injectable()
export class StatsService {
    constructor(private configService: ConfigService) {
    }

    async queryServer(type: GameType, port: number) {
        const { host } = this.configService;
        const address = `${ host }:${ port }`;
        const command = `gamedig --type ${ type } ${ address }`;

        return new Promise<ServerStatsPayload | string>((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${ error.message }`);
                    return reject(JSON.parse(stdout));
                }
                else {
                    const parsed: AppStatsQueryResult | AppStatsError = JSON.parse(stdout);

                    if (( <AppStatsError>parsed ).error) {
                        return reject(parsed);
                    }

                    const payload = this.assemblePayload(<AppStatsQueryResult>parsed, type);

                    return resolve(payload);
                }
            });
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

        const gameType = this.getGameType(raw);
        const gameMap = (<IDTech1>raw).map ?? (<IDTech2>raw).mapname ?? (<IDTech3>raw).mapname;

        return {
            name,
            map: gameMap ?? map,
            type,
            password,
            players,
            bots,
            maxPlayers,
            gameType,
        };
    }

    private getGameType(raw: RawData): string {
        const commonQuakeType = ( <IDTech2>raw )?.match_type ?? ( <IDTech3>raw )?.g_gametype;
        let q1Type: string = '';

        if (( <IDTech1>raw ).deathmatch) {
            switch (( <IDTech1>raw )?.deathmatch) {
                case '1':
                    q1Type = 'DM';
                    break;
                case '2':
                    q1Type = 'TDM';
                    break;
                case '3':
                    q1Type = 'Duel';
                    break;
                default:
                    q1Type = 'DM';
                    break;
            }
        }

        return q1Type ?? commonQuakeType;
    }
}