import { Body, Controller, Get, Post } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CalculateAverageDto } from './dto/CalculateAverageDto';

@Controller('/numbers')
export class NumbersController {
  constructor(private numbersService: NumbersService) {}

  @Post('/calculateAverage')
  async createMessage(@Body() body: CalculateAverageDto) {
    return this.numbersService.calculateAverage(body);
  }

  @Get('/getAll')
  async getMessage() {
    return this.numbersService.getAllNumbers();
  }
}
