import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'the url is here' + process.env.ELASTIC_SEARCH_URL;
  }
}
