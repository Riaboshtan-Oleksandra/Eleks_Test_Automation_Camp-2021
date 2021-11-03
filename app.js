import Vehicle from "./Vehicle.js";
import WithoutLicense from "./WithoutLicense.js";
import Car_ABLicense from "./Car_ABLicense.js";
import Truck_CDLicense from "./Truck_CDLicense.js";

Vehicle.rules();

console.log("-------------------------");

WithoutLicense.description();
WithoutLicense.getDriversLicense();

console.log("-------------------------");

let bmw = new Car_ABLicense("Vasyl", 31, "car", "gas", 4);
bmw.description();
bmw.getABdriversLicense();

console.log("-------------------------");

let nc = new Truck_CDLicense("Volodymyr", 18, "truck", "gasoline", 4);
nc.description();
nc.getDriversLicense();

console.log("-------------------------");

let schoolBus = new Truck_CDLicense("Nadiia", 40, "bus", "electic", 4);
schoolBus.description();
schoolBus.getDriversLicense();
