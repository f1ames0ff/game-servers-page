import { AppStatsError } from "@app/shared/types";

export function isAppStatsError(error: any): error is AppStatsError {
    return Boolean(
        error instanceof Error &&
        error.message &&
        error.stack
    );
}
