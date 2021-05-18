import { Player } from "gamedig";
import { AppGameType } from "./game-type.type";
import { RawData } from "./raw-data.type";

export interface ServerStatsPayload<RD extends RawData = RawData> {
    name: string;
    type: AppGameType;
    map: string;
    password: boolean;
    maxPlayers: number;
    players: Player[];
    bots: Player[];
    raw: RD;
}