export default class Urban_Transport {
  constructor(ownerName, ownerAge, vehicleType, fuelType) {
    this.name = ownerName;
    this.age = ownerAge;
    this.type = vehicleType;
    this.fuel = fuelType;
  }

  static rules() {
    //(not real data)
    console.log(
      "To obtaine driver's license to operate an urban transport person must reach a certain age: \n A-B category (motorcycle, car) - 18 years old. \n C-D category (bus, tram) - 21 years old."
    );
  }

  description() {
    console.log(
      `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} - is a ${
        this.fuel
      } powered urban transport`
    );
  }

  getDriversLicense() {
    //no need
    if (this.type === "bicycle") {
      console.log(
        `${this.name} doesn't need a driver license to operate a ${this.type}`
      );
    }

    // A-B category
    if (this.type === "car" || this.type === "motorcycle") {
      if (this.age > 18) {
        console.log(
          `${this.name} can get a driver license to operate a ${this.type}`
        );
      } else {
        let wait_time = 18 - this.age;
        console.log(
          `${this.name} needs to wait ${wait_time} ${
            wait_time === 1 ? "year" : "years"
          } to get a driver license to operate a ${this.type}`
        );
      }
    }

    // C-D category
    if (this.type === "bus" || this.type === "tram") {
      if (this.age > 21) {
        console.log(
          `${this.name} can get a driver license to operate a ${this.type}`
        );
      } else {
        let wait_time = 21 - this.age;
        console.log(
          `${this.name} needs to wait ${wait_time} ${
            wait_time === 1 ? "year" : "years"
          } to get a driver license to operate a ${this.type}`
        );
      }
    }
  }
}
