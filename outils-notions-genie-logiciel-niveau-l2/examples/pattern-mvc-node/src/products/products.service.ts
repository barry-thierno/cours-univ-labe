import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  async update(id: number, updateProductDto: Partial<UpdateProductDto>) {
    await this.productsRepository.update({ id }, updateProductDto);
    return this.productsRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.productsRepository.delete(id);
  }
}
