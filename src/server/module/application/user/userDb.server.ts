import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserDbService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.photoRepository.find();
  }
}
