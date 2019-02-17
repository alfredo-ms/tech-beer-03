import { Get, Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserList(): Array<User> {
    return this.userService.getUserList();
  }

  @Get(':login:password')
  getUser(@Param('login') login: string, @Param('password') password: string): Array<User> {
    
    return this.userService.getUserList().filter((user: User) => {
      return user.login == login && user.password == password;
    });

  }
}
