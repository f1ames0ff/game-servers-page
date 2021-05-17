import { Injectable } from "@nestjs/common";
import { exec } from "child_process";
import { Type } from 'gamedig';
import { ConfigService } from "./config.service";

export type GameType = Type | 'valheim';

@Injectable()
export class StatsService {
    constructor(private configService: ConfigService) {
    }

    async queryServer(type: GameType, port: number) {
        const { host } = this.configService;
        const address = `${ host }:${ port }`;

        return new Promise<object>((resolve, reject) => {
            exec(
                `gamedig --type ${ type } ${ address }`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${ error.message }`);

                        return reject();
                    }
                    if (stderr) {
                        console.log(`stderr: ${ stderr }`);

                        return reject(JSON.parse(stderr));
                    }

                    const parsed = JSON.parse(stdout);

                    return resolve(parsed);
                });
        });
    }
}