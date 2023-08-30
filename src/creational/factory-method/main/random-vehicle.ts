import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCar(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta Preto");
  const bic1 = bicycleFactory.getVehicle("Bicycle");

  const cars = [car1, car2, bic1];
  return cars[randomNumbers(cars.length)];
}
