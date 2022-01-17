import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './data.schema';
import { ICreateData, IUpdateData } from './data.interface';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Data.name)
    private dataModel: Model<DataDocument>,
  ) {}

  async create({ content }: ICreateData): Promise<DataDocument> {
    const createdData = new this.dataModel({
      content,
    });

    return createdData.save();
  }

  async findAll(): Promise<DataDocument[]> {
    return this.dataModel.find({});
  }

  async findOne(_id: string): Promise<DataDocument> {
    return this.dataModel.findOne({ _id });
  }

  async update({ _id, content, locked }: IUpdateData): Promise<any> {
    return this.dataModel.updateOne(
      { _id },
      {
        $set: {
          content,
          locked,
        },
        $inc: { __v: 1 },
      },
    );
  }

  async delete(_id: string): Promise<any> {
    return this.dataModel.remove({ _id });
  }
}
