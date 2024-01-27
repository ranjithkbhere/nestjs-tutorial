import { Controller, Get } from '@nestjs/common';

@Controller('shameel')
export class ShameelController {
  @Get()
  getShameel() {
    return 'Shameel';
  }
}
