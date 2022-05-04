import axios from "axios";
import {AppGameType, RawData, ServerStatsPayload} from "@app/shared/types";
import {getHostAddress} from "../utils";

export function loadMonitoringStats<RD extends RawData>(type: AppGameType, port: number) {
    const url = `${getHostAddress()}/stats`;

    return axios.get<ServerStatsPayload<RD>>(url, {
        params: {type, port}
    }).then(response => response.data);
}
