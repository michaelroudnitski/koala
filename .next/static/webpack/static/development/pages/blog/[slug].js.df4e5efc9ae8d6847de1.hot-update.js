webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./components/Blog/Article/Article.js":
/*!********************************************!*\
  !*** ./components/Blog/Article/Article.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reading-time */ \"./node_modules/reading-time/index.js\");\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_featuredImgSrc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/featuredImgSrc */ \"./util/featuredImgSrc.js\");\n\n\nvar _jsxFileName = \"/Users/mroudnitski/dev/koala/components/Blog/Article/Article.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar fade = {\n  opacity: 1,\n  from: {\n    opacity: 0\n  }\n};\n\nfunction Article(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var titleProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 0\n  }));\n  var imageProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 300\n  }));\n  var contentProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])(_objectSpread(_objectSpread({}, fade), {}, {\n    delay: 500\n  }));\n  var timeToRead = reading_time__WEBPACK_IMPORTED_MODULE_4___default()(post.content.rendered);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: titleProps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-capitalize blog-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, post.title.rendered), __jsx(\"h6\", {\n    className: \"text-muted\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(post.date).format(\"MMM Do YYYY\"), __jsx(\"span\", {\n    className: \"text-warning\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \" \\xB7 \"), timeToRead.text)), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].img, {\n    style: _objectSpread({\n      maxHeight: \"30rem\",\n      objectFit: \"cover\"\n    }, imageProps),\n    src: Object(_util_featuredImgSrc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(post),\n    className: \"rounded w-100 my-4\",\n    alt: \"Featured\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: contentProps,\n    className: \"post-content\",\n    dangerouslySetInnerHTML: {\n      __html: post.content.rendered\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Article, \"HigttdlMvuojKL0AKz9WYhZiEa0=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlLmpzPzc2ZjYiXSwibmFtZXMiOlsiZmFkZSIsIm9wYWNpdHkiLCJmcm9tIiwiQXJ0aWNsZSIsInBvc3QiLCJ0aXRsZVByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJpbWFnZVByb3BzIiwiY29udGVudFByb3BzIiwidGltZVRvUmVhZCIsInJlYWRpbmdUaW1lIiwiY29udGVudCIsInJlbmRlcmVkIiwidGl0bGUiLCJtb21lbnQiLCJkYXRlIiwiZm9ybWF0IiwidGV4dCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsImZlYXR1cmVkSW1nU3JjIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQUVDLFNBQU8sRUFBRSxDQUFYO0FBQWNDLE1BQUksRUFBRTtBQUFFRCxXQUFPLEVBQUU7QUFBWDtBQUFwQixDQUFiOztBQUVBLFNBQVNFLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekIsTUFBTUMsVUFBVSxHQUFHQyw4REFBUyxpQ0FBTU4sSUFBTjtBQUFZTyxTQUFLLEVBQUU7QUFBbkIsS0FBNUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLDhEQUFTLGlDQUFNTixJQUFOO0FBQVlPLFNBQUssRUFBRTtBQUFuQixLQUE1QjtBQUNBLE1BQU1FLFlBQVksR0FBR0gsOERBQVMsaUNBQU1OLElBQU47QUFBWU8sU0FBSyxFQUFFO0FBQW5CLEtBQTlCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxtREFBVyxDQUFDUCxJQUFJLENBQUNRLE9BQUwsQ0FBYUMsUUFBZCxDQUE5QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFUixVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0QsSUFBSSxDQUFDVSxLQUFMLENBQVdELFFBQXZELENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsNkNBQU0sQ0FBQ1gsSUFBSSxDQUFDWSxJQUFOLENBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLGFBQXpCLENBREgsRUFFRTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHR1AsVUFBVSxDQUFDUSxJQUhkLENBRkYsQ0FERixFQVNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSztBQUFJQyxlQUFTLEVBQUUsT0FBZjtBQUF3QkMsZUFBUyxFQUFFO0FBQW5DLE9BQStDWixVQUEvQyxDQURQO0FBRUUsT0FBRyxFQUFFYSxvRUFBYyxDQUFDakIsSUFBRCxDQUZyQjtBQUdFLGFBQVMsRUFBQyxvQkFIWjtBQUlFLE9BQUcsRUFBQyxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWVFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxFQUFFSyxZQURUO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSwyQkFBdUIsRUFBRTtBQUFFYSxZQUFNLEVBQUVsQixJQUFJLENBQUNRLE9BQUwsQ0FBYUM7QUFBdkIsS0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLENBREY7QUF1QkQ7O0dBN0JRVixPO1VBQ1lHLHNELEVBQ0FBLHNELEVBQ0VBLHNEOzs7S0FIZEgsTztBQStCTUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHJlYWRpbmdUaW1lIGZyb20gXCJyZWFkaW5nLXRpbWVcIjtcbmltcG9ydCBmZWF0dXJlZEltZ1NyYyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9mZWF0dXJlZEltZ1NyY1wiO1xuXG5jb25zdCBmYWRlID0geyBvcGFjaXR5OiAxLCBmcm9tOiB7IG9wYWNpdHk6IDAgfSB9O1xuXG5mdW5jdGlvbiBBcnRpY2xlKHsgcG9zdCB9KSB7XG4gIGNvbnN0IHRpdGxlUHJvcHMgPSB1c2VTcHJpbmcoeyAuLi5mYWRlLCBkZWxheTogMCB9KTtcbiAgY29uc3QgaW1hZ2VQcm9wcyA9IHVzZVNwcmluZyh7IC4uLmZhZGUsIGRlbGF5OiAzMDAgfSk7XG4gIGNvbnN0IGNvbnRlbnRQcm9wcyA9IHVzZVNwcmluZyh7IC4uLmZhZGUsIGRlbGF5OiA1MDAgfSk7XG4gIGNvbnN0IHRpbWVUb1JlYWQgPSByZWFkaW5nVGltZShwb3N0LmNvbnRlbnQucmVuZGVyZWQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3RpdGxlUHJvcHN9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplIGJsb2ctdGl0bGVcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gxPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgIHttb21lbnQocG9zdC5kYXRlKS5mb3JtYXQoXCJNTU0gRG8gWVlZWVwiKX1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj4gwrcgPC9zcGFuPlxuICAgICAgICAgIHt0aW1lVG9SZWFkLnRleHR9XG4gICAgICAgIDwvaDY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDxhbmltYXRlZC5pbWdcbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjMwcmVtXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiLCAuLi5pbWFnZVByb3BzIH19XG4gICAgICAgIHNyYz17ZmVhdHVyZWRJbWdTcmMocG9zdCl9XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgdy0xMDAgbXktNFwiXG4gICAgICAgIGFsdD1cIkZlYXR1cmVkXCJcbiAgICAgIC8+XG4gICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgIHN0eWxlPXtjb250ZW50UHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50LnJlbmRlcmVkIH19XG4gICAgICA+PC9hbmltYXRlZC5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Blog/Article/Article.js\n");

/***/ }),

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/dom-serializer/foreignNames.json":
false,

/***/ "./node_modules/dom-serializer/index.js":
false,

/***/ "./node_modules/dom-serializer/node_modules/domelementtype/lib/index.js":
false,

/***/ "./node_modules/domelementtype/index.js":
false,

/***/ "./node_modules/entities/lib/decode.js":
false,

/***/ "./node_modules/entities/lib/decode_codepoint.js":
false,

/***/ "./node_modules/entities/lib/encode.js":
false,

/***/ "./node_modules/entities/lib/index.js":
false,

/***/ "./node_modules/entities/lib/maps/decode.json":
false,

/***/ "./node_modules/entities/lib/maps/entities.json":
false,

/***/ "./node_modules/entities/lib/maps/legacy.json":
false,

/***/ "./node_modules/entities/lib/maps/xml.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/HtmlParser.js":
false,

/***/ "./node_modules/react-html-parser/lib/convertNodeToElement.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/attributes/BooleanAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/attributes/ReactAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/dom/elements/VoidElements.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/StyleElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/TagElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/TextElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/UnsupportedElementType.js":
false,

/***/ "./node_modules/react-html-parser/lib/elementTypes/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/index.js":
false,

/***/ "./node_modules/react-html-parser/lib/processNodes.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/htmlAttributesToReact.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/inlineStyleToObject.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/isEmptyTextNode.js":
false,

/***/ "./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domhandler/index.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domhandler/lib/element.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domhandler/lib/node.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/index.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/helpers.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/legacy.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/manipulation.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/querying.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/stringify.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/domutils/lib/traversal.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/entities/lib/decode_codepoint.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/entities/maps/decode.json":
false,

/***/ "./node_modules/react-html-parser/node_modules/entities/maps/entities.json":
false,

/***/ "./node_modules/react-html-parser/node_modules/entities/maps/legacy.json":
false,

/***/ "./node_modules/react-html-parser/node_modules/entities/maps/xml.json":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/CollectingHandler.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/FeedHandler.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/Parser.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/ProxyHandler.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/Stream.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/Tokenizer.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/WritableStream.js":
false,

/***/ "./node_modules/react-html-parser/node_modules/htmlparser2/lib/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ 2:
false

})