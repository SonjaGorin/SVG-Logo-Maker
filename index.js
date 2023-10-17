const inquirer = require("inquirer");
const fs = require("fs").promises;

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
]