import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  public constructor(private readonly userService: UserService) {}
  @Get('/user')
  public getHello(): string {
    return this.userService.getHello();
  }
}
