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
        message: "What color do you want your logo shape to be?"
    },
    {
        type: "input",
        name: "text",
        message: "What text do you want written on your logo?"
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want your logo text to be?"
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
    .then(userInput => renderLogo(userInput))
};

init();