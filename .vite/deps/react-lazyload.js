import {
  __commonJS,
  require_react
} from "./chunk-GFWMZNU4.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-lazyload/lib/utils/event.js
var require_event = __commonJS({
  "node_modules/react-lazyload/lib/utils/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.on = on;
    exports.off = off;
    function on(el, eventName, callback, opts) {
      opts = opts || false;
      if (el.addEventListener) {
        el.addEventListener(eventName, callback, opts);
      } else if (el.attachEvent) {
        el.attachEvent("on" + eventName, function(e) {
          callback.call(el, e || window.event);
        });
      }
    }
    function off(el, eventName, callback, opts) {
      opts = opts || false;
      if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, opts);
      } else if (el.detachEvent) {
        el.detachEvent("on" + eventName, callback);
      }
    }
  }
});

// node_modules/react-lazyload/lib/utils/scrollParent.js
var require_scrollParent = __commonJS({
  "node_modules/react-lazyload/lib/utils/scrollParent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(node) {
      if (!(node instanceof HTMLElement)) {
        return document.documentElement;
      }
      var excludeStaticParent = node.style.position === "absolute";
      var overflowRegex = /(scroll|auto)/;
      var parent = node;
      while (parent) {
        if (!parent.parentNode) {
          return node.ownerDocument || document.documentElement;
        }
        var style = window.getComputedStyle(parent);
        var position = style.position;
        var overflow = style.overflow;
        var overflowX = style["overflow-x"];
        var overflowY = style["overflow-y"];
        if (position === "static" && excludeStaticParent) {
          parent = parent.parentNode;
          continue;
        }
        if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
          return parent;
        }
        parent = parent.parentNode;
      }
      return node.ownerDocument || node.documentElement || document.documentElement;
    };
  }
});

// node_modules/react-lazyload/lib/utils/debounce.js
var require_debounce = __commonJS({
  "node_modules/react-lazyload/lib/utils/debounce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = debounce;
    function debounce(func, wait, immediate) {
      var timeout = void 0;
      var args = void 0;
      var context = void 0;
      var timestamp = void 0;
      var result = void 0;
      var later = function later2() {
        var last = +/* @__PURE__ */ new Date() - timestamp;
        if (last < wait && last >= 0) {
          timeout = setTimeout(later2, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout) {
              context = null;
              args = null;
            }
          }
        }
      };
      return function debounced() {
        context = this;
        args = arguments;
        timestamp = +/* @__PURE__ */ new Date();
        var callNow = immediate && !timeout;
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
        if (callNow) {
          result = func.apply(context, args);
          context = null;
          args = null;
        }
        return result;
      };
    }
  }
});

// node_modules/react-lazyload/lib/utils/throttle.js
var require_throttle = __commonJS({
  "node_modules/react-lazyload/lib/utils/throttle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = throttle;
    function throttle(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last, deferTimer;
      return function() {
        var context = scope || this;
        var now = +/* @__PURE__ */ new Date(), args = arguments;
        if (last && now < last + threshhold) {
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function() {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
  }
});

// node_modules/react-lazyload/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-lazyload/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.forceVisible = exports.forceCheck = exports.lazyload = void 0;
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _event = require_event();
    var _scrollParent = require_scrollParent();
    var _scrollParent2 = _interopRequireDefault(_scrollParent);
    var _debounce = require_debounce();
    var _debounce2 = _interopRequireDefault(_debounce);
    var _throttle = require_throttle();
    var _throttle2 = _interopRequireDefault(_throttle);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var defaultBoundingClientRect = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0
    };
    var LISTEN_FLAG = "data-lazyload-listened";
    var listeners = [];
    var pending = [];
    var passiveEventSupported = false;
    try {
      opts = Object.defineProperty({}, "passive", {
        get: function get() {
          passiveEventSupported = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    var opts;
    var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;
    var checkOverflowVisible = function checkOverflowVisible2(component, parent) {
      var node = component.ref;
      var parentTop = void 0;
      var parentLeft = void 0;
      var parentHeight = void 0;
      var parentWidth = void 0;
      try {
        var _parent$getBoundingCl = parent.getBoundingClientRect();
        parentTop = _parent$getBoundingCl.top;
        parentLeft = _parent$getBoundingCl.left;
        parentHeight = _parent$getBoundingCl.height;
        parentWidth = _parent$getBoundingCl.width;
      } catch (e) {
        parentTop = defaultBoundingClientRect.top;
        parentLeft = defaultBoundingClientRect.left;
        parentHeight = defaultBoundingClientRect.height;
        parentWidth = defaultBoundingClientRect.width;
      }
      var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;
      var intersectionTop = Math.max(parentTop, 0);
      var intersectionLeft = Math.max(parentLeft, 0);
      var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop;
      var intersectionWidth = Math.min(windowInnerWidth, parentLeft + parentWidth) - intersectionLeft;
      var top = void 0;
      var left = void 0;
      var height = void 0;
      var width = void 0;
      try {
        var _node$getBoundingClie = node.getBoundingClientRect();
        top = _node$getBoundingClie.top;
        left = _node$getBoundingClie.left;
        height = _node$getBoundingClie.height;
        width = _node$getBoundingClie.width;
      } catch (e) {
        top = defaultBoundingClientRect.top;
        left = defaultBoundingClientRect.left;
        height = defaultBoundingClientRect.height;
        width = defaultBoundingClientRect.width;
      }
      var offsetTop = top - intersectionTop;
      var offsetLeft = left - intersectionLeft;
      var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset];
      return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0 && offsetLeft - offsets[0] <= intersectionWidth && offsetLeft + width + offsets[1] >= 0;
    };
    var checkNormalVisible = function checkNormalVisible2(component) {
      var node = component.ref;
      if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;
      var top = void 0;
      var elementHeight = void 0;
      try {
        var _node$getBoundingClie2 = node.getBoundingClientRect();
        top = _node$getBoundingClie2.top;
        elementHeight = _node$getBoundingClie2.height;
      } catch (e) {
        top = defaultBoundingClientRect.top;
        elementHeight = defaultBoundingClientRect.height;
      }
      var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
      var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset];
      return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
    };
    var checkVisible = function checkVisible2(component) {
      var node = component.ref;
      if (!(node instanceof HTMLElement)) {
        return;
      }
      var parent = (0, _scrollParent2.default)(node);
      var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
      var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
      if (visible) {
        if (!component.visible) {
          if (component.props.once) {
            pending.push(component);
          }
          component.visible = true;
          component.forceUpdate();
        }
      } else if (!(component.props.once && component.visible)) {
        component.visible = false;
        if (component.props.unmountIfInvisible) {
          component.forceUpdate();
        }
      }
    };
    var purgePending = function purgePending2() {
      pending.forEach(function(component) {
        var index = listeners.indexOf(component);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      });
      pending = [];
    };
    var lazyLoadHandler = function lazyLoadHandler2() {
      for (var i = 0; i < listeners.length; ++i) {
        var listener = listeners[i];
        checkVisible(listener);
      }
      purgePending();
    };
    var forceVisible = function forceVisible2() {
      for (var i = 0; i < listeners.length; ++i) {
        var listener = listeners[i];
        listener.visible = true;
        listener.forceUpdate();
      }
      purgePending();
    };
    var delayType = void 0;
    var finalLazyLoadHandler = null;
    var isString = function isString2(string) {
      return typeof string === "string";
    };
    var LazyLoad = function(_Component) {
      _inherits(LazyLoad2, _Component);
      function LazyLoad2(props) {
        _classCallCheck(this, LazyLoad2);
        var _this = _possibleConstructorReturn(this, (LazyLoad2.__proto__ || Object.getPrototypeOf(LazyLoad2)).call(this, props));
        _this.visible = false;
        _this.setRef = _this.setRef.bind(_this);
        return _this;
      }
      _createClass(LazyLoad2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var scrollport = window;
          var scrollContainer = this.props.scrollContainer;
          if (scrollContainer) {
            if (isString(scrollContainer)) {
              scrollport = scrollport.document.querySelector(scrollContainer);
            }
          }
          var needResetFinalLazyLoadHandler = this.props.debounce !== void 0 && delayType === "throttle" || delayType === "debounce" && this.props.debounce === void 0;
          if (needResetFinalLazyLoadHandler) {
            (0, _event.off)(scrollport, "scroll", finalLazyLoadHandler, passiveEvent);
            (0, _event.off)(window, "resize", finalLazyLoadHandler, passiveEvent);
            finalLazyLoadHandler = null;
          }
          if (!finalLazyLoadHandler) {
            if (this.props.debounce !== void 0) {
              finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === "number" ? this.props.debounce : 300);
              delayType = "debounce";
            } else if (this.props.throttle !== void 0) {
              finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === "number" ? this.props.throttle : 300);
              delayType = "throttle";
            } else {
              finalLazyLoadHandler = lazyLoadHandler;
            }
          }
          if (this.props.overflow) {
            var parent = (0, _scrollParent2.default)(this.ref);
            if (parent && typeof parent.getAttribute === "function") {
              var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
              if (listenerCount === 1) {
                parent.addEventListener("scroll", finalLazyLoadHandler, passiveEvent);
              }
              parent.setAttribute(LISTEN_FLAG, listenerCount);
            }
          } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
            var _props = this.props, scroll = _props.scroll, resize = _props.resize;
            if (scroll) {
              (0, _event.on)(scrollport, "scroll", finalLazyLoadHandler, passiveEvent);
            }
            if (resize) {
              (0, _event.on)(window, "resize", finalLazyLoadHandler, passiveEvent);
            }
          }
          listeners.push(this);
          checkVisible(this);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          return this.visible;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.overflow) {
            var parent = (0, _scrollParent2.default)(this.ref);
            if (parent && typeof parent.getAttribute === "function") {
              var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
              if (listenerCount === 0) {
                parent.removeEventListener("scroll", finalLazyLoadHandler, passiveEvent);
                parent.removeAttribute(LISTEN_FLAG);
              } else {
                parent.setAttribute(LISTEN_FLAG, listenerCount);
              }
            }
          }
          var index = listeners.indexOf(this);
          if (index !== -1) {
            listeners.splice(index, 1);
          }
          if (listeners.length === 0 && typeof window !== "undefined") {
            (0, _event.off)(window, "resize", finalLazyLoadHandler, passiveEvent);
            (0, _event.off)(window, "scroll", finalLazyLoadHandler, passiveEvent);
          }
        }
      }, {
        key: "setRef",
        value: function setRef(element) {
          if (element) {
            this.ref = element;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _props2 = this.props, height = _props2.height, children = _props2.children, placeholder = _props2.placeholder, className = _props2.className, classNamePrefix = _props2.classNamePrefix, style = _props2.style;
          return _react2.default.createElement(
            "div",
            { className: classNamePrefix + "-wrapper " + className, ref: this.setRef, style },
            this.visible ? children : placeholder ? placeholder : _react2.default.createElement("div", {
              style: { height },
              className: classNamePrefix + "-placeholder"
            })
          );
        }
      }]);
      return LazyLoad2;
    }(_react.Component);
    LazyLoad.propTypes = {
      className: _propTypes2.default.string,
      classNamePrefix: _propTypes2.default.string,
      once: _propTypes2.default.bool,
      height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
      overflow: _propTypes2.default.bool,
      resize: _propTypes2.default.bool,
      scroll: _propTypes2.default.bool,
      children: _propTypes2.default.node,
      throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
      debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
      placeholder: _propTypes2.default.node,
      scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
      unmountIfInvisible: _propTypes2.default.bool,
      style: _propTypes2.default.object
    };
    LazyLoad.defaultProps = {
      className: "",
      classNamePrefix: "lazyload",
      once: false,
      offset: 0,
      overflow: false,
      resize: false,
      scroll: true,
      unmountIfInvisible: false
    };
    var getDisplayName = function getDisplayName2(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || "Component";
    };
    var decorator = function decorator2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return function lazyload(WrappedComponent) {
        return function(_Component2) {
          _inherits(LazyLoadDecorated, _Component2);
          function LazyLoadDecorated() {
            _classCallCheck(this, LazyLoadDecorated);
            var _this2 = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));
            _this2.displayName = "LazyLoad" + getDisplayName(WrappedComponent);
            return _this2;
          }
          _createClass(LazyLoadDecorated, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                LazyLoad,
                options,
                _react2.default.createElement(WrappedComponent, this.props)
              );
            }
          }]);
          return LazyLoadDecorated;
        }(_react.Component);
      };
    };
    exports.lazyload = decorator;
    exports.default = LazyLoad;
    exports.forceCheck = lazyLoadHandler;
    exports.forceVisible = forceVisible;
  }
});
export default require_lib();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-lazyload.js.map
