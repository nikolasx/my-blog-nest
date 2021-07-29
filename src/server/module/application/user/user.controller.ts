import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Register } from './user.dto';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  public constructor(private readonly userService: UserService) {}
  @Get('/hello')
  public getHello(): string {
    return this.userService.getHello();
  }

  @Post('register')
  public register(@Body() info: Register): Observable<unknown> {
    console.log('info', info);
    return of({
      code: 0,
      message: 'success',
    });
  }
}
