import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/createMessageDto';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post('/create')
  async createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.createMessage(body);
  }
}
