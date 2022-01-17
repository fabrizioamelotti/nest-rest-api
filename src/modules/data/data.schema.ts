import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataDocument = Data & Document;

@Schema({
  timestamps: true,
})
export class Data {
  @Prop({ type: String, required: true, trim: true })
  content: string;

  @Prop({ type: Boolean, default: false })
  locked: boolean;
}

export const DataSchema = SchemaFactory.createForClass(Data);
