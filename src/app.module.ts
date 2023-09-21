
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalService } from './external.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { CronbService } from './cronb.service';

import { SomeEntity } from './some.entity';


@Module({
  imports: [
    HttpModule.register({
     timeout: 15000
    }),
    ScheduleModule.forRoot(),
    
   

  ],
  controllers: [AppController],
  providers: [AppService, ExternalService, CronbService, SomeEntity],
})
export class AppModule {}