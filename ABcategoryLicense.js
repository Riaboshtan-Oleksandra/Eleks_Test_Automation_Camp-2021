import Urban_Transport from "./Urban_Transport.js";

export default class ABcategoryLicense extends Urban_Transport {
  #numberPlate;
  constructor(
    abOwnerName,
    abOwnerAge,
    abVehicleType,
    abFuelType,
    abWheelsNumber
  ) {
    super(abOwnerName, abOwnerAge, abVehicleType, abFuelType);
    this.wheelsNumber = abWheelsNumber;
    this.#numberPlate = ["BC", 3030, "AK"];
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
    } else if (this.type == "motorcycle") {
      console.log(
        `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
          this.wheelsNumber
        }-wheeled, ${
          this.fuel
        } powered urban transport. It suits a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding.`
      );
    }
  }

  getABdriversLicense() {
    super.getDriversLicense();
    if (this.age > 18)
      console.log(
        `${this.name} gets '${this.#numberPlate.join(
          " "
        )}' number plate for his/her ${this.type}`
      );
  }
}

// const honda = new ABcategoryLicense("Sasha", 33, "car", "gasoline", 4);
// honda.getDriversLicense();
// honda.getABdriversLicense();
//console.log(honda.numberPlate);
