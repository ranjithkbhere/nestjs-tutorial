import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShameelModule } from './shameel/shameel.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ShameelModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
