import axios from "axios";
import { getHostAddress } from "../utils/http.utils";
import { AppGameType, ServerStatsPayload } from "@app/shared/types";

export function loadMonitoringStats(type: AppGameType, port: number) {
    const url = `${ getHostAddress() }/stats`;

    return axios.get<ServerStatsPayload>(url, {
        params: { type, port }
    }).then(response => response.data);
}