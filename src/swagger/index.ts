import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const UseSwagger = (app: INestApplication) => {
  if (process.env.APP_NODE_ENV?.toLowerCase() === 'prod') {
    return;
  }

  const config = new DocumentBuilder()
    .setTitle('Nest REST API Example')
    .setDescription('All the APIs that we are using are here :)')
    .build();

  const options: SwaggerCustomOptions = {
    customSiteTitle: 'Data API',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options);
};
