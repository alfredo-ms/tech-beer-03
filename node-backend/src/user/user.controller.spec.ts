import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
  });

  describe('getUserList', () => {
    it('should return "Hello World!"', () => {
      const userController = app.get<UserController>(UserController);
      expect(userController.getUserList()).toBe('Hello World!');
    });
  });
});
