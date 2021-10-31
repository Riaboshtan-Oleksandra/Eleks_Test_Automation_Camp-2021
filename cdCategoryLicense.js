import Urban_Transport from "./Urban_Transport.js";

export default class CDcategoryLicense extends Urban_Transport {
  constructor(
    cdOwnerName,
    cdOwnerAge,
    cdVehicleType,
    cdFuelType,
    cdWheelsNumber
  ) {
    super(cdOwnerName, cdOwnerAge, cdVehicleType, cdFuelType);
    this.wheelsNumber = cdWheelsNumber;
  }

  description() {
    if (this.type === "tram") {
      console.log(
        `A tram is a train that runs on tramway track on public urban streets. It uses electrical power to transport large aount of passangers.`
      );
    } else {
      console.log(
        `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
          this.wheelsNumber
        }-wheeled, ${
          this.fuel
        } powered urban transport. Mostly it is used for transportation of large amount of people.`
      );
    }
  }
}
