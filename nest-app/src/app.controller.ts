import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
    constructor(private readonly appService: AppService) {
        console.log(123);

    }

    @Get('hello')
    getHello(): string {
        console.log(456);
        return this.appService.getHello();
    }
}
