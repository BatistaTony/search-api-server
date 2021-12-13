import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchServiceInterface } from './search.interface';

@Injectable()
export class SearchService {
  constructor(
    private readonly elasticSearchService: ElasticsearchService,
    private prismaService: PrismaService,
  ) {}

  public async insertIndex(): Promise<any> {
    const productDb = await this.prismaService.product.findMany();

    const bulkBody = productDb.flatMap((product) => [
      { index: { _index: 'product' } },
      product,
    ]);

    await this.elasticSearchService.bulk({
      refresh: true,
      body: bulkBody,
    });

    return this.elasticSearchService.count({ index: 'product' });
  }

  public async searchIndex(searchData: any): Promise<any> {
    return;
  }
}
