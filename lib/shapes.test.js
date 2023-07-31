const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test if the triangle has a yellow background", () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`
        );
    });
});

describe("Square Test", () => {
    test("test if the square has a green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="green" />`
        );
    });
});

describe("Circle test", () => {
    test("test if the circle has a #ffc0cb background", () => {
        const shape = new Circle();
        shape.setColor("#ffc0cb");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#ffc0cb" />'
        );
    });
});