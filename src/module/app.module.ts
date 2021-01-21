import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RootModule } from './root/root.module';

@Module({
  imports: [UserModule, RootModule],
})
export class AppModule {}
