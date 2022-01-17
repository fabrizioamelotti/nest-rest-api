import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsArray } from 'class-validator';
import { DataDocument } from './data.schema';

export class CreateDataDto {
  @ApiProperty({
    description: 'Example string Data',
    example: 'Hello my name is Fabrizio',
    required: true,
  })
  @IsString()
  content: string;
}

export class CreateDataResponse {
  @ApiProperty({
    description: 'Operation _id',
    example: '61e57d30c748d8f18de310b2',
  })
  @IsString()
  _id: string;
}

export class FindAllDataResponse {
  @ApiProperty({
    description: 'Find all data',
  })
  @IsArray()
  all: DataDocument[];
}

export class FindOneDataResponse {
  @ApiProperty({
    description: 'Data document',
    example: '{ content: "Hello my name is Fabrizio", locked: false }',
  })
  data: DataDocument;
}

export class UpdateDataDto {
  @ApiProperty({
    description: 'Example string Data',
    example: 'Hello my name is Fabrizio',
    required: true,
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Locked data attr',
    example: 'false',
    required: true,
  })
  @IsBoolean()
  locked: boolean;
}

export class UpdateDataResponse {
  @ApiProperty({
    description: 'Data _id',
    example: '61e57d30c748d8f18de310b2',
  })
  @IsString()
  _id: string;
}

export class DeleteDataResponse {
  @ApiProperty({
    description: 'Data _id',
    example: '61e57d30c748d8f18de310b2',
  })
  @IsString()
  _id: string;
}
