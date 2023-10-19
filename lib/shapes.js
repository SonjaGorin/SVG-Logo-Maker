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
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="125" fill="${this.shapeColor}" />
        <text x="150" y="175" font-size="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
        <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/>
        <text x="50" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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