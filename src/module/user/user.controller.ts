import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  public constructor(private readonly userService: UserService) {}
  @Get('/hello')
  public getHello(): string {
    return this.userService.getHello();
  }
}
