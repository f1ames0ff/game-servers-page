import { QueryResult } from "gamedig";
import { RawData } from "./raw-data.type";

export interface AppStatsQueryResult extends QueryResult {
    raw: RawData
}