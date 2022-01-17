import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';
import {
  CreateDataDto,
  CreateDataResponse,
  FindAllDataResponse,
  FindOneDataResponse,
  UpdateDataDto,
  UpdateDataResponse,
  DeleteDataResponse,
} from './data.dto';

@ApiTags('Data')
@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @ApiOperation({
    description: 'Create a new Data Object',
    summary: 'Create a new Data',
  })
  @ApiBody({ type: CreateDataDto })
  @ApiOkResponse({ type: CreateDataResponse })
  @Post()
  async create(
    @Body() { content }: CreateDataDto,
  ): Promise<CreateDataResponse> {
    const data = await this.dataService.create({
      content,
    });

    return {
      _id: data._id,
    };
  }

  @ApiOperation({
    description: 'Find all stored items',
    summary: 'Find all Data',
  })
  @ApiOkResponse({ type: FindAllDataResponse })
  @Get()
  async findAll(): Promise<FindAllDataResponse> {
    const all = await this.dataService.findAll();

    return {
      all,
    };
  }

  @ApiOperation({
    description: 'Get some specific data by id',
    summary: 'Get Data by id',
  })
  @ApiOkResponse({ type: FindOneDataResponse })
  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<FindOneDataResponse> {
    const data = await this.dataService.findOne(_id);

    return {
      data,
    };
  }

  @ApiOperation({
    description: 'Update all Data attributes',
    summary: 'Update Data attrs',
  })
  @ApiOkResponse({ type: UpdateDataResponse })
  @Put(':id')
  async update(
    @Param('id') _id: string,
    @Body() { content, locked }: UpdateDataDto,
  ): Promise<UpdateDataResponse> {
    const data = await this.dataService.findOne(_id);

    if (data.locked) {
      throw new ForbiddenException('Data is locked');
    }

    await this.dataService.update({
      _id,
      content,
      locked,
    });

    return {
      _id,
    };
  }

  @ApiOperation({
    description: 'Delete some specific data by id',
    summary: 'Delete Data by id',
  })
  @ApiOkResponse({ type: DeleteDataResponse })
  @Delete(':id')
  async delete(@Param('id') _id: string): Promise<DeleteDataResponse> {
    await this.dataService.delete(_id);

    return {
      _id,
    };
  }
}
