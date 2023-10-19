const inquirer = require("inquirer");
const fs = require("fs").promises;
const renderShape = require("./lib/shapes.js");

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Please choose the shape of your logo.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want your logo shape to be? \nPlease enter color name or a hexadecimal number."
        
    },
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters for the logo text.",
        validate: userTextInput => {
            if (userTextInput.length < 4 && userTextInput.length > 0) {
                return true;
            } else {
                console.log ("\nPlease enter UP TO THREE characters for the logo text.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want your logo text to be?  \nPlease enter color name or a hexadecimal number."
    }
];

function renderLogo(fileName, userInput) {
    const destinationDir = "examples";
    const logoData = renderShape(userInput);
    fs.writeFile(`${destinationDir}/${fileName}`, logoData)
    .then(error => {
        if (error) {
            return console.log(error);
    }
    console.log("Generated logo.svg");
    })
};

function init() {
    inquirer.prompt(questions)
    .then(userInput => renderLogo("SVG-logo-example.svg", userInput))
};

init();