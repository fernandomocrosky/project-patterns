import { CarFactory } from "./factories/car-factory";
import { Car } from "./vehicle/car";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("fusca");
fusca.pickUp("Joana");
fusca.stop();
