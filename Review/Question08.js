/** 8. Class Syntax, Inheritance, and Static Methods
 * Create a base class Shape with a static method describe that logs "I am a shape". Extend it
 * with a Rectangle class that adds width and height properties and calculates the area.
 * Demonstrate usage of the static method and area calculation. */

class Shape {
    static describe() {
        console.log("I am a shape");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 2);
console.log(rectangle.area); // 10

Rectangle.describe(); // I am a shape
Shape.describe(); // I am a shape
