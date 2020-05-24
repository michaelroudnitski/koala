module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Blog/Article/Article.js":
/*!********************************************!*\
  !*** ./components/Blog/Article/Article.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"react-spring\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reading-time */ \"reading-time\");\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_featuredImgSrc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/featuredImgSrc */ \"./util/featuredImgSrc.js\");\nvar _jsxFileName = \"/Users/mroudnitski/dev/koala/components/Blog/Article/Article.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst fade = {\n  opacity: 1,\n  from: {\n    opacity: 0\n  }\n};\n\nfunction Article({\n  post\n}) {\n  const titleProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 0\n  }));\n  const imageProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 300\n  }));\n  const contentProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 500\n  }));\n  const timeToRead = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(post.content.rendered);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: titleProps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-capitalize blog-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, post.title.rendered), __jsx(\"h6\", {\n    className: \"text-muted\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"MMM Do YYYY\"), __jsx(\"span\", {\n    className: \"text-warning\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \" \\xB7 \"), timeToRead.text)), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].img, {\n    style: _objectSpread({\n      maxHeight: \"30rem\",\n      objectFit: \"cover\"\n    }, imageProps),\n    src: Object(_util_featuredImgSrc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(post),\n    className: \"rounded w-100 my-4\",\n    alt: \"Featured\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: contentProps,\n    className: \"post-content\",\n    dangerouslySetInnerHTML: {\n      __html: post.content.rendered\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlLmpzPzc2ZjYiXSwibmFtZXMiOlsiZmFkZSIsIm9wYWNpdHkiLCJmcm9tIiwiQXJ0aWNsZSIsInBvc3QiLCJ0aXRsZVByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJpbWFnZVByb3BzIiwiY29udGVudFByb3BzIiwidGltZVRvUmVhZCIsInJlYWRpbmdUaW1lIiwiY29udGVudCIsInJlbmRlcmVkIiwidGl0bGUiLCJtb21lbnQiLCJkYXRlIiwiZm9ybWF0IiwidGV4dCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsImZlYXR1cmVkSW1nU3JjIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLElBQUksR0FBRztBQUFFQyxTQUFPLEVBQUUsQ0FBWDtBQUFjQyxNQUFJLEVBQUU7QUFBRUQsV0FBTyxFQUFFO0FBQVg7QUFBcEIsQ0FBYjs7QUFFQSxTQUFTRSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBMkI7QUFDekIsUUFBTUMsVUFBVSxHQUFHQyw4REFBUyxpQ0FBTU4sSUFBTjtBQUFZTyxTQUFLLEVBQUU7QUFBbkIsS0FBNUI7QUFDQSxRQUFNQyxVQUFVLEdBQUdGLDhEQUFTLGlDQUFNTixJQUFOO0FBQVlPLFNBQUssRUFBRTtBQUFuQixLQUE1QjtBQUNBLFFBQU1FLFlBQVksR0FBR0gsOERBQVMsaUNBQU1OLElBQU47QUFBWU8sU0FBSyxFQUFFO0FBQW5CLEtBQTlCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHQyxtREFBVyxDQUFDUCxJQUFJLENBQUNRLE9BQUwsQ0FBYUMsUUFBZCxDQUE5QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFUixVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0QsSUFBSSxDQUFDVSxLQUFMLENBQVdELFFBQXZELENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsNkNBQU0sQ0FBQ1gsSUFBSSxDQUFDWSxJQUFOLENBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLGFBQXpCLENBREgsRUFFRTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHR1AsVUFBVSxDQUFDUSxJQUhkLENBRkYsQ0FERixFQVNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSztBQUFJQyxlQUFTLEVBQUUsT0FBZjtBQUF3QkMsZUFBUyxFQUFFO0FBQW5DLE9BQStDWixVQUEvQyxDQURQO0FBRUUsT0FBRyxFQUFFYSxvRUFBYyxDQUFDakIsSUFBRCxDQUZyQjtBQUdFLGFBQVMsRUFBQyxvQkFIWjtBQUlFLE9BQUcsRUFBQyxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWVFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxFQUFFSyxZQURUO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSwyQkFBdUIsRUFBRTtBQUFFYSxZQUFNLEVBQUVsQixJQUFJLENBQUNRLE9BQUwsQ0FBYUM7QUFBdkIsS0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLENBREY7QUF1QkQ7O0FBRWNWLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCByZWFkaW5nVGltZSBmcm9tIFwicmVhZGluZy10aW1lXCI7XG5pbXBvcnQgZmVhdHVyZWRJbWdTcmMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvZmVhdHVyZWRJbWdTcmNcIjtcblxuY29uc3QgZmFkZSA9IHsgb3BhY2l0eTogMSwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfTtcblxuZnVuY3Rpb24gQXJ0aWNsZSh7IHBvc3QgfSkge1xuICBjb25zdCB0aXRsZVByb3BzID0gdXNlU3ByaW5nKHsgLi4uZmFkZSwgZGVsYXk6IDAgfSk7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSB1c2VTcHJpbmcoeyAuLi5mYWRlLCBkZWxheTogMzAwIH0pO1xuICBjb25zdCBjb250ZW50UHJvcHMgPSB1c2VTcHJpbmcoeyAuLi5mYWRlLCBkZWxheTogNTAwIH0pO1xuICBjb25zdCB0aW1lVG9SZWFkID0gcmVhZGluZ1RpbWUocG9zdC5jb250ZW50LnJlbmRlcmVkKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXt0aXRsZVByb3BzfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZSBibG9nLXRpdGxlXCI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICB7bW9tZW50KHBvc3QuZGF0ZSkuZm9ybWF0KFwiTU1NIERvIFlZWVlcIil9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+IMK3IDwvc3Bhbj5cbiAgICAgICAgICB7dGltZVRvUmVhZC50ZXh0fVxuICAgICAgICA8L2g2PlxuICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICA8YW5pbWF0ZWQuaW1nXG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCIzMHJlbVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiwgLi4uaW1hZ2VQcm9wcyB9fVxuICAgICAgICBzcmM9e2ZlYXR1cmVkSW1nU3JjKHBvc3QpfVxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHctMTAwIG15LTRcIlxuICAgICAgICBhbHQ9XCJGZWF0dXJlZFwiXG4gICAgICAvPlxuICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICBzdHlsZT17Y29udGVudFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZCB9fVxuICAgICAgPjwvYW5pbWF0ZWQuZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Blog/Article/Article.js\n");

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Blog_Article_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog/Article/Article */ \"./components/Blog/Article/Article.js\");\nvar _jsxFileName = \"/Users/mroudnitski/dev/koala/pages/blog/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Post = ({\n  post\n}) => {\n  return __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"post mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/blog\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Back to posts\"), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Blog_Article_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    post: post,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })));\n};\n\nasync function getStaticPaths() {\n  const res = await fetch(`${\"https://michael-wp.skills.network/wp-json/wp/v2\"}/posts?_embed`);\n  const posts = await res.json();\n  const paths = posts.map(post => ({\n    params: {\n      slug: post.slug\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const res = await fetch(`${\"https://michael-wp.skills.network/wp-json/wp/v2\"}/posts?slug=${params.slug}&_embed`);\n  const post = await res.json();\n  return {\n    props: {\n      post: post[0]\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJwb3N0cyIsImpzb24iLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsInNsdWciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDekIsU0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsd0VBQUQ7QUFBUyxRQUFJLEVBQUVBLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQVNELENBVkQ7O0FBWU8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLGlEQUFtQixlQUF2QixDQUF2QjtBQUNBLFFBQU1DLEtBQUssR0FBRyxNQUFNSCxHQUFHLENBQUNJLElBQUosRUFBcEI7QUFFQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFXUixJQUFELEtBQVc7QUFDakNTLFVBQU0sRUFBRTtBQUFFQyxVQUFJLEVBQUVWLElBQUksQ0FBQ1U7QUFBYjtBQUR5QixHQUFYLENBQVYsQ0FBZDtBQUlBLFNBQU87QUFBRUgsU0FBRjtBQUFTSSxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUNEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFSDtBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1QLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLEdBQUVDLGlEQUFtQixlQUFjSyxNQUFNLENBQUNDLElBQUssU0FEM0IsQ0FBdkI7QUFHQSxRQUFNVixJQUFJLEdBQUcsTUFBTUUsR0FBRyxDQUFDSSxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUFFTyxTQUFLLEVBQUU7QUFBRWIsVUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBRDtBQUFaO0FBQVQsR0FBUDtBQUNEO0FBRWNELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZVwiO1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwicG9zdCBteC1hdXRvXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiPkJhY2sgdG8gcG9zdHM8L2E+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8QXJ0aWNsZSBwb3N0PXtwb3N0fSAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LldQX0FQSX0vcG9zdHM/X2VtYmVkYCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXG4gIH0pKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LldQX0FQSX0vcG9zdHM/c2x1Zz0ke3BhcmFtcy5zbHVnfSZfZW1iZWRgXG4gICk7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3RbMF0gfSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "./util/featuredImgSrc.js":
/*!********************************!*\
  !*** ./util/featuredImgSrc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return featuredImgSrc; });\n/**\n * retrieves the featured image's src uri\n * @param {JSON} postData WordPress post JSON\n */\nfunction featuredImgSrc(postData) {\n  return postData && postData[\"_embedded\"] && postData[\"_embedded\"][\"wp:featuredmedia\"] && postData[\"_embedded\"][\"wp:featuredmedia\"][0].source_url;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2ZlYXR1cmVkSW1nU3JjLmpzPzE0YWQiXSwibmFtZXMiOlsiZmVhdHVyZWRJbWdTcmMiLCJwb3N0RGF0YSIsInNvdXJjZV91cmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7OztBQUllLFNBQVNBLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQy9DLFNBQ0VBLFFBQVEsSUFDUkEsUUFBUSxDQUFDLFdBQUQsQ0FEUixJQUVBQSxRQUFRLENBQUMsV0FBRCxDQUFSLENBQXNCLGtCQUF0QixDQUZBLElBR0FBLFFBQVEsQ0FBQyxXQUFELENBQVIsQ0FBc0Isa0JBQXRCLEVBQTBDLENBQTFDLEVBQTZDQyxVQUovQztBQU1EIiwiZmlsZSI6Ii4vdXRpbC9mZWF0dXJlZEltZ1NyYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogcmV0cmlldmVzIHRoZSBmZWF0dXJlZCBpbWFnZSdzIHNyYyB1cmlcbiAqIEBwYXJhbSB7SlNPTn0gcG9zdERhdGEgV29yZFByZXNzIHBvc3QgSlNPTlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlZEltZ1NyYyhwb3N0RGF0YSkge1xuICByZXR1cm4gKFxuICAgIHBvc3REYXRhICYmXG4gICAgcG9zdERhdGFbXCJfZW1iZWRkZWRcIl0gJiZcbiAgICBwb3N0RGF0YVtcIl9lbWJlZGRlZFwiXVtcIndwOmZlYXR1cmVkbWVkaWFcIl0gJiZcbiAgICBwb3N0RGF0YVtcIl9lbWJlZGRlZFwiXVtcIndwOmZlYXR1cmVkbWVkaWFcIl1bMF0uc291cmNlX3VybFxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/featuredImgSrc.js\n");

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/blog/[slug].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mroudnitski/dev/koala/pages/blog/[slug].js */"./pages/blog/[slug].js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Col\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCI/NGNjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Col\n");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI/ZGM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Container\n");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIj9lZTg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXNwcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spring\n");

/***/ }),

/***/ "reading-time":
/*!*******************************!*\
  !*** external "reading-time" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reading-time\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkaW5nLXRpbWVcIj83NGRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWRpbmctdGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRpbmctdGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reading-time\n");

/***/ })

/******/ });