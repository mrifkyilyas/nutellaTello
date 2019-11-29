import { Document } from 'mongoose'

export interface User extends Document{
    readonly firstName:string;
    readonly lastName:string;
    readonly email:string;
    readonly userName:string;
    readonly password:string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
} 