import { Injectable } from '@nestjs/common';
import { CalculateAverageDto } from './dto/CalculateAverageDto';

type Calculation = {
  id: number;
  previousAverage: number;
  currentNumber: number;
  currentAverage: number;
};
type MockDatabaseModel = Array<Calculation>;
const mockDatabase: MockDatabaseModel = [
  { id: 1, previousAverage: 1, currentNumber: 3, currentAverage: 2 },
];

@Injectable()
export class NumbersService {
  constructor() {}
  async calculateAverage({
    number,
    isInteger,
    isPositive,
  }: CalculateAverageDto) {
    const id = mockDatabase.length + 1;
    const previousAverage =
      mockDatabase[mockDatabase.length - 1].currentAverage;
    if (!isPositive) {
      number = Math.abs(number);
    }
    let average = (previousAverage + number) / 2;
    if (isInteger) {
      average = Math.round(average);
    }
    const newCalculation = {
      id,
      previousAverage: previousAverage,
      currentNumber: number,
      currentAverage: average,
    };

    mockDatabase.push(newCalculation);
    return {
      id,
      previousAverage,
      currentNumber: number,
      currentAverage: average,
    };
  }

  async getAllNumbers() {
    return mockDatabase;
  }
}
