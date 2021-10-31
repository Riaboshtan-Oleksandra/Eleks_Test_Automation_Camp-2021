import Urban_Transport from "./Urban_Transport.js";

class ABcategoryLicense extends Urban_Transport {
  constructor(
    abOwnerName,
    abOwnerAge,
    abVehicleType,
    abFuelType,
    abWheelsNumber
  ) {
    super(abOwnerName, abOwnerAge, abVehicleType, abFuelType);
    this.wheelsNumber = abWheelsNumber;
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
}

export default ABcategoryLicense;
