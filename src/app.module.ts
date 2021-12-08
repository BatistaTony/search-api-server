import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot(), SearchModule, ProductModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
