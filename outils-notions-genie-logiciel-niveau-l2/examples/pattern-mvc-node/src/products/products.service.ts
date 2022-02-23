import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

import * as data from '../../data/product.json';

import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  async remove(id: number) {
    return await this.productsRepository.delete(id);
  }
}
