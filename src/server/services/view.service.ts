import { Injectable, OnModuleInit } from "@nestjs/common";
import next, { NextServer } from "next/dist/server/next";

@Injectable()
export class ViewService implements OnModuleInit {
    readonly server: NextServer = next({
        dev: true,
        dir: './src/client'
    });

    async onModuleInit(): Promise<void> {
        try {
            await this.server.prepare();
        } catch (error) {
            console.log(error)
        }
    }
}