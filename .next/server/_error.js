"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n};\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsS0FBSyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBb0IsQ0FBQyxDQUFDO0FBQ2pFLFNBQVNELHNCQUFzQixDQUFDRyxHQUFHLEVBQUU7SUFDakMsT0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHO1FBQ2pDTCxPQUFPLEVBQUVLLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxNQUFNRSxXQUFXLEdBQUc7QUFDaEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsT0FBRyxFQUFFLDhCQUE4QjtBQUNuQyxPQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLE9BQUcsRUFBRSx1QkFBdUI7Q0FDL0I7QUFDRCxTQUFTQyxnQkFBZ0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUdDLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxJQUFJQSxHQUFHLENBQUNFLFVBQVUsR0FBR0YsR0FBRyxDQUFDRSxVQUFVLEdBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBLFVBQVU7S0FDYixDQUFDO0NBQ0w7QUFDRCxJQUFJQyxVQUFVO0FBQ2QsTUFBTUMsS0FBSyxTQUFTLENBQUNELFVBQVUsR0FBR1gsTUFBTSxDQUFDRCxPQUFPLENBQUNjLFNBQVMsQ0FBQztJQUN2REMsTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFSixVQUFVLEdBQUdLLFlBQVksRUFBRSxJQUFJLEdBQUcsR0FBRyxJ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a0JBQWtCO1FBQzNCQyxRQUFRLEVBQUUsTUFBTTtRQUNoQkMsVUFBVSxFQUFFLEdBQUc7UUFDZkwsYUFBYSxFQUFFLEtBQUs7S0FDdkI7SUFDRGIsRUFBRSxFQUFFO1FBQ0FpQixRQUFRLEVBQUUsTUFBTTtRQUNoQkMsVUFBVSxFQUFFLFFBQVE7UUFDcEJOLFVBQVUsRUFBRSxTQUFTO1FBQ3JCRSxNQUFNLEVBQUUsQ0FBQztRQUNURSxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0o7QUFDRDlDLGtCQUFlLEdBQUdlLEtBQUssQ0FBQyxDQUV4QixrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQtdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzPzE4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcbn07XG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG52YXIgX0NvbXBvbmVudDtcbmNsYXNzIEVycm9yIGV4dGVuZHMgKF9Db21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICR7d2l0aERhcmtNb2RlID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMjNweCAxMHB4IDAnLFxuICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiX0NvbXBvbmVudCIsIkVycm9yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwid2l0aERhcmtNb2RlIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();