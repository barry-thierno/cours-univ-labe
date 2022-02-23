import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
// import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ type: Product, status: 201 })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ type: Product, isArray: true, status: 200 })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ type: Product, status: 200 })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product by id' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
