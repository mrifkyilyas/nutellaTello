import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async register(registerUserDto:RegisterUserDto):Promise<User>{
      let user = await new this.user(registerUserDto);
      user.save()
      return user
  }
}
