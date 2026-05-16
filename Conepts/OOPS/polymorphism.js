class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (3.14 * this.radius ** 2).toFixed(2);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width *  this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

class Sample extends Shape {
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8), new Sample()];

shapes.forEach(shape => {
    console.log(`${shape.constructor.name} area: ${shape.area()}`);
})