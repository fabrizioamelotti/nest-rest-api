import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { json } from 'express';
import { UseSwagger } from './swagger';

(async function () {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  // Enable validation using Nestjs pipes and class directives
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.use(helmet());
  app.use(compression());
  app.enableCors();
  app.use(json({ limit: '1mb' }));

  UseSwagger(app);

  await app.listen(process.env.APP_PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
})();
