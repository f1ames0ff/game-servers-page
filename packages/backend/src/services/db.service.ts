import {Injectable} from "@nestjs/common";
import {MongoClient} from "mongodb";
import {HOST, PORT, PROTOCOL} from "../constants/db.const";

@Injectable()
export class DbService {
    private readonly url = `${PROTOCOL}://${HOST}:${PORT}/?maxPoolSize=20&w=majority`;
    private readonly mongoClient = new MongoClient(this.url);
    private readonly dbName = 'web';


    get client(){
        return this.mongoClient;
    }


    async onApplicationBootstrap(){
        try {
            await this.connect();

            console.log("Connected successfully to database");

            await this.initDb();
        }
        catch(error) {
            console.error(error);
        }
    }

    async connect() {
        await this.mongoClient.connect();
    }

    async initDb() {
        await this.mongoClient
            .db(this.dbName)
            .createCollection('pages');

        await this.mongoClient
            .db(this.dbName)
            .createCollection('files');
    }
}
