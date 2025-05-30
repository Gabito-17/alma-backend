// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades que no están en el DTO
      forbidNonWhitelisted: true, // lanza error si hay propiedades no permitidas
      transform: true, // convierte los tipos automáticamente
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3005', // permitir puerto 3005
    credentials: true, // para utilizar cookies
  });

  //puerto de ejecucion
  const port = process.env.PORT || 3005;

  await app.listen(port);
}
bootstrap();
