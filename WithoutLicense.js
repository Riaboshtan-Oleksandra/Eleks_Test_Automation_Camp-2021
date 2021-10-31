import Urban_Transport from "./Urban_Transport.js";

class WithoutLicense extends Urban_Transport {
  constructor(ownerName, ownerAge, vehicleType, fuelType, wheelsNumber) {
    super(ownerName, ownerAge, vehicleType, fuelType);
    this.wheelsNumber = wheelsNumber;
  }

  description() {
    console.log(
      `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
        this.wheelsNumber
      }-wheeled, ${
        this.fuel
      } powered urban transport. It is used for transportation and as a 'work horse' for mail carriers, police, messengers, and general delivery services.`
    );
  }
}

export default new WithoutLicense("Sasha", 23, "bicycle", "human", 2);
