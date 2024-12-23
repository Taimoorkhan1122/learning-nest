import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () =>
    Logger.log('server is up and running on PORT: ' + PORT, 'Server'),
  );
}
bootstrap();
