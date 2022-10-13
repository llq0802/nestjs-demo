import {
  Bind,
  Controller,
  Get,
  // Post,
  Req,
  Res,
  HttpCode,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Req() request: Request): string {
  //   console.log('request ', request);
  //   return this.appService.getHello();
  // }
  @Get()
  @Bind(Req(), Res(), Query('a'))
  getHello(request, response, query): string {
    console.log('==========getHello============');
    console.log('query ', query);
    return this.appService.getHello();
  }
}
