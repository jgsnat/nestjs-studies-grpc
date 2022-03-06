import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcServerOptions } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcServerOptions,
  );
  await app.listen();
}
bootstrap();
