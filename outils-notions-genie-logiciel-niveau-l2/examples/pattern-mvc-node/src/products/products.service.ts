import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import * as data from '../../data/product.json';

import { ProductDto } from './dto/product.dto';
@Injectable()
export class ProductsService {
  constructor() {} // private productsRepository: Repository<Product>, // @InjectRepository(Product)

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    const products: ProductDto[] = data.products;
    return products;
  }

  async findOne(id: number) {
    return data.products.find((p) => p.id === id);
  }
}
