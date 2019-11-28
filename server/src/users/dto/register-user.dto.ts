import { IsDefined, IsNotEmpty, IsAlpha, IsOptional, IsEmail, IsString, } from 'class-validator'
import { IsUnique } from '../../global/validators/IsUnique'

export class RegisterUserDto{
    @IsDefined()
    @IsNotEmpty()
    @IsAlpha()
    readonly firstName:string;
    @IsOptional()
    readonly lastName:string;
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    @IsUnique('email', 'user')
    readonly email: string;
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsUnique('userName', 'user')
    readonly userName: string;
    @IsDefined()
    @IsNotEmpty()
    readonly password:string;
}