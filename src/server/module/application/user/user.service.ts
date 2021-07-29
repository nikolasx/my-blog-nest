import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public getHello(): string {
    return 'hello,  nicholas';
  }
}
