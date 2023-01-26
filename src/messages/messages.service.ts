import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/createMessageDto';

const mockDatabase = [
  { id: 1, author: 'script696', message: 'Делаю тестовое' },
];
console.log(mockDatabase);
@Injectable()
export class MessagesService {
  constructor() {}
  async createMessage({ author, message }: CreateMessageDto) {
    const id = mockDatabase.length + 1;
    const newMessage = { id, author, message };

    mockDatabase.push(newMessage);

    return newMessage;
  }

  async getAllMessage() {
    return mockDatabase;
  }
}
