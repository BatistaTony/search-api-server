import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Product, Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  async getProductById(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prismaService.product.create({
      data,
    });
  }
}
