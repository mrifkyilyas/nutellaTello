import { Controller, Post, UseInterceptors, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UseInterceptors(AnyFilesInterceptor())
  async register(
      @Body() registerUserDto:RegisterUserDto
  ){
     const reg = await this.usersService.register(registerUserDto)
     return { user: reg}
  }
}
