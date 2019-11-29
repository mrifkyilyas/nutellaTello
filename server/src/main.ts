import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError, useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        // disableErrorMessages: true,
        exceptionFactory: (errors: ValidationError[]) =>
            new BadRequestException(errors),
    }),
);
useContainer(app.select(AppModule), { fallbackOnErrors: true });//for pipe diatas
  await app.listen(process.env.PORT);
}
bootstrap();
