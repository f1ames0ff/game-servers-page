import axios from "axios";
import { getHostAddress } from "../utils/http.utils";
import {AppGameType, RawData, ServerStatsPayload} from "../../types";

export function loadMonitoringStats<RD extends RawData>(type: AppGameType, port: number) {
    const url = `${ getHostAddress() }/stats`;

    return axios.get<ServerStatsPayload<RD>>(url, {
        params: { type, port }
    }).then(response => response.data);
}