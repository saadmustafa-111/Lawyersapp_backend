import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  setupSwagger(app);
  const port  = app.get(ConfigService).get<number>('PORT') ?? '3002' ;

  await app.listen(port);
  console.log(`Server is running on port ${port}`);

}
bootstrap();
