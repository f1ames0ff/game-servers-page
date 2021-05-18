export interface AppStatsError extends Error {
    stack: string
    message: string
}