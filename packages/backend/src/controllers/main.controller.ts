import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class MainController {
    @Get('*')
    @Redirect('/', 301)
    defaul(){}
}