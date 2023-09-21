import { Injectable, NotFoundException } from "@nestjs/common";
 import { Cron, CronExpression } from "@nestjs/schedule";
 import { ExternalService } from "./external.service";
 @Injectable()
 export class CronbService{

    constructor(private readonly external: ExternalService){

   }



      @Cron( '*/30 * * * * * ' )
     processo() {
         this.external.request()
      }


 }
// import { Injectable } from '@nestjs/common';
// import { Cron, CronExpression } from '@nestjs/schedule';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { ExternalService } from './external.service';
// import { SomeEntity } from './some.entity'

// @Injectable()
// export class CronbService {
//   constructor(
//     private readonly external: ExternalService,
//     @InjectRepository(SomeEntity)
//     private readonly someEntityRepository: Repository<SomeEntity>,
//   ) {}

//   @Cron('*/30 * * * * *')
//   async processo() {
//     // Perform a database request
//     const result = await this.someEntityRepository.find();
//     console.log(result);

//     // Call the external service
//     this.external.request();
//   }
// }