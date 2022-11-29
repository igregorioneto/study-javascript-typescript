import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../util/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const car1 = carFactory.getVehicle('BMW');
  const car2 = carFactory.getVehicle('HB 20');
  const cars = [car1, car2];
  return cars[randomNumbers(cars.length)];
}