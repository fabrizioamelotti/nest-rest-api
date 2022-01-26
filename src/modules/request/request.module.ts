import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestService } from './request.service';
import { Request, RequestSchema } from './request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Request.name, schema: RequestSchema }]),
  ],
  controllers: [],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}
