import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, RequestDocument } from './request.schema';
import { ICreateRequest } from './requeset.interface';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request.name)
    private requestModel: Model<RequestDocument>,
  ) {}

  async create(requestData: ICreateRequest): Promise<RequestDocument> {
    const requestCreated = new this.requestModel(requestData);

    return requestCreated.save();
  }
}
