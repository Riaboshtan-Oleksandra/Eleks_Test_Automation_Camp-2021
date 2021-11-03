import Vehicle from "./Vehicle.js";

export default class Truck_CDLicense extends Vehicle {
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
    if (this.type === "truck") {
      console.log(
        `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
          this.wheelsNumber
        }-wheeled, ${
          this.fuel
        } powered vehicle. Mostly it is used to transport cargo, carry specialized payloads, or perform other utilitarian work.`
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
