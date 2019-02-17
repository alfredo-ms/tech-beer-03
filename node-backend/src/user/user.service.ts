import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  
  getUserList(): Array<User> {
    return [
      {
        id: 1,
        name: 'Test User',
        login: 'test',
        password: '123'
      }
    ];
  }

}
