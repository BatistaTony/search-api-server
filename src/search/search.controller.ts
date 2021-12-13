import { Controller, Post } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post('populate')
  async storeDataOnElastic(): Promise<any> {
    return await this.searchService.insertIndex();
  }
}
