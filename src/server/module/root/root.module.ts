import { HttpModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { RedirectMiddleware } from './redirect.middleware';

@Module({
  imports: [HttpModule],
})
export class RootModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RedirectMiddleware).forRoutes('*');
  }
}
