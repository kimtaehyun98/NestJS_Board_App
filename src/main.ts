import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 범위 파이프
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // 요청에서 넘어온 자료들의 형변환
  }));

  await app.listen(3000);
}
bootstrap();

