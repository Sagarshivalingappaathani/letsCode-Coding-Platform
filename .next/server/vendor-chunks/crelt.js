"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/crelt";
exports.ids = ["vendor-chunks/crelt"];
exports.modules = {

/***/ "(ssr)/./node_modules/crelt/dist/index.cjs":
/*!*******************************************!*\
  !*** ./node_modules/crelt/dist/index.cjs ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nfunction crelt() {\n  var elt = arguments[0];\n  if (typeof elt == \"string\") elt = document.createElement(elt);\n  var i = 1, next = arguments[1];\n  if (next && typeof next == \"object\" && next.nodeType == null && !Array.isArray(next)) {\n    for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {\n      var value = next[name];\n      if (typeof value == \"string\") elt.setAttribute(name, value);\n      else if (value != null) elt[name] = value;\n    }\n    i++;\n  }\n  for (; i < arguments.length; i++) add(elt, arguments[i]);\n  return elt\n}\n\nfunction add(elt, child) {\n  if (typeof child == \"string\") {\n    elt.appendChild(document.createTextNode(child));\n  } else if (child == null) ; else if (child.nodeType != null) {\n    elt.appendChild(child);\n  } else if (Array.isArray(child)) {\n    for (var i = 0; i < child.length; i++) add(elt, child[i]);\n  } else {\n    throw new RangeError(\"Unsupported child node: \" + child)\n  }\n}\n\nmodule.exports = crelt;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY3JlbHQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QjtBQUNBLElBQUk7QUFDSixvQkFBb0Isa0JBQWtCO0FBQ3RDLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzY29kZS8uL25vZGVfbW9kdWxlcy9jcmVsdC9kaXN0L2luZGV4LmNqcz8zMjA2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlbHQoKSB7XG4gIHZhciBlbHQgPSBhcmd1bWVudHNbMF07XG4gIGlmICh0eXBlb2YgZWx0ID09IFwic3RyaW5nXCIpIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWx0KTtcbiAgdmFyIGkgPSAxLCBuZXh0ID0gYXJndW1lbnRzWzFdO1xuICBpZiAobmV4dCAmJiB0eXBlb2YgbmV4dCA9PSBcIm9iamVjdFwiICYmIG5leHQubm9kZVR5cGUgPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShuZXh0KSkge1xuICAgIGZvciAodmFyIG5hbWUgaW4gbmV4dCkgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0LCBuYW1lKSkge1xuICAgICAgdmFyIHZhbHVlID0gbmV4dFtuYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikgZWx0LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSBlbHRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhZGQoZWx0LCBhcmd1bWVudHNbaV0pO1xuICByZXR1cm4gZWx0XG59XG5cbmZ1bmN0aW9uIGFkZChlbHQsIGNoaWxkKSB7XG4gIGlmICh0eXBlb2YgY2hpbGQgPT0gXCJzdHJpbmdcIikge1xuICAgIGVsdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICB9IGVsc2UgaWYgKGNoaWxkID09IG51bGwpIDsgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgIT0gbnVsbCkge1xuICAgIGVsdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkLmxlbmd0aDsgaSsrKSBhZGQoZWx0LCBjaGlsZFtpXSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVbnN1cHBvcnRlZCBjaGlsZCBub2RlOiBcIiArIGNoaWxkKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlbHQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/crelt/dist/index.cjs\n");

/***/ })

};
;