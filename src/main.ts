import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as dotenv from "dotenv";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8080);
  console.log(process.env.PORT)
}
bootstrap();
