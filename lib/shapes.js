class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

class Circle extends Shape { 
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return  `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="175" height="175" fill="${this.shapeColor}"/>
        <text x="115" y="130" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);  
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

function renderShape(res) {
    if (res.shape === "Circle") {
        const userShapeChoice = new Circle (res.shapeColor, res.text, res.textColor)
        return userShapeChoice.render()
    }
    if (res.shape === "Square") {
        const userShapeChoice = new Square (res.shapeColor, res.text, res.textColor)
        return userShapeChoice.render()
    }
    if (res.shape === "Triangle") {
        const userShapeChoice = new Triangle (res.shapeColor, res.text, res.textColor)
        return userShapeChoice.render()
    }
};

module.exports = renderShape;