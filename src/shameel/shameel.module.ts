import { Module } from '@nestjs/common';
import { ShameelController } from './shameel.controller';
import { ShameelService } from './shameel.service';

@Module({
  controllers: [ShameelController],
  providers: [ShameelService]
})
export class ShameelModule {}
