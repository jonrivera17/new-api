import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ExternalService } from './external.service';
import { json } from './articulos.json';
import {v4 as uuid} from 'uuid';
@Controller()
export class AppController {
  constructor(private readonly external: ExternalService) {}

  @Get()
  getNewApi() {
    this.external.request()
  }

  @Get('/prueba')
  getArticulo( @Param ('id') id: string){
    return json.articles[1]
  }
  
}