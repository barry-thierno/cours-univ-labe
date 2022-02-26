import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const { products } = this.appService.getProducts();
    // const products = await this.productsService.findAll();
    return { products };
  }
}
