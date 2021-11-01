import Urban_Transport from "./Urban_Transport.js";
import WithoutLicense from "./WithoutLicense.js";
import ABcategoryLicense from "./ABcategoryLicense.js";
import CDcategoryLicense from "./cdCategoryLicense.js";

Urban_Transport.rules();

console.log("-------------------------");

WithoutLicense.description();
WithoutLicense.getDriversLicense();

console.log("-------------------------");

let bmw = new ABcategoryLicense("Vasyl", 31, "car", "gas", 4);
bmw.description();
bmw.getABdriversLicense();

console.log("-------------------------");

let harley = new ABcategoryLicense("Oleg", 17, "motorcycle", "gasoline", 2);
harley.description();
harley.getDriversLicense();

console.log("-------------------------");

let schoolBus = new CDcategoryLicense("Nadiia", 40, "bus", "gasoline", 4);
schoolBus.description();
schoolBus.getDriversLicense();

console.log("-------------------------");

let electron = new CDcategoryLicense("Volodymyr", 18, "tram", "electic", 0);
electron.description();
electron.getDriversLicense();
