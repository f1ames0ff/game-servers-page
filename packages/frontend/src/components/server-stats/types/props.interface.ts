import {ServerStatsPayload} from "@app/shared/types/index";

export interface Props {
    stats: ServerStatsPayload
    address: string
    gameType?: string
    image?: string
}
