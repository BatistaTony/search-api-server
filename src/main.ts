import { NestFactory } from '@nestjs/core';
import { PrismaService } from './prisma/prisma.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const prismaService: PrismaService = app.get(PrismaService);
  // await prismaService.enableShootDownHooks(app);

  app.listen(3000);
}
bootstrap();
