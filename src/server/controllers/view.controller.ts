import {Controller, Get} from "@nestjs/common";
import {ViewService} from "../services/view.service";
import next from 'next';
const env = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev: env })

@Controller('/')
export class ViewController {
    constructor(private viewService: ViewService) {}

    @Get('*')
    async getIndex() {
         await nextApp.prepare();


    }
}