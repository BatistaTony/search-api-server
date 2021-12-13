import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product as ProductModel } from '@prisma/client';
import { ProductService } from './product.service';

interface ProductInterface {
  name: string;
  description: string;
  colorId: number;
}

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(): Promise<ProductModel[]> {
    return this.productService.getAllProducts();
  }

  @Post('create')
  async createSingleProduct(
    @Body() productData: ProductInterface,
  ): Promise<ProductModel> {
    const { colorId, description, name } = productData;
    return this.productService.createProduct({
      description,
      name,
      colors: colorId,
    });
  }
}
