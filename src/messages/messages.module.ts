import { forwardRef, Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messanges.controller';

@Module({
  imports: [],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
