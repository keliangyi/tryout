import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules';
import { DataBaseModule } from './database/db.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nest'),
        DataBaseModule,
        UserModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor() {
        console.log('appModule');

    }
}
