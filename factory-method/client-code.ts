import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './util/random-numbers';

const carFactory = new CarFactory();
const customersNames = ['João', 'Fernanda', 'Patrícia', 'Lucas'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customersNames[randomNumbers(customersNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}