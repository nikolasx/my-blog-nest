import { Module } from '@nestjs/common';
import { UserModule } from './application/user/user.module';
import { DatabaseModule } from './global/database/database.module';
import { RootModule } from './root/root.module';

@Module({
  imports: [DatabaseModule, UserModule, RootModule],
})
export class AppModule {}
