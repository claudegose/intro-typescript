/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("\n//todo output js file to index.html\n(function () {\n    document.getElementById('guess-form').addEventListener(\"click\", compareUserGuess);\n    function compareUserGuess(event) {\n        event.preventDefault();\n        const secretNumber = generateSecretNumber();\n        const userNumber = document.getElementById('guess').value;\n        // @ts-ignore\n        if (secretNumber == userNumber) {\n            alert(`Awesome! You number ${userNumber} was correct. You can be named many things, hungry not being one of them.`);\n        }\n        else {\n            alert(`Bummer... You guessed ${userNumber} and the secret number was ${secretNumber}`);\n        }\n    }\n    function generateSecretNumber() {\n        const secretNumber = getRandomArbitrary(1, 22);\n        return secretNumber;\n    }\n    function getRandomArbitrary(min, max) {\n        return Math.round(Math.random() * (max - min) + min);\n    }\n})();\n\n\n//# sourceURL=webpack://intro-typescript/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;