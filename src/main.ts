import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CORS_CONFIG = {
  origin: '*',
  methods: 'GET,POST',
  allowedHeaders: ['Content-Type'],
};

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT as string;
    const app = await NestFactory.create(AppModule, { cors: CORS_CONFIG });

    if (!PORT) return;

    await app.listen(PORT, () => console.log(`server start on PORT ${PORT}`));

    // app.enableCors(CORS_CONFIG);
  } catch (e) {
    console.error(e);
  }
};

bootstrap();
