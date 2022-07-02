import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:uf')
  async city(@Request() req: any) {
    return await this.appService.getPrevisao(req?.params?.uf);
  }
}