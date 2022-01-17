import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App Controller')
@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @ApiOperation({
    description: 'Everything is working fine?',
    summary: 'Pint the app',
  })
  @Get('ping')
  async ping(): Promise<string> {
    return 'pong';
  }

  @ApiOperation({
    description: 'App Version',
    summary: 'Check the app version here',
  })
  @Get('version')
  async version(): Promise<string> {
    return this.configService.get<string>('version');
  }
}
