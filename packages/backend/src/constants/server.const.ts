export const PROTOCOL = 'http';
export const HOST = 'localhost';
export const PORT: number =
    Number(process.argv.splice(2)?.[1])
    ?? 3123;
