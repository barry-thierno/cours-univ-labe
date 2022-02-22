import { Injectable } from '@nestjs/common';

import * as data from '../data/product.json';
@Injectable()
export class AppService {
  getProducts() {
    return {
      // message: 'Hello world!',
      products: data.products,
    };
  }
}
