import {Injectable} from "@nestjs/common";
import {DbService} from "./db.service";
import {Db} from "mongodb";
import {PageModel} from "../types";
import {DB_COLLECTION} from "./types";

@Injectable()
export class CmsService {
    private readonly webDb: Db;

    constructor(private readonly dbService:DbService) {
        this.webDb = this.dbService.client.db('web');
    }

    async createPage(page: PageModel) {
        await this.webDb
            .collection(DB_COLLECTION.PAGES)
            .insertOne(page);
    }

    async createPageBulk(pages: PageModel[]) {
        await this.webDb
            .collection(DB_COLLECTION.PAGES)
            .insertMany(pages);
    }
}
