import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe(
      {
        transformOptions: {
          enableImplicitConversion: true,
        }
      }
    )
  );
  const config = new DocumentBuilder()
    .setTitle('Pet Center API')
    .setDescription('API of Pet Center')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(AppModule.port);
}
bootstrap();
