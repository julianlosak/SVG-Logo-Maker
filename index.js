const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

function svgFile(fileName, svgString, callback) {
    fs.writeFile(fileName, svgString, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Created logo.svg");
        }
        callback(err);
    });
}

function userInputs() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Logo text display maximum of 3 characters",
                name: "text",
            },
            {
                type: "input",
                message: "Enter text color",
                name: "textColor",
            },
            {
                type: "list",
                message: "Select a shape for the logo",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            {
                type: "input",
                message: "Enter shape color",
                name: "shapeBackgroundColor",
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Input can only be 3 characters or less");
                userInputs();
            } else {
                const shapeInput =
                    answers.shape === "Triangle" ? new Triangle() :
                    answers.shape === "Square" ? new Square() :
                    new Circle();
        
                const shapeElement =
                    answers.shape === "Triangle" ? `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>` :
                    answers.shape === "Square" ? `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>` :
                    `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
        
                const svgString = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>${answers.shape}${shapeElement}<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g>
        </svg>`;
                svgFile("logo.svg", svgString, (err) => {
                });
            }
        });
}

userInputs();
