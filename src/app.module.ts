import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [
    MessagesModule,
    NumbersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
