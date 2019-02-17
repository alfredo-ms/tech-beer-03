import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {
  
  static productsList: Array<Product> = [];

  getProductList(): Array<Product> {
    return ProductService.productsList;
  }

  insertProduct(product: Product): void {
    ProductService.productsList.push(product);
  }

}
