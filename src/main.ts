import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);

  const port = 3000;
  await app.listen(port, () => logger.log(`App running on Port: ${port}`));
}
bootstrap();
