import { Injectable } from "@nestjs/common";
import { exec } from "child_process";
import { Type } from 'gamedig';

export type GameType = Type | 'valheim';

@Injectable()
export class StatsService {
    private ip = '89.177.116.121';

    async queryServer(type: GameType, port: number) {
        const host = `${ this.ip }:${ port }`;

        return new Promise<object>((resolve, reject) => {
            exec(
                `gamedig --type ${ type } ${ host }`,
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