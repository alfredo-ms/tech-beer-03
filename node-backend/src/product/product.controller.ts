import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProductList(): Array<Product> {
    return this.productService.getProductList();
  }

  @Get('/:id')
  getProduct(@Param('id') id: number): Array<Product> {
    return this.productService.getProductList().filter((product: Product) => {
      return product.id == id;
    });
  }

  @Post()
  insertProduct(@Body() bodyParams): boolean {
      try {
        const product = bodyParams.product;
        this.productService.insertProduct(product)
      } catch (error) {
        console.log('Error: ');
        console.log(error);
        return false;
      }

      return true;
  }
}
