import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':username')
  getHelloName(@Param('username') username: string): string {
    return this.appService.getHelloName(username);
  }
}
