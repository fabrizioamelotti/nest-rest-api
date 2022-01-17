import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UseSwagger } from './swagger';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.use(helmet()); // https://www.npmjs.com/package/helmet
  app.use(compression()); // https://www.npmjs.com/package/compression
  app.use(json({ limit: '1mb' }));

  app.setGlobalPrefix('api');

  UseSwagger(app);

  await app.listen(process.env.APP_PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
