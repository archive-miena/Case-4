function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return this.brand + " - " + this.year;
};

function Car(brand, year, doors) {
    Vehicle.call(this, brand, year);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car1 = new Car("Toyota", 2023, 4);
const car2 = new Car("Honda", 2024, 4);

console.log(car1.getInfo());
console.log("Doors:", car1.doors);

console.log(car2.getInfo());
console.log("Doors:", car2.doors);

console.log(
    "Method sama:",
    car1.getInfo === car2.getInfo
);