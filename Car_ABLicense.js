import Vehicle from "./Vehicle.js";

export default class Car_ABLicense extends Vehicle {
  #model;
  #year = 2015;
  constructor(
    abOwnerName,
    abOwnerAge,
    abVehicleType,
    abFuelType,
    abWheelsNumber
  ) {
    super(abOwnerName, abOwnerAge, abVehicleType, abFuelType);
    this.wheelsNumber = abWheelsNumber;
    this.#model = "BMW";
  }

  description() {
    if (this.type == "car") {
      console.log(
        `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
          this.wheelsNumber
        }-wheeled, ${
          this.fuel
        } powered urban transport. Mostly it is used for transportation of one-to-five people or light-weighted baggage.`
      );
    }
  }

  getABdriversLicense() {
    super.getDriversLicense();
    if (this.age > 18)
      console.log(
        `${this.name} will buy ${this.#model} of ${
          this.#year
        } after getting driver's license`
      );
  }
}

// const honda = new ABcategoryLicense("Sasha", 33, "car", "gasoline", 4);
// honda.getDriversLicense();
// honda.getABdriversLicense();
//console.log(honda.year);
