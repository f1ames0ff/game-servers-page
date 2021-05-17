import { Player } from "gamedig";
import { AppGameType } from "./game-type.type";

export interface ServerStatsPayload {
    name: string;
    type: AppGameType;
    map: string;
    password: boolean;
    maxPlayers: number;
    gameType: string;
    players: Player[];
    bots: Player[];
}