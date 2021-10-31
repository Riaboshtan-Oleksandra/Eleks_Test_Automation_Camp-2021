//gather land vehils
class Urban_Transport {
  constructor(ownerName, ownerAge, vehicleType, fuelType, wheelsNumber) {
    this.name = ownerName;
    this.age = ownerAge;
    this.type = vehicleType;
    this.fuel = fuelType;
    this.wheelsNumber = wheelsNumber;
  }

  description() {
    console.log(`Name: ${this.name}`);
  }

  getDriverLicense() {
    if (this.type == "bycicle") {
      console.log();
    }
  }
}
