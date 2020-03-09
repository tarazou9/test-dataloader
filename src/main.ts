import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

async function bootstrap() {
  const instance = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(instance));
  //nestApp.useGlobalGuards(new AuthGuard(event));

  nestApp.enableCors();
  await nestApp.init();
  await instance.listen(3000);
}
bootstrap();


