import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [
    UserController, 
    ProductController
  ],
  providers: [
    UserService,
    ProductService
  ],
})
export class AppModule {}
