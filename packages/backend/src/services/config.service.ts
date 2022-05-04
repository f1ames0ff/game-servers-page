import {Injectable} from "@nestjs/common";
import path from "path";
import {Config} from "./types";

@Injectable()
export class ConfigService implements Config {
    host = 'localhost';
    port = 3123;

    private configPath = path.join(__dirname, '../../public/server-config.json');

    loadConfig() {
        try {
            const file = require(this.configPath);

            ( {
                host: this.host,
                port: this.port
            } = file );
        } catch (error) {
            console.warn(`Unable to load config file from: ${ this.configPath }`);
        }
    }
}
