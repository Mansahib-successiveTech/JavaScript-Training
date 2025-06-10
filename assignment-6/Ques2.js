/*
2. Create a class Shape with properties width and height and methods getArea().
 Create two classes Rectangle and Triangle that inherit from the Shape class 
 and implement the getArea() method for their respective shapes.

*/

class Shape {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
  getArea() {}
}
class Rectangle extends Shape {
  super(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
class Triangle extends Shape {
  super(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return (1 / 2) * this.width * this.height;
  }
}
let tri = new Triangle(10, 10);
let rect = new Rectangle(20, 10);
console.log(tri.getArea());
console.log(rect.getArea());
