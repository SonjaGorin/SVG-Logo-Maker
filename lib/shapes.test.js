const Circle = require("./shapes").Circle;
const Square = require("./shapes").Square;
const Triangle = require("./shapes").Triangle;

// test for circle
describe("Circle", () => {
    it("should return logo shaped like circle", () => {
        const circle = new Circle("red","SVG","green");
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="red" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="green">SVG</text>
        </svg>
        `
        );
    });
});

// test for square
describe("Square", () => {
    it("should return logo shaped like square", () => {
        const square = new Square("red","SVG","green");
        expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="175" height="175" fill="red"/>
        <text x="115" y="130" font-size="70" text-anchor="middle" fill="green">SVG</text>
        </svg>
        `
        );
    });
});

// test for triangle
describe("Triangle", () => {
    it("should return logo shaped like triangle", () => {
        const triangle = new Triangle("red","SVG","green");
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="red"/>
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="green">SVG</text>
        </svg>
        `
        );
    });
});
