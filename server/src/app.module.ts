import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './users/users.module';
import { UserSchema } from './users/schemas/user.schema';
import { IsUniqueConstraint } from './global/validators/IsUnique';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}?replicaSet=${process.env.MONGODB_REPLICA_SET}`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    ),
    // UsersModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ConfigModule,
   
  ],
  controllers: [AppController],
  providers: [AppService, IsUniqueConstraint],
})
export class AppModule {}
