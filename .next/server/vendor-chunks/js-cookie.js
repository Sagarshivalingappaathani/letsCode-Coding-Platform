/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/js-cookie";
exports.ids = ["vendor-chunks/js-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/***/ (function(module) {

eval("/*! js-cookie v3.0.1 | MIT */\n;\n(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  /* eslint-disable no-var */\n  function assign (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        target[key] = source[key];\n      }\n    }\n    return target\n  }\n  /* eslint-enable no-var */\n\n  /* eslint-disable no-var */\n  var defaultConverter = {\n    read: function (value) {\n      if (value[0] === '\"') {\n        value = value.slice(1, -1);\n      }\n      return value.replace(/(%[\\dA-F]{2})+/gi, decodeURIComponent)\n    },\n    write: function (value) {\n      return encodeURIComponent(value).replace(\n        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,\n        decodeURIComponent\n      )\n    }\n  };\n  /* eslint-enable no-var */\n\n  /* eslint-disable no-var */\n\n  function init (converter, defaultAttributes) {\n    function set (key, value, attributes) {\n      if (typeof document === 'undefined') {\n        return\n      }\n\n      attributes = assign({}, defaultAttributes, attributes);\n\n      if (typeof attributes.expires === 'number') {\n        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);\n      }\n      if (attributes.expires) {\n        attributes.expires = attributes.expires.toUTCString();\n      }\n\n      key = encodeURIComponent(key)\n        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)\n        .replace(/[()]/g, escape);\n\n      var stringifiedAttributes = '';\n      for (var attributeName in attributes) {\n        if (!attributes[attributeName]) {\n          continue\n        }\n\n        stringifiedAttributes += '; ' + attributeName;\n\n        if (attributes[attributeName] === true) {\n          continue\n        }\n\n        // Considers RFC 6265 section 5.2:\n        // ...\n        // 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n        //     character:\n        // Consume the characters of the unparsed-attributes up to,\n        // not including, the first %x3B (\";\") character.\n        // ...\n        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n      }\n\n      return (document.cookie =\n        key + '=' + converter.write(value, key) + stringifiedAttributes)\n    }\n\n    function get (key) {\n      if (typeof document === 'undefined' || (arguments.length && !key)) {\n        return\n      }\n\n      // To prevent the for loop in the first place assign an empty array\n      // in case there are no cookies at all.\n      var cookies = document.cookie ? document.cookie.split('; ') : [];\n      var jar = {};\n      for (var i = 0; i < cookies.length; i++) {\n        var parts = cookies[i].split('=');\n        var value = parts.slice(1).join('=');\n\n        try {\n          var foundKey = decodeURIComponent(parts[0]);\n          jar[foundKey] = converter.read(value, foundKey);\n\n          if (key === foundKey) {\n            break\n          }\n        } catch (e) {}\n      }\n\n      return key ? jar[key] : jar\n    }\n\n    return Object.create(\n      {\n        set: set,\n        get: get,\n        remove: function (key, attributes) {\n          set(\n            key,\n            '',\n            assign({}, attributes, {\n              expires: -1\n            })\n          );\n        },\n        withAttributes: function (attributes) {\n          return init(this.converter, assign({}, this.attributes, attributes))\n        },\n        withConverter: function (converter) {\n          return init(assign({}, this.converter, converter), this.attributes)\n        }\n      },\n      {\n        attributes: { value: Object.freeze(defaultAttributes) },\n        converter: { value: Object.freeze(converter) }\n      }\n    )\n  }\n\n  var api = init(defaultConverter, { path: '/' });\n  /* eslint-enable no-var */\n\n  return api;\n\n})));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanMtY29va2llL2Rpc3QvanMuY29va2llLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxDQUtLO0FBQ1AsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSx5RUFBeUU7QUFDekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQ0FBK0M7QUFDL0MsU0FBUztBQUNUO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxXQUFXO0FBQ2hEOztBQUVBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzY29kZS8uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvZGlzdC9qcy5jb29raWUuanM/MjlkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEganMtY29va2llIHYzLjAuMSB8IE1JVCAqL1xuO1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnbG9iYWwuQ29va2llcztcbiAgICB2YXIgZXhwb3J0cyA9IGdsb2JhbC5Db29raWVzID0gZmFjdG9yeSgpO1xuICAgIGV4cG9ydHMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHsgZ2xvYmFsLkNvb2tpZXMgPSBjdXJyZW50OyByZXR1cm4gZXhwb3J0czsgfTtcbiAgfSgpKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbiAgZnVuY3Rpb24gYXNzaWduICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4gIHZhciBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHJlYWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSwgLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuICAgIH0sXG4gICAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZShcbiAgICAgICAgLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLFxuICAgICAgICBkZWNvZGVVUklDb21wb25lbnRcbiAgICAgIClcbiAgICB9XG4gIH07XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbiAgZnVuY3Rpb24gaW5pdCAoY29udmVydGVyLCBkZWZhdWx0QXR0cmlidXRlcykge1xuICAgIGZ1bmN0aW9uIHNldCAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGF0dHJpYnV0ZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKTtcblxuICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlNSk7XG4gICAgICB9XG4gICAgICBpZiAoYXR0cmlidXRlcy5leHBpcmVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICAucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG4gICAgICAgIC5yZXBsYWNlKC9bKCldL2csIGVzY2FwZSk7XG5cbiAgICAgIHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcbiAgICAgIGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcbiAgICAgICAgLy8gICAgIGNoYXJhY3RlcjpcbiAgICAgICAgLy8gQ29uc3VtZSB0aGUgY2hhcmFjdGVycyBvZiB0aGUgdW5wYXJzZWQtYXR0cmlidXRlcyB1cCB0byxcbiAgICAgICAgLy8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS5zcGxpdCgnOycpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgIGtleSArICc9JyArIGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQgKGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgKGFyZ3VtZW50cy5sZW5ndGggJiYgIWtleSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcbiAgICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcbiAgICAgIHZhciBqYXIgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBmb3VuZEtleSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSk7XG4gICAgICAgICAgamFyW2ZvdW5kS2V5XSA9IGNvbnZlcnRlci5yZWFkKHZhbHVlLCBmb3VuZEtleSk7XG5cbiAgICAgICAgICBpZiAoa2V5ID09PSBmb3VuZEtleSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZXkgPyBqYXJba2V5XSA6IGphclxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKFxuICAgICAge1xuICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuICAgICAgICAgIHNldChcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgYXNzaWduKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgICAgIHJldHVybiBpbml0KHRoaXMuY29udmVydGVyLCBhc3NpZ24oe30sIHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlcykpXG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb252ZXJ0ZXI6IGZ1bmN0aW9uIChjb252ZXJ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdChhc3NpZ24oe30sIHRoaXMuY29udmVydGVyLCBjb252ZXJ0ZXIpLCB0aGlzLmF0dHJpYnV0ZXMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUoZGVmYXVsdEF0dHJpYnV0ZXMpIH0sXG4gICAgICAgIGNvbnZlcnRlcjogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShjb252ZXJ0ZXIpIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICB2YXIgYXBpID0gaW5pdChkZWZhdWx0Q29udmVydGVyLCB7IHBhdGg6ICcvJyB9KTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuICByZXR1cm4gYXBpO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/js-cookie/dist/js.cookie.js\n");

/***/ })

};
;