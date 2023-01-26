import { NestFactory } from '@nestjs/core';
import {
  AppModule } from './app.module';

const bootstrap = async () => {
  try {
    const PORT   = process.env.PORT as string;
    const app = await NestFactory.create(AppModule);
    console.log(PORT)
    if(!PORT)return
    await app.listen(PORT, () => console.log(`server start on PORT ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

bootstrap();
