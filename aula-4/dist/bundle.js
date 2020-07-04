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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  height: 3.125rem;\r\n  padding: .75rem;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0; /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  pointer-events: none;\r\n  cursor: text; /* Match the input under the label */\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.25rem;\r\n  padding-bottom: .25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: .25rem;\r\n  padding-bottom: .25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group > label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group > label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n.bd-placeholder-img {\r\n  font-size: 1.125rem;\r\n  text-anchor: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bd-placeholder-img-lg {\r\n    font-size: 3.5rem;\r\n  }\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\nul li {\r\n  cursor: pointer;\r\n}\r\n\r\n.inativo {\r\n  color: red;\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/classes/aposta-lista.class.js":
/*!*******************************************!*\
  !*** ./src/classes/aposta-lista.class.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApostaLista; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApostaLista = /*#__PURE__*/function () {
  function ApostaLista() {
    var apostas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, ApostaLista);

    this.apostas = _toConsumableArray(apostas);
  }

  _createClass(ApostaLista, [{
    key: "get",
    value: function get() {
      return _toConsumableArray(this.apostas);
    }
  }, {
    key: "novaAposta",
    value: function novaAposta(aposta) {
      this.apostas.push(aposta);
    }
  }, {
    key: "ativarDesativar",
    value: function ativarDesativar(id) {
      var aposta = this.apostas.find(function (aposta) {
        return aposta.id == id;
      });
      aposta.ativo = !aposta.ativo;
      return aposta;
    }
  }, {
    key: "removerInativos",
    value: function removerInativos() {
      this.apostas = this.apostas.filter(function (aposta) {
        return aposta.ativo;
      });
    }
  }, {
    key: "limpar",
    value: function limpar() {
      this.apostas = [];
    }
  }, {
    key: "ordenaVencedores",
    value: function ordenaVencedores(peso) {
      return this.apostas.map(function (aposta) {
        return _objectSpread(_objectSpread({}, aposta), {}, {
          margemErro: Math.abs(aposta.peso - peso)
        });
      }).sort(function (aposta1, aposta2) {
        return aposta1.margemErro - aposta2.margemErro || aposta1.id - aposta2.id;
      });
    }
  }, {
    key: "inativas",
    get: function get() {
      return this.apostas.filter(function (aposta) {
        return !aposta.ativo;
      });
    }
  }]);

  return ApostaLista;
}();



/***/ }),

/***/ "./src/classes/aposta.class.js":
/*!*************************************!*\
  !*** ./src/classes/aposta.class.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Aposta; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aposta = /*#__PURE__*/function () {
  function Aposta(nome, peso) {
    _classCallCheck(this, Aposta);

    this.id = new Date().getTime();
    this.nome = nome && nome.trim().length ? nome.trim() : null;
    this.peso = peso && peso.trim().length ? parseInt(peso) : null;
    this.ativo = true;
  }

  _createClass(Aposta, null, [{
    key: "valida",
    value: function valida(nome, peso) {
      if (!nome || !nome.trim().length) throw new Error('um nome deve ser informado');
      if (!peso || !peso.trim().length || isNaN(parseInt(peso))) throw new Error('o peso deve ser um número');
    }
  }]);

  return Aposta;
}();



/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Aposta, ApostaLista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aposta_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aposta.class */ "./src/classes/aposta.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Aposta", function() { return _aposta_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _aposta_lista_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aposta-lista.class */ "./src/classes/aposta-lista.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApostaLista", function() { return _aposta_lista_class__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: NovaApostaHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nova_aposta_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nova-aposta-html */ "./src/components/nova-aposta-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NovaApostaHTML", function() { return _nova_aposta_html__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/nova-aposta-html.js":
/*!********************************************!*\
  !*** ./src/components/nova-aposta-html.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (aposta) {
  console.log('nova aposta html', aposta);
  var li = document.createElement('li');
  li.innerText = "".concat(aposta.nome, " - ").concat(aposta.peso, "gr");
  li.classList.add('list-group-item');
  li.setAttribute('data-id', aposta.id);
  return li;
});
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.js");



var inNome = document.querySelector('#inNome');
var inPeso = document.querySelector('#inPeso');
var outApostas = document.querySelector('#outApostas');
var lista = new _classes__WEBPACK_IMPORTED_MODULE_1__["ApostaLista"]();
document.querySelector('#btApostar').addEventListener('click', function (event) {
  try {
    _classes__WEBPACK_IMPORTED_MODULE_1__["Aposta"].valida(inNome.value, inPeso.value);
    var aposta = new _classes__WEBPACK_IMPORTED_MODULE_1__["Aposta"](inNome.value, inPeso.value);
    lista.novaAposta(aposta);
    outApostas.appendChild(Object(_components__WEBPACK_IMPORTED_MODULE_2__["NovaApostaHTML"])(aposta));
    inNome.value = '';
    inPeso.value = '';
    inNome.focus();
  } catch (erro) {
    alert('Aposta inválida: ' + erro.message);
  }
});
document.querySelector('#btCancelar').addEventListener('click', function (event) {
  var apostasInativas = lista.inativas;

  if (!apostasInativas.length) {
    alert('Selecione as apostas a serem canceladas clicando sobre elas na lista');
  } else {
    var idsInativas = apostasInativas.map(function (aposta) {
      return aposta.id;
    });
    console.log('idsInativas', idsInativas);
    Array.from(outApostas.children).forEach(function (li) {
      var id = parseInt(li.getAttribute('data-id'));
      if (idsInativas.includes(id)) li.remove();
    });
    lista.removerInativos();
  }
});
document.querySelector('#btLimpar').addEventListener('click', function (event) {
  if (!confirm('Confirmar exclusão de todas as apostas?')) {
    outApostas.innerHTML = '';
    lista.limpar();
  }
});
document.querySelector('#btVencedor').addEventListener('click', function (event) {
  if (lista.get().length > 1) {
    var peso = prompt('Qual o peso real da melancia (em gramas)?');
    var apostasVencedoras = lista.ordenaVencedores(peso);
    var vencedor = apostasVencedoras.shift();
    var vices = apostasVencedoras.filter(function (aposta) {
      return aposta.margemErro == vencedor.margemErro;
    });
    var lanterna = apostasVencedoras.filter(function (aposta) {
      return !vices.includes(aposta);
    }).pop();
    var mensagemVencedor = "E o vencedor \xE9... ".concat(vencedor.nome, ", ").concat(!vencedor.margemErro ? 'com uma aposta certeira' : "por aproxima\xE7\xE3o (errou por ".concat(vencedor.margemErro, "gr)"), "!\n");
    var mensagemVice = vices.length ? "Tivemos outras apostas ganhadoras (".concat(vices.map(function (aposta) {
      return aposta.nome;
    }).join(', '), "), mas ").concat(vencedor.nome, " apostou primeiro.\n") : '';
    var mensagemLanterna = lanterna ? "J\xE1 ".concat(lanterna.nome, ", foi lanterninha e errou por ").concat(lanterna.margemErro, "...") : '';
    alert("".concat(mensagemVencedor).concat(mensagemVice).concat(mensagemLanterna));
  } else {
    alert('Ainda não temos apostas suficientes...');
  }
});
outApostas.addEventListener('click', function (event) {
  var id = event.target.getAttribute('data-id');
  var aposta = lista.ativarDesativar(id);
  if (aposta.ativo) event.target.classList.remove('inativo');else event.target.classList.add('inativo');
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcG9zdGEtbGlzdGEuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXBvc3RhLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdmEtYXBvc3RhLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJuYW1lcyI6WyJBcG9zdGFMaXN0YSIsImFwb3N0YXMiLCJhcG9zdGEiLCJwdXNoIiwiaWQiLCJmaW5kIiwiYXRpdm8iLCJmaWx0ZXIiLCJwZXNvIiwibWFwIiwibWFyZ2VtRXJybyIsIk1hdGgiLCJhYnMiLCJzb3J0IiwiYXBvc3RhMSIsImFwb3N0YTIiLCJBcG9zdGEiLCJub21lIiwiRGF0ZSIsImdldFRpbWUiLCJ0cmltIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJFcnJvciIsImlzTmFOIiwiY29uc29sZSIsImxvZyIsImxpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaW5Ob21lIiwicXVlcnlTZWxlY3RvciIsImluUGVzbyIsIm91dEFwb3N0YXMiLCJsaXN0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbGlkYSIsInZhbHVlIiwibm92YUFwb3N0YSIsImFwcGVuZENoaWxkIiwiTm92YUFwb3N0YUhUTUwiLCJmb2N1cyIsImVycm8iLCJhbGVydCIsIm1lc3NhZ2UiLCJhcG9zdGFzSW5hdGl2YXMiLCJpbmF0aXZhcyIsImlkc0luYXRpdmFzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiZ2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJyZW1vdmVySW5hdGl2b3MiLCJjb25maXJtIiwiaW5uZXJIVE1MIiwibGltcGFyIiwiZ2V0IiwicHJvbXB0IiwiYXBvc3Rhc1ZlbmNlZG9yYXMiLCJvcmRlbmFWZW5jZWRvcmVzIiwidmVuY2Vkb3IiLCJzaGlmdCIsInZpY2VzIiwibGFudGVybmEiLCJwb3AiLCJtZW5zYWdlbVZlbmNlZG9yIiwibWVuc2FnZW1WaWNlIiwiam9pbiIsIm1lbnNhZ2VtTGFudGVybmEiLCJ0YXJnZXQiLCJhdGl2YXJEZXNhdGl2YXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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R1AsUUFBUSxDQUFDbkQsSUFBbkgsNEJBQWdKLEVBQXJLO0FBQ0EsUUFBTTJELGdCQUFnQixHQUFHTCxRQUFRLG1CQUFTQSxRQUFRLENBQUN0RCxJQUFsQiwyQ0FBdURzRCxRQUFRLENBQUM3RCxVQUFoRSxXQUFrRixFQUFuSDtBQUVBc0MsU0FBSyxXQUFJeUIsZ0JBQUosU0FBdUJDLFlBQXZCLFNBQXNDRSxnQkFBdEMsRUFBTDtBQUNELEdBYkQsTUFhTztBQUNMNUIsU0FBSyxDQUFDLHdDQUFELENBQUw7QUFDRDtBQUNGLENBakJEO0FBbUJBWCxVQUFVLENBQUNFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUFDLEtBQUssRUFBSTtBQUM1QyxNQUFNcEMsRUFBRSxHQUFHb0MsS0FBSyxDQUFDcUMsTUFBTixDQUFhcEIsWUFBYixDQUEwQixTQUExQixDQUFYO0FBQ0EsTUFBTXZELE1BQU0sR0FBR29DLEtBQUssQ0FBQ3dDLGVBQU4sQ0FBc0IxRSxFQUF0QixDQUFmO0FBQ0EsTUFBSUYsTUFBTSxDQUFDSSxLQUFYLEVBQ0VrQyxLQUFLLENBQUNxQyxNQUFOLENBQWE5QyxTQUFiLENBQXVCNEIsTUFBdkIsQ0FBOEIsU0FBOUIsRUFERixLQUdFbkIsS0FBSyxDQUFDcUMsTUFBTixDQUFhOUMsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0I7QUFDSCxDQVBELEU7Ozs7Ozs7Ozs7O0FDekVBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc2lnbmluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXFxyXFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XFxyXFxuICBoZWlnaHQ6IDMuMTI1cmVtO1xcclxcbiAgcGFkZGluZzogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgY29sb3I6ICM0OTUwNTc7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XFxyXFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XFxyXFxuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRmFsbGJhY2sgZm9yIElFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcclxcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJkLXBsYWNlaG9sZGVyLWltZyB7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmF0aXZvIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwb3N0YUxpc3RhIHtcclxuICBjb25zdHJ1Y3RvcihhcG9zdGFzID0gW10pIHtcclxuICAgIHRoaXMuYXBvc3RhcyA9IFsgLi4uYXBvc3RhcyBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkge1xyXG4gICAgcmV0dXJuIFsgLi4udGhpcy5hcG9zdGFzIF07XHJcbiAgfVxyXG5cclxuICBnZXQgaW5hdGl2YXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcG9zdGFzLmZpbHRlcihhcG9zdGEgPT4gIWFwb3N0YS5hdGl2byk7XHJcbiAgfVxyXG5cclxuICBub3ZhQXBvc3RhKGFwb3N0YSkge1xyXG4gICAgdGhpcy5hcG9zdGFzLnB1c2goYXBvc3RhKTtcclxuICB9XHJcblxyXG4gIGF0aXZhckRlc2F0aXZhcihpZCkge1xyXG4gICAgY29uc3QgYXBvc3RhID0gdGhpcy5hcG9zdGFzLmZpbmQoYXBvc3RhID0+IGFwb3N0YS5pZCA9PSBpZCk7XHJcbiAgICBhcG9zdGEuYXRpdm8gPSAhYXBvc3RhLmF0aXZvO1xyXG4gICAgcmV0dXJuIGFwb3N0YTtcclxuICB9XHJcblxyXG4gIHJlbW92ZXJJbmF0aXZvcygpIHtcclxuICAgIHRoaXMuYXBvc3RhcyA9IHRoaXMuYXBvc3Rhcy5maWx0ZXIoYXBvc3RhID0+IGFwb3N0YS5hdGl2byk7XHJcbiAgfVxyXG5cclxuICBsaW1wYXIoKSB7XHJcbiAgICB0aGlzLmFwb3N0YXMgPSBbXTtcclxuICB9XHJcblxyXG4gIG9yZGVuYVZlbmNlZG9yZXMocGVzbykge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBvc3Rhc1xyXG4gICAgICAgICAgICAgICAubWFwKGFwb3N0YSA9PiAoeyAuLi5hcG9zdGEsIG1hcmdlbUVycm86IE1hdGguYWJzKGFwb3N0YS5wZXNvIC0gcGVzbykgfSkpXHJcbiAgICAgICAgICAgICAgIC5zb3J0KChhcG9zdGExLCBhcG9zdGEyKSA9PiAoYXBvc3RhMS5tYXJnZW1FcnJvIC0gYXBvc3RhMi5tYXJnZW1FcnJvKSB8fCAoYXBvc3RhMS5pZCAtIGFwb3N0YTIuaWQpKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcG9zdGEge1xyXG4gIGNvbnN0cnVjdG9yKG5vbWUsIHBlc28pIHtcclxuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRoaXMubm9tZSA9IG5vbWUgJiYgbm9tZS50cmltKCkubGVuZ3RoID8gbm9tZS50cmltKCkgOiBudWxsO1xyXG4gICAgdGhpcy5wZXNvID0gcGVzbyAmJiBwZXNvLnRyaW0oKS5sZW5ndGggPyBwYXJzZUludChwZXNvKSA6IG51bGw7XHJcbiAgICB0aGlzLmF0aXZvID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB2YWxpZGEobm9tZSwgcGVzbykge1xyXG4gICAgaWYgKCFub21lIHx8ICFub21lLnRyaW0oKS5sZW5ndGgpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW0gbm9tZSBkZXZlIHNlciBpbmZvcm1hZG8nKTtcclxuXHJcbiAgICBpZiAoIXBlc28gfHwgIXBlc28udHJpbSgpLmxlbmd0aCB8fCBpc05hTihwYXJzZUludChwZXNvKSkpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbyBwZXNvIGRldmUgc2VyIHVtIG7Dum1lcm8nKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgQXBvc3RhIGZyb20gJy4vYXBvc3RhLmNsYXNzJztcclxuaW1wb3J0IEFwb3N0YUxpc3RhIGZyb20gJy4vYXBvc3RhLWxpc3RhLmNsYXNzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgQXBvc3RhLFxyXG4gIEFwb3N0YUxpc3RhLFxyXG59OyIsImltcG9ydCBOb3ZhQXBvc3RhSFRNTCBmcm9tICcuL25vdmEtYXBvc3RhLWh0bWwnO1xyXG5cclxuZXhwb3J0IHtcclxuICBOb3ZhQXBvc3RhSFRNTCxcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcG9zdGEpIHtcclxuICBjb25zb2xlLmxvZygnbm92YSBhcG9zdGEgaHRtbCcsIGFwb3N0YSk7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICBsaS5pbm5lclRleHQgPSBgJHthcG9zdGEubm9tZX0gLSAke2Fwb3N0YS5wZXNvfWdyYDtcclxuICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBhcG9zdGEuaWQpO1xyXG5cclxuICByZXR1cm4gbGk7XHJcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBBcG9zdGEsIEFwb3N0YUxpc3RhIH0gZnJvbSAnLi9jbGFzc2VzJztcclxuaW1wb3J0IHsgTm92YUFwb3N0YUhUTUwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IGluTm9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbk5vbWUnKTtcclxuY29uc3QgaW5QZXNvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luUGVzbycpO1xyXG5jb25zdCBvdXRBcG9zdGFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dEFwb3N0YXMnKTtcclxuXHJcbmNvbnN0IGxpc3RhID0gbmV3IEFwb3N0YUxpc3RhKCk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRBcG9zdGFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIEFwb3N0YS52YWxpZGEoaW5Ob21lLnZhbHVlLCBpblBlc28udmFsdWUpO1xyXG4gICAgY29uc3QgYXBvc3RhID0gbmV3IEFwb3N0YShpbk5vbWUudmFsdWUsIGluUGVzby52YWx1ZSk7XHJcblxyXG4gICAgbGlzdGEubm92YUFwb3N0YShhcG9zdGEpO1xyXG4gICAgb3V0QXBvc3Rhcy5hcHBlbmRDaGlsZChOb3ZhQXBvc3RhSFRNTChhcG9zdGEpKTtcclxuXHJcbiAgICBpbk5vbWUudmFsdWUgPSAnJztcclxuICAgIGluUGVzby52YWx1ZSA9ICcnO1xyXG4gICAgaW5Ob21lLmZvY3VzKCk7XHJcbiAgfSBjYXRjaChlcnJvKSB7XHJcbiAgICBhbGVydCgnQXBvc3RhIGludsOhbGlkYTogJyArIGVycm8ubWVzc2FnZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidENhbmNlbGFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgY29uc3QgYXBvc3Rhc0luYXRpdmFzID0gbGlzdGEuaW5hdGl2YXM7XHJcblxyXG4gIGlmICghYXBvc3Rhc0luYXRpdmFzLmxlbmd0aCkge1xyXG4gICAgYWxlcnQoJ1NlbGVjaW9uZSBhcyBhcG9zdGFzIGEgc2VyZW0gY2FuY2VsYWRhcyBjbGljYW5kbyBzb2JyZSBlbGFzIG5hIGxpc3RhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGlkc0luYXRpdmFzID0gYXBvc3Rhc0luYXRpdmFzLm1hcChhcG9zdGEgPT4gYXBvc3RhLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdpZHNJbmF0aXZhcycsIGlkc0luYXRpdmFzKTtcclxuXHJcbiAgICBBcnJheS5mcm9tKG91dEFwb3N0YXMuY2hpbGRyZW4pLmZvckVhY2gobGkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGxpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgaWYgKGlkc0luYXRpdmFzLmluY2x1ZGVzKGlkKSlcclxuICAgICAgICBsaS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxpc3RhLnJlbW92ZXJJbmF0aXZvcygpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRMaW1wYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICBpZiAoIWNvbmZpcm0oJ0NvbmZpcm1hciBleGNsdXPDo28gZGUgdG9kYXMgYXMgYXBvc3Rhcz8nKSkge1xyXG4gICAgb3V0QXBvc3Rhcy5pbm5lckhUTUwgPSAnJztcclxuICAgIGxpc3RhLmxpbXBhcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRWZW5jZWRvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gIGlmIChsaXN0YS5nZXQoKS5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBwZXNvID0gcHJvbXB0KCdRdWFsIG8gcGVzbyByZWFsIGRhIG1lbGFuY2lhIChlbSBncmFtYXMpPycpO1xyXG5cclxuICAgIGNvbnN0IGFwb3N0YXNWZW5jZWRvcmFzID0gbGlzdGEub3JkZW5hVmVuY2Vkb3JlcyhwZXNvKTtcclxuICAgIGNvbnN0IHZlbmNlZG9yID0gYXBvc3Rhc1ZlbmNlZG9yYXMuc2hpZnQoKTtcclxuICAgIGNvbnN0IHZpY2VzID0gYXBvc3Rhc1ZlbmNlZG9yYXMuZmlsdGVyKGFwb3N0YSA9PiBhcG9zdGEubWFyZ2VtRXJybyA9PSB2ZW5jZWRvci5tYXJnZW1FcnJvKTtcclxuICAgIGNvbnN0IGxhbnRlcm5hID0gYXBvc3Rhc1ZlbmNlZG9yYXMuZmlsdGVyKGFwb3N0YSA9PiAhdmljZXMuaW5jbHVkZXMoYXBvc3RhKSkucG9wKCk7XHJcblxyXG4gICAgY29uc3QgbWVuc2FnZW1WZW5jZWRvciA9IGBFIG8gdmVuY2Vkb3Igw6kuLi4gJHt2ZW5jZWRvci5ub21lfSwgJHshdmVuY2Vkb3IubWFyZ2VtRXJybyA/ICdjb20gdW1hIGFwb3N0YSBjZXJ0ZWlyYScgOiBgcG9yIGFwcm94aW1hw6fDo28gKGVycm91IHBvciAke3ZlbmNlZG9yLm1hcmdlbUVycm99Z3IpYH0hXFxuYDtcclxuICAgIGNvbnN0IG1lbnNhZ2VtVmljZSA9IHZpY2VzLmxlbmd0aCA/IGBUaXZlbW9zIG91dHJhcyBhcG9zdGFzIGdhbmhhZG9yYXMgKCR7dmljZXMubWFwKGFwb3N0YSA9PiBhcG9zdGEubm9tZSkuam9pbignLCAnKX0pLCBtYXMgJHt2ZW5jZWRvci5ub21lfSBhcG9zdG91IHByaW1laXJvLlxcbmAgOiAnJztcclxuICAgIGNvbnN0IG1lbnNhZ2VtTGFudGVybmEgPSBsYW50ZXJuYSA/IGBKw6EgJHtsYW50ZXJuYS5ub21lfSwgZm9pIGxhbnRlcm5pbmhhIGUgZXJyb3UgcG9yICR7bGFudGVybmEubWFyZ2VtRXJyb30uLi5gIDogJyc7XHJcblxyXG4gICAgYWxlcnQoYCR7bWVuc2FnZW1WZW5jZWRvcn0ke21lbnNhZ2VtVmljZX0ke21lbnNhZ2VtTGFudGVybmF9YCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KCdBaW5kYSBuw6NvIHRlbW9zIGFwb3N0YXMgc3VmaWNpZW50ZXMuLi4nKTtcclxuICB9XHJcbn0pO1xyXG5cclxub3V0QXBvc3Rhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICBjb25zdCBhcG9zdGEgPSBsaXN0YS5hdGl2YXJEZXNhdGl2YXIoaWQpO1xyXG4gIGlmIChhcG9zdGEuYXRpdm8pXHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5hdGl2bycpO1xyXG4gIGVsc2VcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbmF0aXZvJyk7XHJcbn0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=