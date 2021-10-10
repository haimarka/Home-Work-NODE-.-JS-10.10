// const logToConsole = (string) => {
//     console.log(string);
// }
// module.exports.loadFunction1 = logToConsole;

// const laodConsole = (stringa) => {
//     console.log(stringa);
// }
// module.exports.loadToTerminal = laodConsole;



// function returnSum(num1, num2) {
//     return num1 + num2
// }
// function returnMulti(num1, num2) {
//     return num1 * num2;
// }
// function returnDevide(num1, num2) {
//     return num1 / num2;
// }
// function returnMinus(num1, num2) {
//     return num1 - num2;
// }
// module.exports.loadSum = returnSum;
// module.exports.loadMulti = returnMulti;
// module.exports.loadDivide = returnDevide;
// module.exports.loadMinus = returnMinus;


//1
//a

// function printeArraySum(arrayC) {
//     let sumA = 0;
//     for (let i = 0; i < arrayC.length; i++) {
//         sumA += arrayC[i];
//     }
//     console.log(sumA);
// }
// module.exports.loadArray = printeArraySum;

//b

// const chalk = require("chalk");
// function printeSumInBlue(arrayC){
//     let sumB = 0;
//     for (let i = 0; i < arrayC.length; i++) {
//         sumB += arrayC[i]
//     }
//     console.log(sumB);
//     console.log(chalk.blue.bold(sumB));
// }
// module.exports.loadBlueArray = printeSumInBlue;

//c

// const chalk = require("chalk");
// function printeSumInYellow(arrayC){
//     let sumC = 0;
//     for (let i = 0; i < arrayC.length; i++) {
//         sumC += arrayC[i]
//     }
//     console.log(sumC);
//     console.log(chalk.yellow.bold(sumC));
// }
// module.exports.loadYellowArray = printeSumInYellow;

//d

// function writeToText(text){
//     const fs = require("fs");
//     fs.appendFile("only text" ,text, error =>{
//         console.log(error);
//     })
// }
// module.exports.addText = writeToText;

//e

// function writeToText(text){
//     const fs = require("fs");
//     fs.readFile("only text.txt" ,text, error =>{
//         console.log(error);
//     })
//     console.log(text);
// }
// module.exports.addText = writeToText;

//f

// function writeToTextSync(text2){
//     const fs = require("fs");
//     fs.readFileSync("hello.txt" ,text2, error =>{
//         console.log(error);
//     })
//     console.log(text2);
// }
// module.exports.addText2 = writeToTextSync;

//e

// פונקציה א-סיכרונית

// function getName (name){
//     const fs = require("fs");
//     fs.readFile(name, "utf8", (err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(data);
//     })
// }

// module.exports.printe = getName;

//f

// פונקציה סינכרונית 

// function getName2(name2) {
//     const fs = require("fs");
//     const data = fs.readFileSync(name2,"utf8")
//         console.log(data);
    
// }

// module.exports.printe2 = getName2;

//g

// function writeToText(text){
//     const fs = require("fs");
//     fs.appendFile("only text.txt" ,text, error =>{
//         console.log(error);
//     })
// }
// module.exports.addText = writeToText;

