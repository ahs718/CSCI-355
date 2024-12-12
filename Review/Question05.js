/** 5. Set, WeakSet, and Iterators
 * Create a base class Vehicle with a method move() that logs "Vehicle is moving".
 * Extend it with a class Car that overrides move() to log "Car is driving".
 * Add another class ElectricCar that overrides move() to log "Electric car is driving silently".
 * Demonstrate polymorphism by calling the move() method on instances of each class using a loop over an array of objects. */

class Vehicle {
    move() {
        console.log("Vehicle is moving");
    }
}

class Car extends Vehicle {
    move() {
        console.log("Car is driving");
    }
}

class ElectricCar {
    move() {
        console.log("Electric car is driving silently");
    }
}

let vehicles = [new Vehicle(), new Car(), new ElectricCar()];

for (let vehicle of vehicles) {
    vehicle.move();
}
