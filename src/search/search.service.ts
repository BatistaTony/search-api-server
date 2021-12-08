import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchServiceInterface } from './search.interface';

@Injectable()
export class SearchService implements SearchServiceInterface<any> {
  constructor(private readonly elasticSearchService: ElasticsearchService) {}

  public async deleteDocument(indexData: any): Promise<any> {
    return;
  }

  public async deleteIndex(indexData: any): Promise<any> {
    return;
  }

  public async insertIndex(bulkData: any): Promise<any> {
    return;
  }

  public async searchIndex(searchData: any): Promise<any> {
    return;
  }

  public async updateIndex(bulkData: any): Promise<any> {
    return;
  }
}
