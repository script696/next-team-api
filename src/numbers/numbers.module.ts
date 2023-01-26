import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';

@Module({
  imports: [],
  controllers: [NumbersController],
  providers: [NumbersService],
})
export class NumbersModule {}
