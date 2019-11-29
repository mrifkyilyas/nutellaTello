import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterUserDto } from './users/dto/register-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
