/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Didact_didact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Didact/didact */ \"./src/Didact/didact.js\");\n\n/** @jsx Didact.createElement */\n\nvar element = {\n  type: \"div\",\n  props: {\n    id: \"container\",\n    children: [_Didact_didact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"Hello World from Didact!\"), {\n      type: \"input\",\n      props: {\n        value: \"input\",\n        type: \"text\"\n      }\n    }, {\n      type: \"a\",\n      props: {\n        href: \"/link\"\n      }\n    }, {\n      type: \"span\",\n      props: {\n        children: [{\n          type: \"TEXT ELEMENT\",\n          props: {\n            nodeValue: \"Something\"\n          }\n        }]\n      }\n    }]\n  }\n};\n_Didact_didact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(element, document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/App/index.js?");

/***/ }),

/***/ "./src/Didact/didact.js":
/*!******************************!*\
  !*** ./src/Didact/didact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar TEXT_ELEMENT = \"TEXT ELEMENT\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render(elem, parentDom) {\n    var _this = this;\n\n    var type = elem.type,\n        props = elem.props;\n    var elementToRender = type === \"TEXT ELEMENT\" ? document.createTextNode(\"\") : document.createElement(type);\n\n    var isEventListener = function isEventListener(propName) {\n      return propName.startsWith(\"on\");\n    };\n\n    Object.keys(props).filter(isEventListener).forEach(function (eventListener) {\n      var eventType = eventListener.slice(2).toLowerCase();\n      elementToRender.addEventListener(eventType, props[eventListener]);\n    });\n\n    var isAttribute = function isAttribute(propName) {\n      return !isEventListener(propName) && propName !== \"children\";\n    };\n\n    Object.keys(props).filter(isAttribute).forEach(function (attribute) {\n      elementToRender[attribute] = props[attribute];\n    });\n    var children = props.children || [];\n    children.forEach(function (childElem) {\n      _this.render(childElem, elementToRender);\n    });\n    parentDom.appendChild(elementToRender);\n  },\n  createElement: function createElement(type, config) {\n    var _ref,\n        _this2 = this;\n\n    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      args[_key - 2] = arguments[_key];\n    }\n\n    var allChildren = args.length ? (_ref = []).concat.apply(_ref, args) : [];\n\n    var isObject = function isObject(obj) {\n      return obj instanceof Object;\n    };\n\n    var props = Object.assign({}, config);\n    props.children = allChildren.filter(function (child) {\n      return child != null && child !== false;\n    }).map(function (child) {\n      return isObject(child) ? child : _this2.createTextElement(child);\n    });\n    var elem = {\n      type: type,\n      props: props\n    };\n    return elem;\n  },\n  createTextElement: function createTextElement(value) {\n    return this.createElement(TEXT_ELEMENT, {\n      nodeValue: value\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/Didact/didact.js?");

/***/ })

/******/ });