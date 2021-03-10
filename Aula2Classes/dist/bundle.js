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

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Video {\n    constructor(src, type, controls) {\n        this.src = src;\n        this.type = type;\n        this.controls = controls;\n    }\n\n    render() {\n        return `\n        <video ${this.controls}>\n            <source src=\"${this.src}\" type=\"${this.type}\">\n        </video>\n        `;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n//# sourceURL=webpack://aula1/./src/components/Video.js?");

/***/ }),

/***/ "./src/components/VideoGallery.js":
/*!****************************************!*\
  !*** ./src/components/VideoGallery.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoGallery)\n/* harmony export */ });\nclass VideoGallery {\n    constructor(id, titulo) {\n        this.id = id;\n        this.titulo = titulo;\n        this.videos = [];\n    }\n\n    addVideo(video) {\n        this.videos.push(video);\n    }\n\n    render() {\n        const html = `\n        <section id=\"${this.id}\">\n            <h3>${this.titulo}</h3>\n            ${this.videos.map(el => {\n                return el.render();\n            }).join('')}\n        </section>\n        `;\n        const app = document.getElementById(\"app\");\n        app.innerHTML += html;\n    }\n}\n\nfunction teste() {\n    console.log('teste');\n}\n\n//# sourceURL=webpack://aula1/./src/components/VideoGallery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VideoGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VideoGallery */ \"./src/components/VideoGallery.js\");\n/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Video */ \"./src/components/Video.js\");\n\n\n\nconst gallery1 = new _components_VideoGallery__WEBPACK_IMPORTED_MODULE_0__.default('gallery1', 'Galeria 1');\n\nconst gallery2 = new _components_VideoGallery__WEBPACK_IMPORTED_MODULE_0__.default();\ngallery2.id = 'gallery2';\ngallery2.titulo = 'Galeria 2';\n\nconst video1 = new _components_Video__WEBPACK_IMPORTED_MODULE_1__.default('coelho1.mp4', 'video/mp4', 'controls');\nconst video2 = new _components_Video__WEBPACK_IMPORTED_MODULE_1__.default('coelho2.mp4', 'video/mp4', 'controls');\n\ngallery1.addVideo(video1);\ngallery1.addVideo(video2);\n\ngallery2.addVideo(video1);\ngallery2.addVideo(video2);\n\ngallery1.render();\ngallery2.render();\n\n\n//# sourceURL=webpack://aula1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;