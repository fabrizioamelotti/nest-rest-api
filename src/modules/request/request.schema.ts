import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose } from 'mongoose';

export type RequestDocument = Request & Document;

@Schema({
  versionKey: false,
  timestamps: { updatedAt: false },
})
export class Request {
  @Prop({ type: SchemaMongoose.Types.Mixed, required: true })
  request: SchemaMongoose.Types.Mixed;

  @Prop({ type: SchemaMongoose.Types.Mixed, required: true })
  response: SchemaMongoose.Types.Mixed;

  @Prop({ type: Number, required: true })
  executionTime: number;
}

export const RequestSchema = SchemaFactory.createForClass(Request);
