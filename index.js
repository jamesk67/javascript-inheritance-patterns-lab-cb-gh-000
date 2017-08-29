function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`;
};

function Shape() {
  this.position;
}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y);
};
Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y);
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.diameter = function () {
  return this.radius * 2;
}
Circle.prototype.circumference = function () {
  return this.radius * 2 * Math.PI;
}
Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2;
}

function Side(length) {
  this.length = length;
}

function Polygon(sides) {
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.perimeter = function () {
  var perimeter = 0;
  for(let i = 0; i < this.sides.length; i++) {
    perimeter += this.sides[i].length;
  }
  return perimeter;
}
Polygon.prototype.numberOfSides = function () {
  return this.sides.length;
}

function Quadrilateral(a, b, c, d) {
  var sides = [new Side(a), new Side(b), new Side(c), new Side(d)];
  Polygon.call(this, sides);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);

function Triangle(x, y, z) {
  Polygon.call(this, [new Side(x), new Side(y), new Side(z)]);
}
Triangle.prototype = Object.create(Polygon.prototype);

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.listProperties = function () {
  var properties = "";
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      properties += (prop + "\n");
    }
  }
  return properties;
};
