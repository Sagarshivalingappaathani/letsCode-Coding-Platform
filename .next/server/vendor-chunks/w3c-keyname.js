"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/w3c-keyname";
exports.ids = ["vendor-chunks/w3c-keyname"];
exports.modules = {

/***/ "(ssr)/./node_modules/w3c-keyname/index.cjs":
/*!********************************************!*\
  !*** ./node_modules/w3c-keyname/index.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar base = {\n  8: \"Backspace\",\n  9: \"Tab\",\n  10: \"Enter\",\n  12: \"NumLock\",\n  13: \"Enter\",\n  16: \"Shift\",\n  17: \"Control\",\n  18: \"Alt\",\n  20: \"CapsLock\",\n  27: \"Escape\",\n  32: \" \",\n  33: \"PageUp\",\n  34: \"PageDown\",\n  35: \"End\",\n  36: \"Home\",\n  37: \"ArrowLeft\",\n  38: \"ArrowUp\",\n  39: \"ArrowRight\",\n  40: \"ArrowDown\",\n  44: \"PrintScreen\",\n  45: \"Insert\",\n  46: \"Delete\",\n  59: \";\",\n  61: \"=\",\n  91: \"Meta\",\n  92: \"Meta\",\n  106: \"*\",\n  107: \"+\",\n  108: \",\",\n  109: \"-\",\n  110: \".\",\n  111: \"/\",\n  144: \"NumLock\",\n  145: \"ScrollLock\",\n  160: \"Shift\",\n  161: \"Shift\",\n  162: \"Control\",\n  163: \"Control\",\n  164: \"Alt\",\n  165: \"Alt\",\n  173: \"-\",\n  186: \";\",\n  187: \"=\",\n  188: \",\",\n  189: \"-\",\n  190: \".\",\n  191: \"/\",\n  192: \"`\",\n  219: \"[\",\n  220: \"\\\\\",\n  221: \"]\",\n  222: \"'\"\n};\n\nvar shift = {\n  48: \")\",\n  49: \"!\",\n  50: \"@\",\n  51: \"#\",\n  52: \"$\",\n  53: \"%\",\n  54: \"^\",\n  55: \"&\",\n  56: \"*\",\n  57: \"(\",\n  59: \":\",\n  61: \"+\",\n  173: \"_\",\n  186: \":\",\n  187: \"+\",\n  188: \"<\",\n  189: \"_\",\n  190: \">\",\n  191: \"?\",\n  192: \"~\",\n  219: \"{\",\n  220: \"|\",\n  221: \"}\",\n  222: \"\\\"\"\n};\n\nvar mac = typeof navigator != \"undefined\" && /Mac/.test(navigator.platform);\nvar ie = typeof navigator != \"undefined\" && /MSIE \\d|Trident\\/(?:[7-9]|\\d{2,})\\..*rv:(\\d+)/.exec(navigator.userAgent);\n\n// Fill in the digit keys\nfor (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);\n\n// The function keys\nfor (var i = 1; i <= 24; i++) base[i + 111] = \"F\" + i;\n\n// And the alphabetic keys\nfor (var i = 65; i <= 90; i++) {\n  base[i] = String.fromCharCode(i + 32);\n  shift[i] = String.fromCharCode(i);\n}\n\n// For each code that doesn't have a shift-equivalent, copy the base name\nfor (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];\n\nfunction keyName(event) {\n  // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.\n  // On IE, shift effect is never included in `.key`.\n  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey ||\n      ie && event.shiftKey && event.key && event.key.length == 1 ||\n      event.key == \"Unidentified\";\n  var name = (!ignoreKey && event.key) ||\n    (event.shiftKey ? shift : base)[event.keyCode] ||\n    event.key || \"Unidentified\";\n  // Edge sometimes produces wrong names (Issue #3)\n  if (name == \"Esc\") name = \"Escape\";\n  if (name == \"Del\") name = \"Delete\";\n  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/\n  if (name == \"Left\") name = \"ArrowLeft\";\n  if (name == \"Up\") name = \"ArrowUp\";\n  if (name == \"Right\") name = \"ArrowRight\";\n  if (name == \"Down\") name = \"ArrowDown\";\n  return name\n}\n\nexports.base = base;\nexports.keyName = keyName;\nexports.shift = shift;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguY2pzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxHQUFHOztBQUU3RTtBQUNBLGdCQUFnQixRQUFROztBQUV4QjtBQUNBLGdCQUFnQixTQUFTOztBQUV6QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixlQUFlO0FBQ2YsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHNjb2RlLy4vbm9kZV9tb2R1bGVzL3czYy1rZXluYW1lL2luZGV4LmNqcz8xNTJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJhc2UgPSB7XG4gIDg6IFwiQmFja3NwYWNlXCIsXG4gIDk6IFwiVGFiXCIsXG4gIDEwOiBcIkVudGVyXCIsXG4gIDEyOiBcIk51bUxvY2tcIixcbiAgMTM6IFwiRW50ZXJcIixcbiAgMTY6IFwiU2hpZnRcIixcbiAgMTc6IFwiQ29udHJvbFwiLFxuICAxODogXCJBbHRcIixcbiAgMjA6IFwiQ2Fwc0xvY2tcIixcbiAgMjc6IFwiRXNjYXBlXCIsXG4gIDMyOiBcIiBcIixcbiAgMzM6IFwiUGFnZVVwXCIsXG4gIDM0OiBcIlBhZ2VEb3duXCIsXG4gIDM1OiBcIkVuZFwiLFxuICAzNjogXCJIb21lXCIsXG4gIDM3OiBcIkFycm93TGVmdFwiLFxuICAzODogXCJBcnJvd1VwXCIsXG4gIDM5OiBcIkFycm93UmlnaHRcIixcbiAgNDA6IFwiQXJyb3dEb3duXCIsXG4gIDQ0OiBcIlByaW50U2NyZWVuXCIsXG4gIDQ1OiBcIkluc2VydFwiLFxuICA0NjogXCJEZWxldGVcIixcbiAgNTk6IFwiO1wiLFxuICA2MTogXCI9XCIsXG4gIDkxOiBcIk1ldGFcIixcbiAgOTI6IFwiTWV0YVwiLFxuICAxMDY6IFwiKlwiLFxuICAxMDc6IFwiK1wiLFxuICAxMDg6IFwiLFwiLFxuICAxMDk6IFwiLVwiLFxuICAxMTA6IFwiLlwiLFxuICAxMTE6IFwiL1wiLFxuICAxNDQ6IFwiTnVtTG9ja1wiLFxuICAxNDU6IFwiU2Nyb2xsTG9ja1wiLFxuICAxNjA6IFwiU2hpZnRcIixcbiAgMTYxOiBcIlNoaWZ0XCIsXG4gIDE2MjogXCJDb250cm9sXCIsXG4gIDE2MzogXCJDb250cm9sXCIsXG4gIDE2NDogXCJBbHRcIixcbiAgMTY1OiBcIkFsdFwiLFxuICAxNzM6IFwiLVwiLFxuICAxODY6IFwiO1wiLFxuICAxODc6IFwiPVwiLFxuICAxODg6IFwiLFwiLFxuICAxODk6IFwiLVwiLFxuICAxOTA6IFwiLlwiLFxuICAxOTE6IFwiL1wiLFxuICAxOTI6IFwiYFwiLFxuICAyMTk6IFwiW1wiLFxuICAyMjA6IFwiXFxcXFwiLFxuICAyMjE6IFwiXVwiLFxuICAyMjI6IFwiJ1wiXG59O1xuXG52YXIgc2hpZnQgPSB7XG4gIDQ4OiBcIilcIixcbiAgNDk6IFwiIVwiLFxuICA1MDogXCJAXCIsXG4gIDUxOiBcIiNcIixcbiAgNTI6IFwiJFwiLFxuICA1MzogXCIlXCIsXG4gIDU0OiBcIl5cIixcbiAgNTU6IFwiJlwiLFxuICA1NjogXCIqXCIsXG4gIDU3OiBcIihcIixcbiAgNTk6IFwiOlwiLFxuICA2MTogXCIrXCIsXG4gIDE3MzogXCJfXCIsXG4gIDE4NjogXCI6XCIsXG4gIDE4NzogXCIrXCIsXG4gIDE4ODogXCI8XCIsXG4gIDE4OTogXCJfXCIsXG4gIDE5MDogXCI+XCIsXG4gIDE5MTogXCI/XCIsXG4gIDE5MjogXCJ+XCIsXG4gIDIxOTogXCJ7XCIsXG4gIDIyMDogXCJ8XCIsXG4gIDIyMTogXCJ9XCIsXG4gIDIyMjogXCJcXFwiXCJcbn07XG5cbnZhciBtYWMgPSB0eXBlb2YgbmF2aWdhdG9yICE9IFwidW5kZWZpbmVkXCIgJiYgL01hYy8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xudmFyIGllID0gdHlwZW9mIG5hdmlnYXRvciAhPSBcInVuZGVmaW5lZFwiICYmIC9NU0lFIFxcZHxUcmlkZW50XFwvKD86WzctOV18XFxkezIsfSlcXC4uKnJ2OihcXGQrKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLy8gRmlsbCBpbiB0aGUgZGlnaXQga2V5c1xuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSBiYXNlWzQ4ICsgaV0gPSBiYXNlWzk2ICsgaV0gPSBTdHJpbmcoaSk7XG5cbi8vIFRoZSBmdW5jdGlvbiBrZXlzXG5mb3IgKHZhciBpID0gMTsgaSA8PSAyNDsgaSsrKSBiYXNlW2kgKyAxMTFdID0gXCJGXCIgKyBpO1xuXG4vLyBBbmQgdGhlIGFscGhhYmV0aWMga2V5c1xuZm9yICh2YXIgaSA9IDY1OyBpIDw9IDkwOyBpKyspIHtcbiAgYmFzZVtpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDMyKTtcbiAgc2hpZnRbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xufVxuXG4vLyBGb3IgZWFjaCBjb2RlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2hpZnQtZXF1aXZhbGVudCwgY29weSB0aGUgYmFzZSBuYW1lXG5mb3IgKHZhciBjb2RlIGluIGJhc2UpIGlmICghc2hpZnQuaGFzT3duUHJvcGVydHkoY29kZSkpIHNoaWZ0W2NvZGVdID0gYmFzZVtjb2RlXTtcblxuZnVuY3Rpb24ga2V5TmFtZShldmVudCkge1xuICAvLyBPbiBtYWNPUywga2V5cyBoZWxkIHdpdGggU2hpZnQgYW5kIENtZCBkb24ndCByZWZsZWN0IHRoZSBlZmZlY3Qgb2YgU2hpZnQgaW4gYC5rZXlgLlxuICAvLyBPbiBJRSwgc2hpZnQgZWZmZWN0IGlzIG5ldmVyIGluY2x1ZGVkIGluIGAua2V5YC5cbiAgdmFyIGlnbm9yZUtleSA9IG1hYyAmJiBldmVudC5tZXRhS2V5ICYmIGV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5hbHRLZXkgfHxcbiAgICAgIGllICYmIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSAmJiBldmVudC5rZXkubGVuZ3RoID09IDEgfHxcbiAgICAgIGV2ZW50LmtleSA9PSBcIlVuaWRlbnRpZmllZFwiO1xuICB2YXIgbmFtZSA9ICghaWdub3JlS2V5ICYmIGV2ZW50LmtleSkgfHxcbiAgICAoZXZlbnQuc2hpZnRLZXkgPyBzaGlmdCA6IGJhc2UpW2V2ZW50LmtleUNvZGVdIHx8XG4gICAgZXZlbnQua2V5IHx8IFwiVW5pZGVudGlmaWVkXCI7XG4gIC8vIEVkZ2Ugc29tZXRpbWVzIHByb2R1Y2VzIHdyb25nIG5hbWVzIChJc3N1ZSAjMylcbiAgaWYgKG5hbWUgPT0gXCJFc2NcIikgbmFtZSA9IFwiRXNjYXBlXCI7XG4gIGlmIChuYW1lID09IFwiRGVsXCIpIG5hbWUgPSBcIkRlbGV0ZVwiO1xuICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy84ODYwNTcxL1xuICBpZiAobmFtZSA9PSBcIkxlZnRcIikgbmFtZSA9IFwiQXJyb3dMZWZ0XCI7XG4gIGlmIChuYW1lID09IFwiVXBcIikgbmFtZSA9IFwiQXJyb3dVcFwiO1xuICBpZiAobmFtZSA9PSBcIlJpZ2h0XCIpIG5hbWUgPSBcIkFycm93UmlnaHRcIjtcbiAgaWYgKG5hbWUgPT0gXCJEb3duXCIpIG5hbWUgPSBcIkFycm93RG93blwiO1xuICByZXR1cm4gbmFtZVxufVxuXG5leHBvcnRzLmJhc2UgPSBiYXNlO1xuZXhwb3J0cy5rZXlOYW1lID0ga2V5TmFtZTtcbmV4cG9ydHMuc2hpZnQgPSBzaGlmdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/w3c-keyname/index.cjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/w3c-keyname/index.js":
/*!*******************************************!*\
  !*** ./node_modules/w3c-keyname/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   base: () => (/* binding */ base),\n/* harmony export */   keyName: () => (/* binding */ keyName),\n/* harmony export */   shift: () => (/* binding */ shift)\n/* harmony export */ });\nvar base = {\n  8: \"Backspace\",\n  9: \"Tab\",\n  10: \"Enter\",\n  12: \"NumLock\",\n  13: \"Enter\",\n  16: \"Shift\",\n  17: \"Control\",\n  18: \"Alt\",\n  20: \"CapsLock\",\n  27: \"Escape\",\n  32: \" \",\n  33: \"PageUp\",\n  34: \"PageDown\",\n  35: \"End\",\n  36: \"Home\",\n  37: \"ArrowLeft\",\n  38: \"ArrowUp\",\n  39: \"ArrowRight\",\n  40: \"ArrowDown\",\n  44: \"PrintScreen\",\n  45: \"Insert\",\n  46: \"Delete\",\n  59: \";\",\n  61: \"=\",\n  91: \"Meta\",\n  92: \"Meta\",\n  106: \"*\",\n  107: \"+\",\n  108: \",\",\n  109: \"-\",\n  110: \".\",\n  111: \"/\",\n  144: \"NumLock\",\n  145: \"ScrollLock\",\n  160: \"Shift\",\n  161: \"Shift\",\n  162: \"Control\",\n  163: \"Control\",\n  164: \"Alt\",\n  165: \"Alt\",\n  173: \"-\",\n  186: \";\",\n  187: \"=\",\n  188: \",\",\n  189: \"-\",\n  190: \".\",\n  191: \"/\",\n  192: \"`\",\n  219: \"[\",\n  220: \"\\\\\",\n  221: \"]\",\n  222: \"'\"\n}\n\nvar shift = {\n  48: \")\",\n  49: \"!\",\n  50: \"@\",\n  51: \"#\",\n  52: \"$\",\n  53: \"%\",\n  54: \"^\",\n  55: \"&\",\n  56: \"*\",\n  57: \"(\",\n  59: \":\",\n  61: \"+\",\n  173: \"_\",\n  186: \":\",\n  187: \"+\",\n  188: \"<\",\n  189: \"_\",\n  190: \">\",\n  191: \"?\",\n  192: \"~\",\n  219: \"{\",\n  220: \"|\",\n  221: \"}\",\n  222: \"\\\"\"\n}\n\nvar mac = typeof navigator != \"undefined\" && /Mac/.test(navigator.platform)\nvar ie = typeof navigator != \"undefined\" && /MSIE \\d|Trident\\/(?:[7-9]|\\d{2,})\\..*rv:(\\d+)/.exec(navigator.userAgent)\n\n// Fill in the digit keys\nfor (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i)\n\n// The function keys\nfor (var i = 1; i <= 24; i++) base[i + 111] = \"F\" + i\n\n// And the alphabetic keys\nfor (var i = 65; i <= 90; i++) {\n  base[i] = String.fromCharCode(i + 32)\n  shift[i] = String.fromCharCode(i)\n}\n\n// For each code that doesn't have a shift-equivalent, copy the base name\nfor (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code]\n\nfunction keyName(event) {\n  // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.\n  // On IE, shift effect is never included in `.key`.\n  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey ||\n      ie && event.shiftKey && event.key && event.key.length == 1 ||\n      event.key == \"Unidentified\"\n  var name = (!ignoreKey && event.key) ||\n    (event.shiftKey ? shift : base)[event.keyCode] ||\n    event.key || \"Unidentified\"\n  // Edge sometimes produces wrong names (Issue #3)\n  if (name == \"Esc\") name = \"Escape\"\n  if (name == \"Del\") name = \"Delete\"\n  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/\n  if (name == \"Left\") name = \"ArrowLeft\"\n  if (name == \"Up\") name = \"ArrowUp\"\n  if (name == \"Right\") name = \"ArrowRight\"\n  if (name == \"Down\") name = \"ArrowDown\"\n  return name\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxHQUFHOztBQUU3RTtBQUNBLGdCQUFnQixRQUFROztBQUV4QjtBQUNBLGdCQUFnQixTQUFTOztBQUV6QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0c2NvZGUvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguanM/MjZiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGJhc2UgPSB7XG4gIDg6IFwiQmFja3NwYWNlXCIsXG4gIDk6IFwiVGFiXCIsXG4gIDEwOiBcIkVudGVyXCIsXG4gIDEyOiBcIk51bUxvY2tcIixcbiAgMTM6IFwiRW50ZXJcIixcbiAgMTY6IFwiU2hpZnRcIixcbiAgMTc6IFwiQ29udHJvbFwiLFxuICAxODogXCJBbHRcIixcbiAgMjA6IFwiQ2Fwc0xvY2tcIixcbiAgMjc6IFwiRXNjYXBlXCIsXG4gIDMyOiBcIiBcIixcbiAgMzM6IFwiUGFnZVVwXCIsXG4gIDM0OiBcIlBhZ2VEb3duXCIsXG4gIDM1OiBcIkVuZFwiLFxuICAzNjogXCJIb21lXCIsXG4gIDM3OiBcIkFycm93TGVmdFwiLFxuICAzODogXCJBcnJvd1VwXCIsXG4gIDM5OiBcIkFycm93UmlnaHRcIixcbiAgNDA6IFwiQXJyb3dEb3duXCIsXG4gIDQ0OiBcIlByaW50U2NyZWVuXCIsXG4gIDQ1OiBcIkluc2VydFwiLFxuICA0NjogXCJEZWxldGVcIixcbiAgNTk6IFwiO1wiLFxuICA2MTogXCI9XCIsXG4gIDkxOiBcIk1ldGFcIixcbiAgOTI6IFwiTWV0YVwiLFxuICAxMDY6IFwiKlwiLFxuICAxMDc6IFwiK1wiLFxuICAxMDg6IFwiLFwiLFxuICAxMDk6IFwiLVwiLFxuICAxMTA6IFwiLlwiLFxuICAxMTE6IFwiL1wiLFxuICAxNDQ6IFwiTnVtTG9ja1wiLFxuICAxNDU6IFwiU2Nyb2xsTG9ja1wiLFxuICAxNjA6IFwiU2hpZnRcIixcbiAgMTYxOiBcIlNoaWZ0XCIsXG4gIDE2MjogXCJDb250cm9sXCIsXG4gIDE2MzogXCJDb250cm9sXCIsXG4gIDE2NDogXCJBbHRcIixcbiAgMTY1OiBcIkFsdFwiLFxuICAxNzM6IFwiLVwiLFxuICAxODY6IFwiO1wiLFxuICAxODc6IFwiPVwiLFxuICAxODg6IFwiLFwiLFxuICAxODk6IFwiLVwiLFxuICAxOTA6IFwiLlwiLFxuICAxOTE6IFwiL1wiLFxuICAxOTI6IFwiYFwiLFxuICAyMTk6IFwiW1wiLFxuICAyMjA6IFwiXFxcXFwiLFxuICAyMjE6IFwiXVwiLFxuICAyMjI6IFwiJ1wiXG59XG5cbmV4cG9ydCB2YXIgc2hpZnQgPSB7XG4gIDQ4OiBcIilcIixcbiAgNDk6IFwiIVwiLFxuICA1MDogXCJAXCIsXG4gIDUxOiBcIiNcIixcbiAgNTI6IFwiJFwiLFxuICA1MzogXCIlXCIsXG4gIDU0OiBcIl5cIixcbiAgNTU6IFwiJlwiLFxuICA1NjogXCIqXCIsXG4gIDU3OiBcIihcIixcbiAgNTk6IFwiOlwiLFxuICA2MTogXCIrXCIsXG4gIDE3MzogXCJfXCIsXG4gIDE4NjogXCI6XCIsXG4gIDE4NzogXCIrXCIsXG4gIDE4ODogXCI8XCIsXG4gIDE4OTogXCJfXCIsXG4gIDE5MDogXCI+XCIsXG4gIDE5MTogXCI/XCIsXG4gIDE5MjogXCJ+XCIsXG4gIDIxOTogXCJ7XCIsXG4gIDIyMDogXCJ8XCIsXG4gIDIyMTogXCJ9XCIsXG4gIDIyMjogXCJcXFwiXCJcbn1cblxudmFyIG1hYyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gXCJ1bmRlZmluZWRcIiAmJiAvTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSlcbnZhciBpZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBcXGR8VHJpZGVudFxcLyg/Ols3LTldfFxcZHsyLH0pXFwuLipydjooXFxkKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClcblxuLy8gRmlsbCBpbiB0aGUgZGlnaXQga2V5c1xuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSBiYXNlWzQ4ICsgaV0gPSBiYXNlWzk2ICsgaV0gPSBTdHJpbmcoaSlcblxuLy8gVGhlIGZ1bmN0aW9uIGtleXNcbmZvciAodmFyIGkgPSAxOyBpIDw9IDI0OyBpKyspIGJhc2VbaSArIDExMV0gPSBcIkZcIiArIGlcblxuLy8gQW5kIHRoZSBhbHBoYWJldGljIGtleXNcbmZvciAodmFyIGkgPSA2NTsgaSA8PSA5MDsgaSsrKSB7XG4gIGJhc2VbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyAzMilcbiAgc2hpZnRbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG59XG5cbi8vIEZvciBlYWNoIGNvZGUgdGhhdCBkb2Vzbid0IGhhdmUgYSBzaGlmdC1lcXVpdmFsZW50LCBjb3B5IHRoZSBiYXNlIG5hbWVcbmZvciAodmFyIGNvZGUgaW4gYmFzZSkgaWYgKCFzaGlmdC5oYXNPd25Qcm9wZXJ0eShjb2RlKSkgc2hpZnRbY29kZV0gPSBiYXNlW2NvZGVdXG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlOYW1lKGV2ZW50KSB7XG4gIC8vIE9uIG1hY09TLCBrZXlzIGhlbGQgd2l0aCBTaGlmdCBhbmQgQ21kIGRvbid0IHJlZmxlY3QgdGhlIGVmZmVjdCBvZiBTaGlmdCBpbiBgLmtleWAuXG4gIC8vIE9uIElFLCBzaGlmdCBlZmZlY3QgaXMgbmV2ZXIgaW5jbHVkZWQgaW4gYC5rZXlgLlxuICB2YXIgaWdub3JlS2V5ID0gbWFjICYmIGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQuc2hpZnRLZXkgJiYgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50LmFsdEtleSB8fFxuICAgICAgaWUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT0gMSB8fFxuICAgICAgZXZlbnQua2V5ID09IFwiVW5pZGVudGlmaWVkXCJcbiAgdmFyIG5hbWUgPSAoIWlnbm9yZUtleSAmJiBldmVudC5rZXkpIHx8XG4gICAgKGV2ZW50LnNoaWZ0S2V5ID8gc2hpZnQgOiBiYXNlKVtldmVudC5rZXlDb2RlXSB8fFxuICAgIGV2ZW50LmtleSB8fCBcIlVuaWRlbnRpZmllZFwiXG4gIC8vIEVkZ2Ugc29tZXRpbWVzIHByb2R1Y2VzIHdyb25nIG5hbWVzIChJc3N1ZSAjMylcbiAgaWYgKG5hbWUgPT0gXCJFc2NcIikgbmFtZSA9IFwiRXNjYXBlXCJcbiAgaWYgKG5hbWUgPT0gXCJEZWxcIikgbmFtZSA9IFwiRGVsZXRlXCJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODg2MDU3MS9cbiAgaWYgKG5hbWUgPT0gXCJMZWZ0XCIpIG5hbWUgPSBcIkFycm93TGVmdFwiXG4gIGlmIChuYW1lID09IFwiVXBcIikgbmFtZSA9IFwiQXJyb3dVcFwiXG4gIGlmIChuYW1lID09IFwiUmlnaHRcIikgbmFtZSA9IFwiQXJyb3dSaWdodFwiXG4gIGlmIChuYW1lID09IFwiRG93blwiKSBuYW1lID0gXCJBcnJvd0Rvd25cIlxuICByZXR1cm4gbmFtZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/w3c-keyname/index.js\n");

/***/ })

};
;