(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./noConflict");

var _global = _interopRequireDefault(require("core-js/library/fn/global"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

},{"./noConflict":2,"core-js/library/fn/global":15}],2:[function(require,module,exports){
"use strict";

require("core-js/es6");

require("core-js/fn/array/includes");

require("core-js/fn/array/flat-map");

require("core-js/fn/string/pad-start");

require("core-js/fn/string/pad-end");

require("core-js/fn/string/trim-start");

require("core-js/fn/string/trim-end");

require("core-js/fn/symbol/async-iterator");

require("core-js/fn/object/get-own-property-descriptors");

require("core-js/fn/object/values");

require("core-js/fn/object/entries");

require("core-js/fn/promise/finally");

require("core-js/web");

require("regenerator-runtime/runtime");

},{"core-js/es6":3,"core-js/fn/array/flat-map":4,"core-js/fn/array/includes":5,"core-js/fn/object/entries":6,"core-js/fn/object/get-own-property-descriptors":7,"core-js/fn/object/values":8,"core-js/fn/promise/finally":9,"core-js/fn/string/pad-end":10,"core-js/fn/string/pad-start":11,"core-js/fn/string/trim-end":12,"core-js/fn/string/trim-start":13,"core-js/fn/symbol/async-iterator":14,"core-js/web":306,"regenerator-runtime/runtime":569}],3:[function(require,module,exports){
require('../modules/es6.symbol');
require('../modules/es6.object.create');
require('../modules/es6.object.define-property');
require('../modules/es6.object.define-properties');
require('../modules/es6.object.get-own-property-descriptor');
require('../modules/es6.object.get-prototype-of');
require('../modules/es6.object.keys');
require('../modules/es6.object.get-own-property-names');
require('../modules/es6.object.freeze');
require('../modules/es6.object.seal');
require('../modules/es6.object.prevent-extensions');
require('../modules/es6.object.is-frozen');
require('../modules/es6.object.is-sealed');
require('../modules/es6.object.is-extensible');
require('../modules/es6.object.assign');
require('../modules/es6.object.is');
require('../modules/es6.object.set-prototype-of');
require('../modules/es6.object.to-string');
require('../modules/es6.function.bind');
require('../modules/es6.function.name');
require('../modules/es6.function.has-instance');
require('../modules/es6.parse-int');
require('../modules/es6.parse-float');
require('../modules/es6.number.constructor');
require('../modules/es6.number.to-fixed');
require('../modules/es6.number.to-precision');
require('../modules/es6.number.epsilon');
require('../modules/es6.number.is-finite');
require('../modules/es6.number.is-integer');
require('../modules/es6.number.is-nan');
require('../modules/es6.number.is-safe-integer');
require('../modules/es6.number.max-safe-integer');
require('../modules/es6.number.min-safe-integer');
require('../modules/es6.number.parse-float');
require('../modules/es6.number.parse-int');
require('../modules/es6.math.acosh');
require('../modules/es6.math.asinh');
require('../modules/es6.math.atanh');
require('../modules/es6.math.cbrt');
require('../modules/es6.math.clz32');
require('../modules/es6.math.cosh');
require('../modules/es6.math.expm1');
require('../modules/es6.math.fround');
require('../modules/es6.math.hypot');
require('../modules/es6.math.imul');
require('../modules/es6.math.log10');
require('../modules/es6.math.log1p');
require('../modules/es6.math.log2');
require('../modules/es6.math.sign');
require('../modules/es6.math.sinh');
require('../modules/es6.math.tanh');
require('../modules/es6.math.trunc');
require('../modules/es6.string.from-code-point');
require('../modules/es6.string.raw');
require('../modules/es6.string.trim');
require('../modules/es6.string.iterator');
require('../modules/es6.string.code-point-at');
require('../modules/es6.string.ends-with');
require('../modules/es6.string.includes');
require('../modules/es6.string.repeat');
require('../modules/es6.string.starts-with');
require('../modules/es6.string.anchor');
require('../modules/es6.string.big');
require('../modules/es6.string.blink');
require('../modules/es6.string.bold');
require('../modules/es6.string.fixed');
require('../modules/es6.string.fontcolor');
require('../modules/es6.string.fontsize');
require('../modules/es6.string.italics');
require('../modules/es6.string.link');
require('../modules/es6.string.small');
require('../modules/es6.string.strike');
require('../modules/es6.string.sub');
require('../modules/es6.string.sup');
require('../modules/es6.date.now');
require('../modules/es6.date.to-json');
require('../modules/es6.date.to-iso-string');
require('../modules/es6.date.to-string');
require('../modules/es6.date.to-primitive');
require('../modules/es6.array.is-array');
require('../modules/es6.array.from');
require('../modules/es6.array.of');
require('../modules/es6.array.join');
require('../modules/es6.array.slice');
require('../modules/es6.array.sort');
require('../modules/es6.array.for-each');
require('../modules/es6.array.map');
require('../modules/es6.array.filter');
require('../modules/es6.array.some');
require('../modules/es6.array.every');
require('../modules/es6.array.reduce');
require('../modules/es6.array.reduce-right');
require('../modules/es6.array.index-of');
require('../modules/es6.array.last-index-of');
require('../modules/es6.array.copy-within');
require('../modules/es6.array.fill');
require('../modules/es6.array.find');
require('../modules/es6.array.find-index');
require('../modules/es6.array.species');
require('../modules/es6.array.iterator');
require('../modules/es6.regexp.constructor');
require('../modules/es6.regexp.exec');
require('../modules/es6.regexp.to-string');
require('../modules/es6.regexp.flags');
require('../modules/es6.regexp.match');
require('../modules/es6.regexp.replace');
require('../modules/es6.regexp.search');
require('../modules/es6.regexp.split');
require('../modules/es6.promise');
require('../modules/es6.map');
require('../modules/es6.set');
require('../modules/es6.weak-map');
require('../modules/es6.weak-set');
require('../modules/es6.typed.array-buffer');
require('../modules/es6.typed.data-view');
require('../modules/es6.typed.int8-array');
require('../modules/es6.typed.uint8-array');
require('../modules/es6.typed.uint8-clamped-array');
require('../modules/es6.typed.int16-array');
require('../modules/es6.typed.uint16-array');
require('../modules/es6.typed.int32-array');
require('../modules/es6.typed.uint32-array');
require('../modules/es6.typed.float32-array');
require('../modules/es6.typed.float64-array');
require('../modules/es6.reflect.apply');
require('../modules/es6.reflect.construct');
require('../modules/es6.reflect.define-property');
require('../modules/es6.reflect.delete-property');
require('../modules/es6.reflect.enumerate');
require('../modules/es6.reflect.get');
require('../modules/es6.reflect.get-own-property-descriptor');
require('../modules/es6.reflect.get-prototype-of');
require('../modules/es6.reflect.has');
require('../modules/es6.reflect.is-extensible');
require('../modules/es6.reflect.own-keys');
require('../modules/es6.reflect.prevent-extensions');
require('../modules/es6.reflect.set');
require('../modules/es6.reflect.set-prototype-of');
module.exports = require('../modules/_core');

},{"../modules/_core":52,"../modules/es6.array.copy-within":154,"../modules/es6.array.every":155,"../modules/es6.array.fill":156,"../modules/es6.array.filter":157,"../modules/es6.array.find":159,"../modules/es6.array.find-index":158,"../modules/es6.array.for-each":160,"../modules/es6.array.from":161,"../modules/es6.array.index-of":162,"../modules/es6.array.is-array":163,"../modules/es6.array.iterator":164,"../modules/es6.array.join":165,"../modules/es6.array.last-index-of":166,"../modules/es6.array.map":167,"../modules/es6.array.of":168,"../modules/es6.array.reduce":170,"../modules/es6.array.reduce-right":169,"../modules/es6.array.slice":171,"../modules/es6.array.some":172,"../modules/es6.array.sort":173,"../modules/es6.array.species":174,"../modules/es6.date.now":175,"../modules/es6.date.to-iso-string":176,"../modules/es6.date.to-json":177,"../modules/es6.date.to-primitive":178,"../modules/es6.date.to-string":179,"../modules/es6.function.bind":180,"../modules/es6.function.has-instance":181,"../modules/es6.function.name":182,"../modules/es6.map":183,"../modules/es6.math.acosh":184,"../modules/es6.math.asinh":185,"../modules/es6.math.atanh":186,"../modules/es6.math.cbrt":187,"../modules/es6.math.clz32":188,"../modules/es6.math.cosh":189,"../modules/es6.math.expm1":190,"../modules/es6.math.fround":191,"../modules/es6.math.hypot":192,"../modules/es6.math.imul":193,"../modules/es6.math.log10":194,"../modules/es6.math.log1p":195,"../modules/es6.math.log2":196,"../modules/es6.math.sign":197,"../modules/es6.math.sinh":198,"../modules/es6.math.tanh":199,"../modules/es6.math.trunc":200,"../modules/es6.number.constructor":201,"../modules/es6.number.epsilon":202,"../modules/es6.number.is-finite":203,"../modules/es6.number.is-integer":204,"../modules/es6.number.is-nan":205,"../modules/es6.number.is-safe-integer":206,"../modules/es6.number.max-safe-integer":207,"../modules/es6.number.min-safe-integer":208,"../modules/es6.number.parse-float":209,"../modules/es6.number.parse-int":210,"../modules/es6.number.to-fixed":211,"../modules/es6.number.to-precision":212,"../modules/es6.object.assign":213,"../modules/es6.object.create":214,"../modules/es6.object.define-properties":215,"../modules/es6.object.define-property":216,"../modules/es6.object.freeze":217,"../modules/es6.object.get-own-property-descriptor":218,"../modules/es6.object.get-own-property-names":219,"../modules/es6.object.get-prototype-of":220,"../modules/es6.object.is":224,"../modules/es6.object.is-extensible":221,"../modules/es6.object.is-frozen":222,"../modules/es6.object.is-sealed":223,"../modules/es6.object.keys":225,"../modules/es6.object.prevent-extensions":226,"../modules/es6.object.seal":227,"../modules/es6.object.set-prototype-of":228,"../modules/es6.object.to-string":229,"../modules/es6.parse-float":230,"../modules/es6.parse-int":231,"../modules/es6.promise":232,"../modules/es6.reflect.apply":233,"../modules/es6.reflect.construct":234,"../modules/es6.reflect.define-property":235,"../modules/es6.reflect.delete-property":236,"../modules/es6.reflect.enumerate":237,"../modules/es6.reflect.get":240,"../modules/es6.reflect.get-own-property-descriptor":238,"../modules/es6.reflect.get-prototype-of":239,"../modules/es6.reflect.has":241,"../modules/es6.reflect.is-extensible":242,"../modules/es6.reflect.own-keys":243,"../modules/es6.reflect.prevent-extensions":244,"../modules/es6.reflect.set":246,"../modules/es6.reflect.set-prototype-of":245,"../modules/es6.regexp.constructor":247,"../modules/es6.regexp.exec":248,"../modules/es6.regexp.flags":249,"../modules/es6.regexp.match":250,"../modules/es6.regexp.replace":251,"../modules/es6.regexp.search":252,"../modules/es6.regexp.split":253,"../modules/es6.regexp.to-string":254,"../modules/es6.set":255,"../modules/es6.string.anchor":256,"../modules/es6.string.big":257,"../modules/es6.string.blink":258,"../modules/es6.string.bold":259,"../modules/es6.string.code-point-at":260,"../modules/es6.string.ends-with":261,"../modules/es6.string.fixed":262,"../modules/es6.string.fontcolor":263,"../modules/es6.string.fontsize":264,"../modules/es6.string.from-code-point":265,"../modules/es6.string.includes":266,"../modules/es6.string.italics":267,"../modules/es6.string.iterator":268,"../modules/es6.string.link":269,"../modules/es6.string.raw":270,"../modules/es6.string.repeat":271,"../modules/es6.string.small":272,"../modules/es6.string.starts-with":273,"../modules/es6.string.strike":274,"../modules/es6.string.sub":275,"../modules/es6.string.sup":276,"../modules/es6.string.trim":277,"../modules/es6.symbol":278,"../modules/es6.typed.array-buffer":279,"../modules/es6.typed.data-view":280,"../modules/es6.typed.float32-array":281,"../modules/es6.typed.float64-array":282,"../modules/es6.typed.int16-array":283,"../modules/es6.typed.int32-array":284,"../modules/es6.typed.int8-array":285,"../modules/es6.typed.uint16-array":286,"../modules/es6.typed.uint32-array":287,"../modules/es6.typed.uint8-array":288,"../modules/es6.typed.uint8-clamped-array":289,"../modules/es6.weak-map":290,"../modules/es6.weak-set":291}],4:[function(require,module,exports){
require('../../modules/es7.array.flat-map');
module.exports = require('../../modules/_core').Array.flatMap;

},{"../../modules/_core":52,"../../modules/es7.array.flat-map":292}],5:[function(require,module,exports){
require('../../modules/es7.array.includes');
module.exports = require('../../modules/_core').Array.includes;

},{"../../modules/_core":52,"../../modules/es7.array.includes":293}],6:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;

},{"../../modules/_core":52,"../../modules/es7.object.entries":294}],7:[function(require,module,exports){
require('../../modules/es7.object.get-own-property-descriptors');
module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

},{"../../modules/_core":52,"../../modules/es7.object.get-own-property-descriptors":295}],8:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/_core').Object.values;

},{"../../modules/_core":52,"../../modules/es7.object.values":296}],9:[function(require,module,exports){
'use strict';
require('../../modules/es6.promise');
require('../../modules/es7.promise.finally');
module.exports = require('../../modules/_core').Promise['finally'];

},{"../../modules/_core":52,"../../modules/es6.promise":232,"../../modules/es7.promise.finally":297}],10:[function(require,module,exports){
require('../../modules/es7.string.pad-end');
module.exports = require('../../modules/_core').String.padEnd;

},{"../../modules/_core":52,"../../modules/es7.string.pad-end":298}],11:[function(require,module,exports){
require('../../modules/es7.string.pad-start');
module.exports = require('../../modules/_core').String.padStart;

},{"../../modules/_core":52,"../../modules/es7.string.pad-start":299}],12:[function(require,module,exports){
require('../../modules/es7.string.trim-right');
module.exports = require('../../modules/_core').String.trimRight;

},{"../../modules/_core":52,"../../modules/es7.string.trim-right":301}],13:[function(require,module,exports){
require('../../modules/es7.string.trim-left');
module.exports = require('../../modules/_core').String.trimLeft;

},{"../../modules/_core":52,"../../modules/es7.string.trim-left":300}],14:[function(require,module,exports){
require('../../modules/es7.symbol.async-iterator');
module.exports = require('../../modules/_wks-ext').f('asyncIterator');

},{"../../modules/_wks-ext":151,"../../modules/es7.symbol.async-iterator":302}],15:[function(require,module,exports){
require('../modules/es7.global');
module.exports = require('../modules/_core').global;

},{"../modules/_core":18,"../modules/es7.global":32}],16:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],17:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":28}],18:[function(require,module,exports){
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],19:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":16}],20:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":23}],21:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":24,"./_is-object":28}],22:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":18,"./_ctx":19,"./_global":24,"./_has":25,"./_hide":26}],23:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],24:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],25:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],26:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":20,"./_object-dp":29,"./_property-desc":30}],27:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":20,"./_dom-create":21,"./_fails":23}],28:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],29:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":17,"./_descriptors":20,"./_ie8-dom-define":27,"./_to-primitive":31}],30:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],31:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":28}],32:[function(require,module,exports){
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":22,"./_global":24}],33:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],34:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":48}],35:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":72,"./_wks":152}],36:[function(require,module,exports){
'use strict';
var at = require('./_string-at')(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":129}],37:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],38:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./_is-object":81,"dup":17}],39:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-absolute-index":137,"./_to-length":141,"./_to-object":142}],40:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-absolute-index":137,"./_to-length":141,"./_to-object":142}],41:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":137,"./_to-iobject":140,"./_to-length":141}],42:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":45,"./_ctx":54,"./_iobject":77,"./_to-length":141,"./_to-object":142}],43:[function(require,module,exports){
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":33,"./_iobject":77,"./_to-length":141,"./_to-object":142}],44:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":79,"./_is-object":81,"./_wks":152}],45:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":44}],46:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":33,"./_invoke":76,"./_is-object":81}],47:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":48,"./_wks":152}],48:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],49:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":37,"./_ctx":54,"./_descriptors":58,"./_for-of":68,"./_iter-define":85,"./_iter-step":87,"./_meta":94,"./_object-create":98,"./_object-dp":99,"./_redefine-all":117,"./_set-species":123,"./_validate-collection":149}],50:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":37,"./_an-object":38,"./_array-methods":42,"./_for-of":68,"./_has":71,"./_is-object":81,"./_meta":94,"./_redefine-all":117,"./_validate-collection":149}],51:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":37,"./_export":62,"./_fails":64,"./_for-of":68,"./_global":70,"./_inherit-if-required":75,"./_is-object":81,"./_iter-detect":86,"./_meta":94,"./_redefine":118,"./_redefine-all":117,"./_set-to-string-tag":124}],52:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],53:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":99,"./_property-desc":116}],54:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./_a-function":33,"dup":19}],55:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":64}],56:[function(require,module,exports){
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":38,"./_to-primitive":143}],57:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],58:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"./_fails":64,"dup":20}],59:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./_global":70,"./_is-object":81,"dup":21}],60:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],61:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":104,"./_object-keys":107,"./_object-pie":108}],62:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":52,"./_ctx":54,"./_global":70,"./_hide":72,"./_redefine":118}],63:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":152}],64:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],65:[function(require,module,exports){
'use strict';
require('./es6.regexp.exec');
var redefine = require('./_redefine');
var hide = require('./_hide');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');
var regexpExec = require('./_regexp-exec');

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":57,"./_fails":64,"./_hide":72,"./_redefine":118,"./_regexp-exec":120,"./_wks":152,"./es6.regexp.exec":248}],66:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":38}],67:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_ctx":54,"./_is-array":79,"./_is-object":81,"./_to-length":141,"./_wks":152}],68:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":38,"./_ctx":54,"./_is-array-iter":78,"./_iter-call":83,"./_to-length":141,"./core.get-iterator-method":153}],69:[function(require,module,exports){
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":126}],70:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],71:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],72:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"./_descriptors":58,"./_object-dp":99,"./_property-desc":116,"dup":26}],73:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":70}],74:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"./_descriptors":58,"./_dom-create":59,"./_fails":64,"dup":27}],75:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":81,"./_set-proto":122}],76:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],77:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":48}],78:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":88,"./_wks":152}],79:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":48}],80:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":81}],81:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],82:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":48,"./_is-object":81,"./_wks":152}],83:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":38}],84:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":72,"./_object-create":98,"./_property-desc":116,"./_set-to-string-tag":124,"./_wks":152}],85:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":62,"./_hide":72,"./_iter-create":84,"./_iterators":88,"./_library":89,"./_object-gpo":105,"./_redefine":118,"./_set-to-string-tag":124,"./_wks":152}],86:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":152}],87:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],88:[function(require,module,exports){
module.exports = {};

},{}],89:[function(require,module,exports){
module.exports = false;

},{}],90:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],91:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":93}],92:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],93:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],94:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":64,"./_has":71,"./_is-object":81,"./_object-dp":99,"./_uid":147}],95:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":48,"./_global":70,"./_task":136}],96:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":33}],97:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":58,"./_fails":64,"./_iobject":77,"./_object-gops":104,"./_object-keys":107,"./_object-pie":108,"./_to-object":142}],98:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":38,"./_dom-create":59,"./_enum-bug-keys":60,"./_html":73,"./_object-dps":100,"./_shared-key":125}],99:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"./_an-object":38,"./_descriptors":58,"./_ie8-dom-define":74,"./_to-primitive":143,"dup":29}],100:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":38,"./_descriptors":58,"./_object-dp":99,"./_object-keys":107}],101:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":58,"./_has":71,"./_ie8-dom-define":74,"./_object-pie":108,"./_property-desc":116,"./_to-iobject":140,"./_to-primitive":143}],102:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":103,"./_to-iobject":140}],103:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":60,"./_object-keys-internal":106}],104:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],105:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":71,"./_shared-key":125,"./_to-object":142}],106:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":41,"./_has":71,"./_shared-key":125,"./_to-iobject":140}],107:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":60,"./_object-keys-internal":106}],108:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],109:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":52,"./_export":62,"./_fails":64}],110:[function(require,module,exports){
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

},{"./_descriptors":58,"./_object-keys":107,"./_object-pie":108,"./_to-iobject":140}],111:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":38,"./_global":70,"./_object-gopn":103,"./_object-gops":104}],112:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":70,"./_string-trim":134,"./_string-ws":135}],113:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":70,"./_string-trim":134,"./_string-ws":135}],114:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],115:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":38,"./_is-object":81,"./_new-promise-capability":96}],116:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],117:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":118}],118:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":52,"./_function-to-string":69,"./_global":70,"./_has":71,"./_hide":72,"./_uid":147}],119:[function(require,module,exports){
'use strict';

var classof = require('./_classof');
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

},{"./_classof":47}],120:[function(require,module,exports){
'use strict';

var regexpFlags = require('./_flags');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./_flags":66}],121:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],122:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":38,"./_ctx":54,"./_is-object":81,"./_object-gopd":101}],123:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":58,"./_global":70,"./_object-dp":99,"./_wks":152}],124:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":71,"./_object-dp":99,"./_wks":152}],125:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":126,"./_uid":147}],126:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":52,"./_global":70,"./_library":89}],127:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":33,"./_an-object":38,"./_wks":152}],128:[function(require,module,exports){
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":64}],129:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":57,"./_to-integer":139}],130:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":57,"./_is-regexp":82}],131:[function(require,module,exports){
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":57,"./_export":62,"./_fails":64}],132:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":57,"./_string-repeat":133,"./_to-length":141}],133:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":57,"./_to-integer":139}],134:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":57,"./_export":62,"./_fails":64,"./_string-ws":135}],135:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],136:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":48,"./_ctx":54,"./_dom-create":59,"./_global":70,"./_html":73,"./_invoke":76}],137:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":139}],138:[function(require,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":139,"./_to-length":141}],139:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],140:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":57,"./_iobject":77}],141:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":139}],142:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":57}],143:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"./_is-object":81,"dup":31}],144:[function(require,module,exports){
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_an-instance":37,"./_array-copy-within":39,"./_array-fill":40,"./_array-includes":41,"./_array-methods":42,"./_classof":47,"./_ctx":54,"./_descriptors":58,"./_export":62,"./_fails":64,"./_global":70,"./_has":71,"./_hide":72,"./_is-array-iter":78,"./_is-object":81,"./_iter-detect":86,"./_iterators":88,"./_library":89,"./_object-create":98,"./_object-dp":99,"./_object-gopd":101,"./_object-gopn":103,"./_object-gpo":105,"./_property-desc":116,"./_redefine-all":117,"./_set-species":123,"./_species-constructor":127,"./_to-absolute-index":137,"./_to-index":138,"./_to-integer":139,"./_to-length":141,"./_to-object":142,"./_to-primitive":143,"./_typed":146,"./_typed-buffer":145,"./_uid":147,"./_wks":152,"./core.get-iterator-method":153,"./es6.array.iterator":164}],145:[function(require,module,exports){
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":37,"./_array-fill":40,"./_descriptors":58,"./_fails":64,"./_global":70,"./_hide":72,"./_library":89,"./_object-dp":99,"./_object-gopn":103,"./_redefine-all":117,"./_set-to-string-tag":124,"./_to-index":138,"./_to-integer":139,"./_to-length":141,"./_typed":146}],146:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":70,"./_hide":72,"./_uid":147}],147:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],148:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":70}],149:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":81}],150:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":52,"./_global":70,"./_library":89,"./_object-dp":99,"./_wks-ext":151}],151:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":152}],152:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":70,"./_shared":126,"./_uid":147}],153:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":47,"./_core":52,"./_iterators":88,"./_wks":152}],154:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":35,"./_array-copy-within":39,"./_export":62}],155:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":42,"./_export":62,"./_strict-method":128}],156:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":35,"./_array-fill":40,"./_export":62}],157:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":42,"./_export":62,"./_strict-method":128}],158:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":35,"./_array-methods":42,"./_export":62}],159:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":35,"./_array-methods":42,"./_export":62}],160:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":42,"./_export":62,"./_strict-method":128}],161:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":53,"./_ctx":54,"./_export":62,"./_is-array-iter":78,"./_iter-call":83,"./_iter-detect":86,"./_to-length":141,"./_to-object":142,"./core.get-iterator-method":153}],162:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":41,"./_export":62,"./_strict-method":128}],163:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":62,"./_is-array":79}],164:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":35,"./_iter-define":85,"./_iter-step":87,"./_iterators":88,"./_to-iobject":140}],165:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":62,"./_iobject":77,"./_strict-method":128,"./_to-iobject":140}],166:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":62,"./_strict-method":128,"./_to-integer":139,"./_to-iobject":140,"./_to-length":141}],167:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":42,"./_export":62,"./_strict-method":128}],168:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_create-property":53,"./_export":62,"./_fails":64}],169:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":43,"./_export":62,"./_strict-method":128}],170:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":43,"./_export":62,"./_strict-method":128}],171:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_cof":48,"./_export":62,"./_fails":64,"./_html":73,"./_to-absolute-index":137,"./_to-length":141}],172:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":42,"./_export":62,"./_strict-method":128}],173:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":33,"./_export":62,"./_fails":64,"./_strict-method":128,"./_to-object":142}],174:[function(require,module,exports){
require('./_set-species')('Array');

},{"./_set-species":123}],175:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":62}],176:[function(require,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":55,"./_export":62}],177:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":62,"./_fails":64,"./_to-object":142,"./_to-primitive":143}],178:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":56,"./_hide":72,"./_wks":152}],179:[function(require,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":118}],180:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_bind":46,"./_export":62}],181:[function(require,module,exports){
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":81,"./_object-dp":99,"./_object-gpo":105,"./_wks":152}],182:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":58,"./_object-dp":99}],183:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":51,"./_collection-strong":49,"./_validate-collection":149}],184:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":62,"./_math-log1p":92}],185:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":62}],186:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":62}],187:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":62,"./_math-sign":93}],188:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":62}],189:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":62}],190:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":62,"./_math-expm1":90}],191:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":62,"./_math-fround":91}],192:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":62}],193:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":62,"./_fails":64}],194:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":62}],195:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":62,"./_math-log1p":92}],196:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":62}],197:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":62,"./_math-sign":93}],198:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":62,"./_fails":64,"./_math-expm1":90}],199:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":62,"./_math-expm1":90}],200:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":62}],201:[function(require,module,exports){
'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":48,"./_descriptors":58,"./_fails":64,"./_global":70,"./_has":71,"./_inherit-if-required":75,"./_object-create":98,"./_object-dp":99,"./_object-gopd":101,"./_object-gopn":103,"./_redefine":118,"./_string-trim":134,"./_to-primitive":143}],202:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":62}],203:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":62,"./_global":70}],204:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":62,"./_is-integer":80}],205:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":62}],206:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":62,"./_is-integer":80}],207:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":62}],208:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":62}],209:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":62,"./_parse-float":112}],210:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":62,"./_parse-int":113}],211:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_a-number-value":34,"./_export":62,"./_fails":64,"./_string-repeat":133,"./_to-integer":139}],212:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_a-number-value":34,"./_export":62,"./_fails":64}],213:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":62,"./_object-assign":97}],214:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":62,"./_object-create":98}],215:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":58,"./_export":62,"./_object-dps":100}],216:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":58,"./_export":62,"./_object-dp":99}],217:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":81,"./_meta":94,"./_object-sap":109}],218:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":101,"./_object-sap":109,"./_to-iobject":140}],219:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":102,"./_object-sap":109}],220:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":105,"./_object-sap":109,"./_to-object":142}],221:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":81,"./_object-sap":109}],222:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":81,"./_object-sap":109}],223:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":81,"./_object-sap":109}],224:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":62,"./_same-value":121}],225:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":107,"./_object-sap":109,"./_to-object":142}],226:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":81,"./_meta":94,"./_object-sap":109}],227:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":81,"./_meta":94,"./_object-sap":109}],228:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":62,"./_set-proto":122}],229:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":47,"./_redefine":118,"./_wks":152}],230:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":62,"./_parse-float":112}],231:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":62,"./_parse-int":113}],232:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":33,"./_an-instance":37,"./_classof":47,"./_core":52,"./_ctx":54,"./_export":62,"./_for-of":68,"./_global":70,"./_is-object":81,"./_iter-detect":86,"./_library":89,"./_microtask":95,"./_new-promise-capability":96,"./_perform":114,"./_promise-resolve":115,"./_redefine-all":117,"./_set-species":123,"./_set-to-string-tag":124,"./_species-constructor":127,"./_task":136,"./_user-agent":148,"./_wks":152}],233:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":33,"./_an-object":38,"./_export":62,"./_fails":64,"./_global":70}],234:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":33,"./_an-object":38,"./_bind":46,"./_export":62,"./_fails":64,"./_global":70,"./_is-object":81,"./_object-create":98}],235:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":38,"./_export":62,"./_fails":64,"./_object-dp":99,"./_to-primitive":143}],236:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":38,"./_export":62,"./_object-gopd":101}],237:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_an-object":38,"./_export":62,"./_iter-create":84}],238:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":38,"./_export":62,"./_object-gopd":101}],239:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":38,"./_export":62,"./_object-gpo":105}],240:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_an-object":38,"./_export":62,"./_has":71,"./_is-object":81,"./_object-gopd":101,"./_object-gpo":105}],241:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":62}],242:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":38,"./_export":62}],243:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":62,"./_own-keys":111}],244:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":38,"./_export":62}],245:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":62,"./_set-proto":122}],246:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_an-object":38,"./_export":62,"./_has":71,"./_is-object":81,"./_object-dp":99,"./_object-gopd":101,"./_object-gpo":105,"./_property-desc":116}],247:[function(require,module,exports){
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":58,"./_fails":64,"./_flags":66,"./_global":70,"./_inherit-if-required":75,"./_is-regexp":82,"./_object-dp":99,"./_object-gopn":103,"./_redefine":118,"./_set-species":123,"./_wks":152}],248:[function(require,module,exports){
'use strict';
var regexpExec = require('./_regexp-exec');
require('./_export')({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"./_export":62,"./_regexp-exec":120}],249:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":58,"./_flags":66,"./_object-dp":99}],250:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var toLength = require('./_to-length');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');

// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"./_advance-string-index":36,"./_an-object":38,"./_fix-re-wks":65,"./_regexp-exec-abstract":119,"./_to-length":141}],251:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

},{"./_advance-string-index":36,"./_an-object":38,"./_fix-re-wks":65,"./_regexp-exec-abstract":119,"./_to-integer":139,"./_to-length":141,"./_to-object":142}],252:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var sameValue = require('./_same-value');
var regExpExec = require('./_regexp-exec-abstract');

// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

},{"./_an-object":38,"./_fix-re-wks":65,"./_regexp-exec-abstract":119,"./_same-value":121}],253:[function(require,module,exports){
'use strict';

var isRegExp = require('./_is-regexp');
var anObject = require('./_an-object');
var speciesConstructor = require('./_species-constructor');
var advanceStringIndex = require('./_advance-string-index');
var toLength = require('./_to-length');
var callRegExpExec = require('./_regexp-exec-abstract');
var regexpExec = require('./_regexp-exec');
var fails = require('./_fails');
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

},{"./_advance-string-index":36,"./_an-object":38,"./_fails":64,"./_fix-re-wks":65,"./_is-regexp":82,"./_regexp-exec":120,"./_regexp-exec-abstract":119,"./_species-constructor":127,"./_to-length":141}],254:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":38,"./_descriptors":58,"./_fails":64,"./_flags":66,"./_redefine":118,"./es6.regexp.flags":249}],255:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":51,"./_collection-strong":49,"./_validate-collection":149}],256:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":131}],257:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":131}],258:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":131}],259:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":131}],260:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":62,"./_string-at":129}],261:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":62,"./_fails-is-regexp":63,"./_string-context":130,"./_to-length":141}],262:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":131}],263:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":131}],264:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":131}],265:[function(require,module,exports){
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":62,"./_to-absolute-index":137}],266:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":62,"./_fails-is-regexp":63,"./_string-context":130}],267:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":131}],268:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":85,"./_string-at":129}],269:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":131}],270:[function(require,module,exports){
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":62,"./_to-iobject":140,"./_to-length":141}],271:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":62,"./_string-repeat":133}],272:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":131}],273:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":62,"./_fails-is-regexp":63,"./_string-context":130,"./_to-length":141}],274:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":131}],275:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":131}],276:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":131}],277:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":134}],278:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":38,"./_descriptors":58,"./_enum-keys":61,"./_export":62,"./_fails":64,"./_global":70,"./_has":71,"./_hide":72,"./_is-array":79,"./_is-object":81,"./_library":89,"./_meta":94,"./_object-create":98,"./_object-dp":99,"./_object-gopd":101,"./_object-gopn":103,"./_object-gopn-ext":102,"./_object-gops":104,"./_object-keys":107,"./_object-pie":108,"./_property-desc":116,"./_redefine":118,"./_set-to-string-tag":124,"./_shared":126,"./_to-iobject":140,"./_to-object":142,"./_to-primitive":143,"./_uid":147,"./_wks":152,"./_wks-define":150,"./_wks-ext":151}],279:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":38,"./_export":62,"./_fails":64,"./_global":70,"./_is-object":81,"./_set-species":123,"./_species-constructor":127,"./_to-absolute-index":137,"./_to-length":141,"./_typed":146,"./_typed-buffer":145}],280:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":62,"./_typed":146,"./_typed-buffer":145}],281:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],282:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],283:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],284:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],285:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],286:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],287:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],288:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":144}],289:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":144}],290:[function(require,module,exports){
'use strict';
var global = require('./_global');
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var validate = require('./_validate-collection');
var NATIVE_WEAK_MAP = require('./_validate-collection');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":42,"./_collection":51,"./_collection-weak":50,"./_global":70,"./_is-object":81,"./_meta":94,"./_object-assign":97,"./_redefine":118,"./_validate-collection":149}],291:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":51,"./_collection-weak":50,"./_validate-collection":149}],292:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_a-function":33,"./_add-to-unscopables":35,"./_array-species-create":45,"./_export":62,"./_flatten-into-array":67,"./_to-length":141,"./_to-object":142}],293:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":35,"./_array-includes":41,"./_export":62}],294:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":62,"./_object-to-array":110}],295:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":53,"./_export":62,"./_object-gopd":101,"./_own-keys":111,"./_to-iobject":140}],296:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":62,"./_object-to-array":110}],297:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":52,"./_export":62,"./_global":70,"./_promise-resolve":115,"./_species-constructor":127}],298:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":62,"./_string-pad":132,"./_user-agent":148}],299:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":62,"./_string-pad":132,"./_user-agent":148}],300:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":134}],301:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":134}],302:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":150}],303:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":70,"./_hide":72,"./_iterators":88,"./_object-keys":107,"./_redefine":118,"./_wks":152,"./es6.array.iterator":164}],304:[function(require,module,exports){
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":62,"./_task":136}],305:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":62,"./_global":70,"./_user-agent":148}],306:[function(require,module,exports){
require('../modules/web.timers');
require('../modules/web.immediate');
require('../modules/web.dom.iterable');
module.exports = require('../modules/_core');

},{"../modules/_core":52,"../modules/web.dom.iterable":303,"../modules/web.immediate":304,"../modules/web.timers":305}],307:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("./elemental");

var _reactRouter = require("react-router");

var _glamor = require("glamor");

var _Mobile = _interopRequireDefault(require("./components/Navigation/Mobile"));

var _Primary = _interopRequireDefault(require("./components/Navigation/Primary"));

var _Secondary = _interopRequireDefault(require("./components/Navigation/Secondary"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The App component is the component that is rendered around all views, and
 * contains common things like navigation, footer, etc.
 */
const classes = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  body: {
    flexGrow: 1
  }
};

const App = props => {
  const listsByPath = require('../utils/lists').listsByPath;

  let children = props.children; // If we're on either a list or an item view

  let currentList, currentSection;

  if (props.params.listId) {
    currentList = listsByPath[props.params.listId]; // If we're on a list path that doesn't exist (e.g. /keystone/gibberishasfw34afsd) this will
    // be undefined

    if (!currentList) {
      children = /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement("p", null, "List not found!"), /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
        to: `${Keystone.adminPath}`
      }, "Go back home"));
    } else {
      // Get the current section we're in for the navigation
      currentSection = Keystone.nav.by.list[currentList.key];
    }
  } // Default current section key to dashboard


  const currentSectionKey = currentSection && currentSection.key || 'dashboard';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _glamor.css)(classes.wrapper)
  }, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement(_Mobile.default, {
    brand: Keystone.brand,
    currentListKey: props.params.listId,
    currentSectionKey: currentSectionKey,
    sections: Keystone.nav.sections,
    signoutUrl: Keystone.signoutUrl
  }), /*#__PURE__*/_react.default.createElement(_Primary.default, {
    currentSectionKey: currentSectionKey,
    brand: Keystone.brand,
    sections: Keystone.nav.sections,
    signoutUrl: Keystone.signoutUrl
  }), currentSection ? /*#__PURE__*/_react.default.createElement(_Secondary.default, {
    currentListKey: props.params.listId,
    lists: currentSection.lists,
    itemId: props.params.itemId
  }) : null), /*#__PURE__*/_react.default.createElement("main", {
    className: (0, _glamor.css)(classes.body)
  }, children), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    appversion: Keystone.appversion,
    backUrl: Keystone.backUrl,
    brand: Keystone.brand,
    User: Keystone.User,
    user: Keystone.user,
    version: Keystone.version
  }));
};

module.exports = App;

},{"../utils/lists":461,"./components/Footer":308,"./components/Navigation/Mobile":311,"./components/Navigation/Primary":313,"./components/Navigation/Secondary":315,"./elemental":379,"glamor":undefined,"react":undefined,"react-router":undefined}],308:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _elemental = require("../../elemental");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The global Footer, displays a link to the website and the current Keystone
 * version in use
 */
var Footer = _react.default.createClass({
  displayName: 'Footer',
  propTypes: {
    appversion: _react.default.PropTypes.string,
    backUrl: _react.default.PropTypes.string,
    brand: _react.default.PropTypes.string,
    user: _react.default.PropTypes.object,
    User: _react.default.PropTypes.object,
    // eslint-disable-line react/sort-prop-types
    version: _react.default.PropTypes.string
  },

  // Render the user
  renderUser() {
    const {
      User,
      user
    } = this.props;
    if (!user) return null;
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, " Signed in as "), /*#__PURE__*/_react.default.createElement("a", {
      href: `${Keystone.adminPath}/${User.path}/${user.id}`,
      tabIndex: "-1",
      className: (0, _glamor.css)(classes.link)
    }, user.name), /*#__PURE__*/_react.default.createElement("span", null, "."));
  },

  render() {
    const {
      backUrl,
      brand,
      appversion,
      version
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("footer", {
      className: (0, _glamor.css)(classes.footer),
      "data-keystone-footer": true
    }, /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement("a", {
      href: backUrl,
      tabIndex: "-1",
      className: (0, _glamor.css)(classes.link)
    }, brand + (appversion ? ' ' + appversion : '')), /*#__PURE__*/_react.default.createElement("span", null, " powered by "), /*#__PURE__*/_react.default.createElement("a", {
      href: "http://keystonejs.com",
      target: "_blank",
      className: (0, _glamor.css)(classes.link),
      tabIndex: "-1"
    }, "KeystoneJS"), /*#__PURE__*/_react.default.createElement("span", null, " version ", version, "."), this.renderUser()));
  }

});
/* eslint quote-props: ["error", "as-needed"] */


const linkHoverAndFocus = {
  color: _theme.default.color.gray60,
  outline: 'none'
};
const classes = {
  footer: {
    boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
    color: _theme.default.color.gray40,
    fontSize: _theme.default.font.size.small,
    paddingBottom: 30,
    paddingTop: 40,
    textAlign: 'center'
  },
  link: {
    color: _theme.default.color.gray60,
    ':hover': linkHoverAndFocus,
    ':focus': linkHoverAndFocus
  }
};
module.exports = Footer;

},{"../../../theme":456,"../../elemental":379,"glamor":undefined,"react":undefined}],309:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list item of the mobile navigation
 */
const MobileListItem = _react.default.createClass({
  displayName: 'MobileListItem',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    href: _react.default.PropTypes.string.isRequired,
    onClick: _react.default.PropTypes.func
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      className: this.props.className,
      to: this.props.href,
      onClick: this.props.onClick,
      tabIndex: "-1"
    }, this.props.children);
  }

});

module.exports = MobileListItem;

},{"react":undefined,"react-router":undefined}],310:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A mobile section
 */
const MobileSectionItem = _react.default.createClass({
  displayName: 'MobileSectionItem',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    currentListKey: _react.default.PropTypes.string,
    href: _react.default.PropTypes.string.isRequired,
    lists: _react.default.PropTypes.array
  },

  // Render the lists
  renderLists() {
    if (!this.props.lists || this.props.lists.length <= 1) return null;
    const navLists = this.props.lists.map(item => {
      // Get the link and the classname
      const href = item.external ? item.path : `${Keystone.adminPath}/${item.path}`;
      const className = this.props.currentListKey && this.props.currentListKey === item.path ? 'MobileNavigation__list-item is-active' : 'MobileNavigation__list-item';
      return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
        key: item.path,
        href: href,
        className: className,
        onClick: this.props.onClick
      }, item.label);
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation__lists"
    }, navLists);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: this.props.className
    }, /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      className: "MobileNavigation__section-item",
      to: this.props.href,
      tabIndex: "-1",
      onClick: this.props.onClick
    }, this.props.children), this.renderLists());
  }

});

module.exports = MobileSectionItem;

},{"./ListItem":309,"react":undefined,"react-router":undefined}],311:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _SectionItem = _interopRequireDefault(require("./SectionItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The mobile navigation, displayed on screens < 768px
 */
const ESCAPE_KEY_CODE = 27;

const MobileNavigation = _react.default.createClass({
  displayName: 'MobileNavigation',
  propTypes: {
    brand: _react.default.PropTypes.string,
    currentListKey: _react.default.PropTypes.string,
    currentSectionKey: _react.default.PropTypes.string,
    sections: _react.default.PropTypes.array.isRequired,
    signoutUrl: _react.default.PropTypes.string
  },

  getInitialState() {
    return {
      barIsVisible: false
    };
  },

  // Handle showing and hiding the menu based on the window size when
  // resizing
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize() {
    this.setState({
      barIsVisible: window.innerWidth < 768
    });
  },

  // Toggle the menu
  toggleMenu() {
    this[this.state.menuIsVisible ? 'hideMenu' : 'showMenu']();
  },

  // Show the menu
  showMenu() {
    this.setState({
      menuIsVisible: true
    }); // Make the body unscrollable, so you can only scroll in the menu

    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keyup', this.handleEscapeKey, false);
  },

  // Hide the menu
  hideMenu() {
    this.setState({
      menuIsVisible: false
    }); // Make the body scrollable again

    document.body.style.overflow = null;
    document.body.removeEventListener('keyup', this.handleEscapeKey, false);
  },

  // If the escape key was pressed, hide the menu
  handleEscapeKey(event) {
    if (event.which === ESCAPE_KEY_CODE) {
      this.hideMenu();
    }
  },

  renderNavigation() {
    if (!this.props.sections || !this.props.sections.length) return null;
    return this.props.sections.map(section => {
      // Get the link and the classname
      const href = section.lists[0].external ? section.lists[0].path : `${Keystone.adminPath}/${section.lists[0].path}`;
      const className = this.props.currentSectionKey && this.props.currentSectionKey === section.key ? 'MobileNavigation__section is-active' : 'MobileNavigation__section'; // Render a SectionItem

      return /*#__PURE__*/_react.default.createElement(_SectionItem.default, {
        key: section.key,
        className: className,
        href: href,
        lists: section.lists,
        currentListKey: this.props.currentListKey,
        onClick: this.toggleMenu
      }, section.label);
    });
  },

  // Render a blockout
  renderBlockout() {
    if (!this.state.menuIsVisible) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation__blockout",
      onClick: this.toggleMenu
    });
  },

  // Render the sidebar menu
  renderMenu() {
    if (!this.state.menuIsVisible) return null;
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: "MobileNavigation__menu"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation__sections"
    }, this.renderNavigation()));
  },

  render() {
    if (!this.state.barIsVisible) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation__bar"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: this.toggleMenu,
      className: "MobileNavigation__bar__button MobileNavigation__bar__button--menu"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: 'MobileNavigation__bar__icon octicon octicon-' + (this.state.menuIsVisible ? 'x' : 'three-bars')
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "MobileNavigation__bar__label"
    }, this.props.brand), /*#__PURE__*/_react.default.createElement("a", {
      href: this.props.signoutUrl,
      className: "MobileNavigation__bar__button MobileNavigation__bar__button--signout"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "MobileNavigation__bar__icon octicon octicon-sign-out"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "MobileNavigation__bar--placeholder"
    }), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: "MobileNavigation__menu",
      transitionEnterTimeout: 260,
      transitionLeaveTimeout: 200
    }, this.renderMenu()), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: "react-transitiongroup-fade",
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0
    }, this.renderBlockout()));
  }

});

module.exports = MobileNavigation;

},{"./SectionItem":310,"react":undefined,"react-addons-css-transition-group":undefined}],312:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A item in the primary navigation. If it has a "to" prop it'll render a
 * react-router "Link", if it has a "href" prop it'll render a simple "a" tag
 */
const PrimaryNavItem = _ref => {
  let {
    children,
    className,
    href,
    label,
    title,
    to,
    active
  } = _ref;
  const itemClassName = (0, _classnames.default)('primary-navbar__item', className);
  const Button = to ? /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
    className: "primary-navbar__link",
    key: title,
    tabIndex: "-1",
    title: title,
    to: to // Block clicks on active link
    ,
    onClick: evt => {
      if (active) evt.preventDefault();
    }
  }, children) : /*#__PURE__*/_react.default.createElement("a", {
    className: "primary-navbar__link",
    href: href,
    key: title,
    tabIndex: "-1",
    title: title
  }, children);
  return /*#__PURE__*/_react.default.createElement("li", {
    className: itemClassName,
    "data-section-label": label
  }, Button);
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
PrimaryNavItem.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  href: _react.PropTypes.string,
  label: _react.PropTypes.string,
  title: _react.PropTypes.string,
  to: _react.PropTypes.string
};
module.exports = PrimaryNavItem;

},{"classnames":undefined,"react":undefined,"react-router":undefined}],313:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../../elemental");

var _NavItem = _interopRequireDefault(require("./NavItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The primary (i.e. uppermost) navigation on desktop. Renders all sections and
 * the home-, website- and signout buttons.
 */
var PrimaryNavigation = _react.default.createClass({
  displayName: 'PrimaryNavigation',
  propTypes: {
    brand: _react.default.PropTypes.string,
    currentSectionKey: _react.default.PropTypes.string,
    sections: _react.default.PropTypes.array.isRequired,
    signoutUrl: _react.default.PropTypes.string
  },

  getInitialState() {
    return {};
  },

  // Handle resizing, hide this navigation on mobile (i.e. < 768px) screens
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize() {
    this.setState({
      navIsVisible: window.innerWidth >= 768
    });
  },

  // Render the sign out button
  renderSignout() {
    if (!this.props.signoutUrl) return null;
    return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
      label: "octicon-sign-out",
      href: this.props.signoutUrl,
      title: "Sign Out"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "octicon octicon-sign-out"
    }));
  },

  // Render the back button
  renderBackButton() {
    if (!Keystone.backUrl) return null;
    return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
      label: "octicon-globe",
      href: Keystone.backUrl,
      title: 'Front page - ' + this.props.brand
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "octicon octicon-globe"
    }));
  },

  // Render the link to the webpage
  renderFrontLink() {
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: "app-nav app-nav--primary app-nav--right"
    }, this.renderBackButton(), this.renderSignout());
  },

  renderBrand() {
    // TODO: support navbarLogo from keystone config
    const {
      brand,
      currentSectionKey
    } = this.props;
    const className = currentSectionKey === 'dashboard' ? 'primary-navbar__brand primary-navbar__item--active' : 'primary-navbar__brand';
    return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
      className: className,
      label: "octicon-home",
      title: 'Dashboard - ' + brand,
      to: Keystone.adminPath
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "octicon octicon-home"
    }));
  },

  // Render the navigation
  renderNavigation() {
    if (!this.props.sections || !this.props.sections.length) return null;
    return this.props.sections.map(section => {
      // Get the link and the class name
      const to = !section.lists[0].external && `${Keystone.adminPath}/${section.lists[0].path}`;
      const href = section.lists[0].external && section.lists[0].path;
      const isActive = this.props.currentSectionKey && this.props.currentSectionKey === section.key;
      const className = isActive ? 'primary-navbar__item--active' : null;
      return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
        active: isActive,
        key: section.key,
        label: section.label,
        className: className,
        to: to,
        href: href
      }, section.label);
    });
  },

  render() {
    if (!this.state.navIsVisible) return null;
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: "primary-navbar"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Container, {
      clearFloatingChildren: true
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "app-nav app-nav--primary app-nav--left"
    }, this.renderBrand(), this.renderNavigation()), this.renderFrontLink()));
  }

});

module.exports = PrimaryNavigation;

},{"../../../elemental":379,"./NavItem":312,"react":undefined}],314:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A navigation item of the secondary navigation
 */
const SecondaryNavItem = _react.default.createClass({
  displayName: 'SecondaryNavItem',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    href: _react.default.PropTypes.string.isRequired,
    onClick: _react.default.PropTypes.func,
    path: _react.default.PropTypes.string,
    title: _react.default.PropTypes.string
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: this.props.className,
      "data-list-path": this.props.path
    }, /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      to: this.props.href,
      onClick: this.props.onClick,
      title: this.props.title,
      tabIndex: "-1"
    }, this.props.children));
  }

});

module.exports = SecondaryNavItem;

},{"react":undefined,"react-router":undefined}],315:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _elemental = require("../../../elemental");

var _active = require("../../../screens/List/actions/active");

var _NavItem = _interopRequireDefault(require("./NavItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The secondary navigation links to inidvidual lists of a section
 */
var SecondaryNavigation = _react.default.createClass({
  displayName: 'SecondaryNavigation',
  propTypes: {
    currentListKey: _react.default.PropTypes.string,
    lists: _react.default.PropTypes.array.isRequired
  },

  getInitialState() {
    return {};
  },

  // Handle resizing and hide this nav on mobile (i.e. < 768px) screens
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize() {
    this.setState({
      navIsVisible: this.props.lists && Object.keys(this.props.lists).length > 0 && window.innerWidth >= 768
    });
  },

  // Render the navigation
  renderNavigation(lists) {
    const navigation = Object.keys(lists).map(key => {
      const list = lists[key]; // Get the link and the classname

      const href = list.external ? list.path : `${Keystone.adminPath}/${list.path}`;
      const isActive = this.props.currentListKey && this.props.currentListKey === list.path;
      const className = isActive ? 'active' : null;

      const onClick = evt => {
        // If it's the currently active navigation item and we're not on the item view,
        // clear the query params on click
        if (isActive && !this.props.itemId) {
          evt.preventDefault();
          this.props.dispatch((0, _active.setActiveList)(this.props.currentList, this.props.currentListKey));
        }
      };

      return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
        key: list.path,
        path: list.path,
        className: className,
        href: href,
        onClick: onClick
      }, list.label);
    });
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: "app-nav app-nav--secondary app-nav--left"
    }, navigation);
  },

  render() {
    if (!this.state.navIsVisible) return null;
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: "secondary-navbar"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Container, {
      clearFloatingChildren: true
    }, this.renderNavigation(this.props.lists)));
  }

});

module.exports = (0, _reactRedux.connect)(state => {
  return {
    currentList: state.lists.currentList
  };
})(SecondaryNavigation);

},{"../../../elemental":379,"../../../screens/List/actions/active":410,"./NavItem":314,"react":undefined,"react-redux":undefined}],316:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.alert.color.danger,
  error: _theme.default.alert.color.danger,
  info: _theme.default.alert.color.info,
  success: _theme.default.alert.color.success,
  warning: _theme.default.alert.color.warning
};

},{"../../../theme":456}],317:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// clone children if a class exists for the tagname
const cloneWithClassnames = c => {
  const type = c.type && c.type.displayName ? c.type.displayName : c.type || null;
  if (!type || !_styles.default[type]) return c;
  return /*#__PURE__*/(0, _react.cloneElement)(c, {
    className: (0, _glamor.css)(_styles.default[type])
  });
};

function Alert(_ref) {
  let {
    children,
    className,
    color,
    component: Component,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.alert, _styles.default[color], className);
  props.children = _react.Children.map(children, cloneWithClassnames);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    "data-alert-type": color
  }));
}

;
Alert.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)).isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
};
Alert.defaultProps = {
  component: 'div'
};
module.exports = Alert;

},{"./colors":316,"./styles":318,"glamor":undefined,"react":undefined}],318:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  colorVariants[color] = {
    backgroundColor: _colors.default[color].background,
    borderColor: _colors.default[color].border,
    color: _colors.default[color].text
  };
}); // Prepare headings

const headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
  headingTagnames[tag] = {
    color: 'inherit'
  };
});
const linkStyles = {
  color: 'inherit',
  textDecoration: 'underline',
  ':hover': {
    color: 'inherit'
  },
  ':focus': {
    color: 'inherit'
  }
};
module.exports = {
  alert: {
    borderColor: 'transparent',
    borderRadius: _theme.default.alert.borderRadius,
    borderStyle: 'solid',
    borderWidth: _theme.default.alert.borderWidth,
    margin: _theme.default.alert.margin,
    padding: _theme.default.alert.padding
  },
  // tagnames
  a: linkStyles,
  Link: linkStyles,
  strong: {
    fontWeight: 500
  },
  // headings
  ...headingTagnames,
  // colors
  ...colorVariants
};

},{"../../../theme":456,"./colors":316}],319:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BlankState(_ref) {
  let {
    className,
    children,
    heading,
    component: Component,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.container, className);
  return /*#__PURE__*/_react.default.createElement(Component, props, !!heading && /*#__PURE__*/_react.default.createElement("h2", {
    "data-e2e-blank-state-heading": true,
    className: (0, _glamor.css)(classes.heading)
  }, heading), children);
}

;
BlankState.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  heading: _react.PropTypes.string
};
BlankState.defaultProps = {
  component: 'div'
};
/* eslint quote-props: ["error", "as-needed"] */

const classes = {
  container: {
    backgroundColor: _theme.default.blankstate.background,
    borderRadius: _theme.default.blankstate.borderRadius,
    color: _theme.default.blankstate.color,
    paddingBottom: _theme.default.blankstate.paddingVertical,
    paddingLeft: _theme.default.blankstate.paddingHorizontal,
    paddingRight: _theme.default.blankstate.paddingHorizontal,
    paddingTop: _theme.default.blankstate.paddingVertical,
    textAlign: 'center'
  },
  heading: {
    color: 'inherit',
    ':last-child': {
      marginBottom: 0
    }
  }
};
module.exports = BlankState;

},{"../../../theme":456,"glamor":undefined,"react":undefined}],320:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const commonClasses = _styles.default.common;
const stylesheetCache = {};

function getStyleSheet(variant, color) {
  const cacheKey = `${variant}-${color}`;

  if (!stylesheetCache[cacheKey]) {
    const variantStyles = _styles.default[variant](color);

    stylesheetCache[cacheKey] = variantStyles;
  }

  return stylesheetCache[cacheKey];
}

const BUTTON_SIZES = ['large', 'medium', 'small', 'xsmall'];
const BUTTON_VARIANTS = ['fill', 'hollow', 'link'];
const BUTTON_COLORS = ['default', 'primary', 'success', 'warning', 'danger', 'cancel', 'delete']; // NOTE must NOT be functional component to allow `refs`

class Button extends _react.Component {
  render() {
    var {
      active,
      cssStyles,
      block,
      className,
      color,
      component: Tag,
      disabled,
      size,
      variant,
      ...props
    } = this.props; // get the styles

    const variantClasses = getStyleSheet(variant, color);
    props.className = (0, _glamor.css)(commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null, ...cssStyles);

    if (className) {
      props.className += ' ' + className;
    } // return an anchor or button


    if (!Tag) {
      Tag = props.href ? 'a' : 'button';
    } // Ensure buttons don't submit by default


    if (Tag === 'button' && !props.type) {
      props.type = 'button';
    }

    return /*#__PURE__*/_react.default.createElement(Tag, props);
  }

}

;
Button.propTypes = {
  active: _react.PropTypes.bool,
  block: _react.PropTypes.bool,
  color: _react.PropTypes.oneOf(BUTTON_COLORS),
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  cssStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })),
  disabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(BUTTON_SIZES),
  variant: _react.PropTypes.oneOf(BUTTON_VARIANTS)
};
Button.defaultProps = {
  cssStyles: [],
  color: 'default',
  variant: 'fill'
};
module.exports = Button;

},{"./styles":321,"glamor":undefined,"react":undefined}],321:[function(require,module,exports){
"use strict";

var _css = require("../../../utils/css");

var _color = require("../../../utils/color");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Common Styles
// ----------------
exports.common = {
  // Base Button
  // ----------------
  base: {
    'appearance': 'none',
    'background': 'none',
    'borderWidth': _theme.default.button.borderWidth,
    'borderStyle': 'solid',
    'borderColor': 'transparent',
    'borderRadius': _theme.default.button.borderRadius,
    'cursor': 'pointer',
    'display': 'inline-block',
    'fontWeight': _theme.default.button.font.weight,
    'height': _theme.default.component.height,
    'lineHeight': _theme.default.component.lineHeight,
    'marginBottom': 0,
    'padding': `0 ${_theme.default.button.paddingHorizontal}`,
    'outline': 0,
    'textAlign': 'center',
    'touchAction': 'manipulation',
    'userSelect': 'none',
    'verticalAlign': 'middle',
    'whiteSpace': 'nowrap',
    ':hover': {
      color: _theme.default.button.default.textColor,
      textDecoration: 'none'
    },
    ':focus': {
      color: _theme.default.button.default.textColor,
      textDecoration: 'none'
    }
  },
  // Block Display
  // ----------------
  block: {
    display: 'block',
    width: '100%'
  },
  // Disabled
  // ----------------
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none'
  },
  // Sizes
  // ----------------
  large: {
    fontSize: _theme.default.font.size.large
  },
  default: {
    fontSize: _theme.default.font.size.default
  },
  small: {
    fontSize: _theme.default.font.size.small
  },
  xsmall: {
    fontSize: _theme.default.font.size.xsmall,
    lineHeight: '1.9',
    paddingLeft: '.66em',
    paddingRight: '.66em'
  }
}; // Fill Variant
// ----------------

function buttonFillVariant(textColor, bgColor) {
  const hoverStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)),
    borderColor: `${(0, _color.darken)(bgColor, 5)} ${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 15)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: textColor,
    outline: 'none'
  };
  const focusStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)),
    borderColor: `${(0, _color.darken)(bgColor, 5)} ${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 15)}`,
    boxShadow: `0 0 0 3px ${(0, _color.fade)(bgColor, 25)}`,
    color: textColor,
    outline: 'none'
  };
  const activeStyles = {
    backgroundColor: (0, _color.darken)(bgColor, 10),
    backgroundImage: 'none',
    borderColor: `${(0, _color.darken)(bgColor, 25)} ${(0, _color.darken)(bgColor, 15)} ${(0, _color.darken)(bgColor, 10)}`,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
  };
  return {
    base: { ...(0, _css.gradientVertical)((0, _color.lighten)(bgColor, 5), (0, _color.darken)(bgColor, 10), bgColor),
      'borderColor': `${(0, _color.darken)(bgColor, 10)} ${(0, _color.darken)(bgColor, 20)} ${(0, _color.darken)(bgColor, 25)}`,
      'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      'color': textColor,
      'fontWeight': 400,
      'textShadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    },
    active: activeStyles
  };
} // TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)


function buttonFillDefault() {
  const borderColor = _theme.default.input.border.color.default;
  const hoverStyles = { ...(0, _css.gradientVertical)('#fff', '#eee'),
    borderColor: `${(0, _color.darken)(borderColor, 5)} ${(0, _color.darken)(borderColor, 5)} ${(0, _color.darken)(borderColor, 10)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: _theme.default.color.text
  };
  const focusStyles = {
    borderColor: _theme.default.color.primary,
    boxShadow: `0 0 0 3px ${(0, _color.fade)(_theme.default.color.primary, 10)}`,
    color: _theme.default.color.text,
    outline: 'none'
  };
  const activeStyles = {
    background: '#e6e6e6',
    borderColor: (0, _color.darken)(borderColor, 10),
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: _theme.default.color.text
  };
  return {
    base: { ...(0, _css.gradientVertical)('#fafafa', '#eaeaea'),
      'borderColor': `${borderColor} ${(0, _color.darken)(borderColor, 6)} ${(0, _color.darken)(borderColor, 12)}`,
      'color': _theme.default.color.text,
      'textShadow': '0 1px 0 white',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    },
    // gross hack
    active: { ...activeStyles,
      ':hover': activeStyles,
      ':focus': { ...activeStyles,
        ...focusStyles,
        boxShadow: `0 0 0 3px ${(0, _color.fade)(_theme.default.color.primary, 10)}, inset 0 1px 2px rgba(0, 0, 0, 0.1)`
      },
      ':active': activeStyles
    }
  };
}

exports.fill = color => {
  switch (color) {
    case 'default':
      return buttonFillDefault();

    case 'cancel':
    case 'delete':
      return buttonFillVariant('white', _theme.default.button.danger.bgColor);

    default:
      return buttonFillVariant('white', _theme.default.button[color].bgColor);
  }
}; // Hollow Variant
// ----------------


function buttonHollowVariant(textColor, borderColor) {
  const focusAndHoverStyles = {
    backgroundImage: 'none',
    backgroundColor: (0, _color.fade)(borderColor, 15),
    borderColor: (0, _color.darken)(borderColor, 15),
    boxShadow: 'none',
    color: textColor,
    outline: 'none'
  };
  const focusOnlyStyles = {
    boxShadow: `0 0 0 3px ${(0, _color.fade)(borderColor, 10)}`
  };
  const activeStyles = {
    backgroundColor: (0, _color.fade)(borderColor, 35),
    borderColor: (0, _color.darken)(borderColor, 25),
    boxShadow: 'none'
  };
  return {
    base: {
      'background': 'none',
      'borderColor': borderColor,
      'color': textColor,
      ':hover': focusAndHoverStyles,
      ':focus ': _extends({}, focusAndHoverStyles, focusOnlyStyles),
      ':active': activeStyles
    },
    active: activeStyles
  };
}

;

exports.hollow = color => {
  // TODO: better handling of cancel and delete colors
  if (color === 'cancel' || color === 'delete') color = 'danger';
  return buttonHollowVariant(_theme.default.button[color].bgColor, _theme.default.button[color].borderColor);
}; // Link Variant
// ----------------


function buttonLinkVariant(textColor, hoverColor) {
  const hoverStyles = {
    color: hoverColor,
    textDecoration: 'underline'
  };
  return {
    base: {
      'background': 'none',
      'border': 0,
      'boxShadow': 'none',
      'color': textColor,
      'fontWeight': 'normal',
      'outline': 'none',
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': hoverStyles
    },
    active: hoverStyles
  };
}

;

function buttonLinkDelete() {
  const styles = buttonLinkVariant(_theme.default.color.gray40, _theme.default.color.danger);
  const hoverStyles = { ...(0, _css.gradientVertical)((0, _color.lighten)(_theme.default.color.danger, 10), (0, _color.darken)(_theme.default.color.danger, 10)),
    backgroundColor: _theme.default.color.danger,
    borderColor: `${(0, _color.darken)(_theme.default.color.danger, 4)} ${(0, _color.darken)(_theme.default.color.danger, 8)} ${(0, _color.darken)(_theme.default.color.danger, 12)}`,
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: 'white',
    textDecoration: 'none'
  };
  const activeStyles = {
    backgroundColor: (0, _color.darken)(_theme.default.color.danger, 4),
    backgroundImage: 'none',
    borderColor: `${(0, _color.darken)(_theme.default.color.danger, 12)} ${(0, _color.darken)(_theme.default.color.danger, 8)} ${(0, _color.darken)(_theme.default.color.danger, 8)}`,
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: 'white'
  };
  return {
    base: { ...styles.base,
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': activeStyles
    },
    active: activeStyles
  };
}

exports.link = color => {
  switch (color) {
    case 'default':
      return buttonLinkVariant(_theme.default.color.link, _theme.default.color.linkHover);

    case 'cancel':
      return buttonLinkVariant(_theme.default.color.gray40, _theme.default.color.danger);

    case 'delete':
      return buttonLinkDelete();

    default:
      return buttonLinkVariant(_theme.default.color[color], _theme.default.color[color]);
  }
};

},{"../../../theme":456,"../../../utils/color":458,"../../../utils/css":460}],322:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Center(_ref) {
  let {
    className,
    component: Component,
    height,
    style,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.center, className);
  props.style = {
    height,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Center.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Center.defaultProps = {
  component: 'div',
  height: 'auto'
};
module.exports = Center;

},{"./styles":323,"glamor":undefined,"react":undefined}],323:[function(require,module,exports){
"use strict";

// ==============================
// Center
// ==============================
module.exports = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

},{}],324:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
  baseColors[color] = {
    background: (0, _color.fade)(_theme.default.color[color], 10),
    backgroundActive: (0, _color.fade)(_theme.default.color[color], 20),
    backgroundHover: (0, _color.fade)(_theme.default.color[color], 15),
    text: _theme.default.color[color]
  };
});
const invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(color => {
  invertedColors[color + '__inverted'] = {
    background: _theme.default.color[color],
    backgroundActive: (0, _color.lighten)(_theme.default.color[color], 5),
    backgroundHover: (0, _color.lighten)(_theme.default.color[color], 15),
    text: 'white'
  };
});
module.exports = {
  default: {
    background: _theme.default.color.gray10,
    backgroundActive: _theme.default.color.gray20,
    backgroundHover: _theme.default.color.gray15,
    text: _theme.default.color.gray60
  },
  ...baseColors,
  // inverted
  default__inverted: {
    background: _theme.default.color.gray60,
    backgroundActive: (0, _color.lighten)(_theme.default.color.gray60, 5),
    backgroundHover: (0, _color.lighten)(_theme.default.color.gray60, 15),
    text: 'white'
  },
  ...invertedColors
};

},{"../../../theme":456,"../../../utils/color":458}],325:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Chip(_ref) {
  let {
    className,
    children,
    color,
    inverted,
    label,
    onClear,
    onClick,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.chip, className);
  const labelClassName = (0, _glamor.css)(_styles.default.button, _styles.default.label, _styles.default['button__' + color + (inverted ? '__inverted' : '')]);
  const clearClassName = (0, _glamor.css)(_styles.default.button, _styles.default.clear, _styles.default['button__' + color + (inverted ? '__inverted' : '')]);
  return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: labelClassName
  }, label, children), !!onClear && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClear,
    className: clearClassName
  }, "\xD7"));
}

;
Chip.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)).isRequired,
  inverted: _react.PropTypes.bool,
  label: _react.default.PropTypes.string.isRequired,
  onClear: _react.default.PropTypes.func,
  onClick: _react.default.PropTypes.func
};
Chip.defaultProps = {
  color: 'default'
};
module.exports = Chip;

},{"./colors":324,"./styles":326,"glamor":undefined,"react":undefined}],326:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

var _css = require("../../../utils/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  const hoverStyles = {
    backgroundColor: _colors.default[color].backgroundHover
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors.default[color].background,
    color: _colors.default[color].text,
    ':hover': hoverStyles,
    ':focus': hoverStyles,
    ':active': {
      backgroundColor: _colors.default[color].backgroundActive
    }
  };
});
module.exports = {
  chip: {
    display: 'inline-block',
    fontSize: _theme.default.font.size.small,
    fontWeight: 500,
    marginRight: '0.5em',
    overflow: 'hidden',
    lineHeight: '2.2em'
  },
  // tagnames
  button: {
    appearance: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    float: 'left',
    padding: '0 .9em',
    outline: 'none',
    // make pills - exaggerate the padding toward the radii so it looks even
    ':first-child': { ...(0, _css.borderLeftRadius)('3em'),
      paddingLeft: '1.1em'
    },
    ':last-child': { ...(0, _css.borderRightRadius)('3em'),
      paddingRight: '1.1em'
    }
  },
  // provide separation between the label and clear buttons
  // floating stops the margins from collapsing into eaching
  label: {
    marginRight: 1
  },
  clear: {
    marginLeft: 1
  },
  // colors
  ...colorVariants
};

},{"../../../theme":456,"../../../utils/css":460,"./colors":324}],327:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Container(_ref) {
  let {
    className,
    clearFloatingChildren,
    component: Component,
    width,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.container, _styles.default[width], clearFloatingChildren ? _styles.default.clearfix : null, className);
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Container.propTypes = {
  clearFloatingChildren: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  width: _react.PropTypes.oneOf(Object.keys(_sizes.default)).isRequired
};
Container.defaultProps = {
  component: 'div',
  width: 'large'
};
module.exports = Container;

},{"./sizes":328,"./styles":329,"glamor":undefined,"react":undefined}],328:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  small: _theme.default.container.size.small,
  medium: _theme.default.container.size.medium,
  large: _theme.default.container.size.large
};

},{"../../../theme":456}],329:[function(require,module,exports){
"use strict";

var _sizes = _interopRequireDefault(require("./sizes"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Container
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare sizes
const sizeVariants = {};
Object.keys(_sizes.default).forEach(size => {
  sizeVariants[size] = {
    maxWidth: _sizes.default[size]
  };
});
/*
	Micro clearfix hack
	1.	The space content is one way to avoid an Opera bug when the
			contenteditable attribute is included anywhere else in the document.
			Otherwise it causes space to appear at the top and bottom of elements
			that are clearfixed.
	2.	The use of `table` rather than `block` is only necessary if using
			`:before` to contain the top-margins of child elements.
*/

const clearfixStyles = {
  clear: 'both',
  content: '" "',
  // 1
  display: 'table' // 2

};
module.exports = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: _theme.default.container.gutter,
    paddingRight: _theme.default.container.gutter
  },
  // clear floating children
  clearfix: {
    ':before': clearfixStyles,
    ':after': clearfixStyles
  },
  // sizes
  ...sizeVariants
};

},{"../../../theme":456,"./sizes":328}],330:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint quote-props: ["error", "as-needed"] */
function DropdownButton(_ref) {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Button.default, props, children, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.arrow)
  }));
}

; // NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it

const classes = {
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    borderTop: '0.3em solid',
    // 1
    display: 'inline-block',
    height: 0,
    marginTop: '-0.125em',
    // 2
    verticalAlign: 'middle',
    width: 0,
    // add spacing
    ':first-child': {
      marginRight: '0.5em'
    },
    ':last-child': {
      marginLeft: '0.5em'
    }
  }
};
module.exports = DropdownButton;

},{"../Button":320,"glamor":undefined,"react":undefined}],331:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class FormField extends _react.Component {
  constructor() {
    super();
    this.formFieldId = generateId();
  }

  getChildContext() {
    return {
      formFieldId: this.formFieldId
    };
  }

  render() {
    const {
      formLayout = 'basic',
      labelWidth
    } = this.context;
    const {
      cssStyles,
      children,
      className,
      cropLabel,
      htmlFor,
      label,
      offsetAbsentLabel,
      ...props
    } = this.props;
    props.className = (0, _glamor.css)(_styles.default.FormField, _styles.default['FormField--form-layout-' + formLayout], offsetAbsentLabel ? _styles.default['FormField--offset-absent-label'] : null, cssStyles);

    if (className) {
      props.className += ' ' + className;
    }

    if (offsetAbsentLabel && labelWidth) {
      props.style = {
        paddingLeft: labelWidth,
        ...props.style
      };
    } // elements


    const componentLabel = label ? /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
      htmlFor: htmlFor,
      cropText: cropLabel
    }, label) : null;
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
      htmlFor: htmlFor
    }), componentLabel, children);
  }

}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormField.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
FormField.childContextTypes = {
  formFieldId: _react.PropTypes.string
};
FormField.propTypes = {
  children: _react.PropTypes.node,
  cropLabel: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  htmlFor: _react.default.PropTypes.string,
  label: _react.default.PropTypes.string,
  offsetAbsentLabel: _react.default.PropTypes.bool
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

;
module.exports = FormField;

},{"../FormLabel":336,"./styles":332,"glamor":undefined,"react":undefined}],332:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Field
// ==============================
module.exports = {
  'FormField': {
    marginBottom: '1em',
    position: 'relative'
  },
  // when inside a horizontal form
  'FormField--form-layout-horizontal': {
    [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%'
    }
  },
  // inside horizontal form
  // typically for use with submit button inside
  'FormField--offset-absent-label': {
    paddingLeft: _theme.default.form.label.width
  },
  // when inside an inline form
  'FormField--form-layout-inline': {
    'display': 'inline-block',
    'paddingLeft': '0.25em',
    'paddingRight': '0.25em',
    'verticalAlign': 'top',
    ':first-child': {
      paddingLeft: 0
    },
    ':last-child': {
      paddingRight: 0
    }
  }
};

},{"../../../theme":456}],333:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _concatClassnames = _interopRequireDefault(require("../../../utils/concatClassnames"));

var _noedit = _interopRequireDefault(require("./noedit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// NOTE must NOT be functional component to allow `refs`
class FormInput extends _react.Component {
  blur() {
    this.target.blur();
  }

  focus() {
    this.target.focus();
  }

  render() {
    const {
      cssStyles,
      className,
      disabled,
      id,
      multiline,
      noedit,
      size,
      ...props
    } = this.props; // NOTE return a different component for `noedit`

    if (noedit) return /*#__PURE__*/_react.default.createElement(_noedit.default, this.props);
    const {
      formFieldId,
      formLayout
    } = this.context;
    props.id = id || formFieldId;
    props.className = (0, _glamor.css)(_styles.default.FormInput, _styles.default['FormInput__size--' + size], disabled ? _styles.default['FormInput--disabled'] : null, formLayout ? _styles.default['FormInput--form-layout-' + formLayout] : null, ...(0, _concatClassnames.default)(cssStyles));

    if (className) {
      props.className += ' ' + className;
    }

    const setRef = n => this.target = n;

    const Tag = multiline ? 'textarea' : 'input';
    return /*#__PURE__*/_react.default.createElement(Tag, _extends({
      ref: setRef,
      disabled: props.disabled
    }, props));
  }

}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormInput.propTypes = {
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  multiline: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['default', 'small', 'large']),
  type: _react.PropTypes.string
};
FormInput.defaultProps = {
  size: 'default',
  type: 'text'
};
FormInput.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string
};
module.exports = FormInput;

},{"../../../utils/concatClassnames":459,"./noedit":334,"./styles":335,"glamor":undefined,"react":undefined}],334:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint quote-props: ["error", "as-needed"] */
function FormInputNoedit(_ref) {
  let {
    className,
    component: Component,
    cropText,
    multiline,
    noedit,
    // NOTE not used, just removed from props
    type,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, props.href || props.onClick ? classes.anchor : null, className);
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
FormInputNoedit.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool
};
FormInputNoedit.defaultProps = {
  component: 'span'
};
const anchorHoverAndFocusStyles = {
  backgroundColor: (0, _color.fade)(_theme.default.color.link, 10),
  borderColor: (0, _color.fade)(_theme.default.color.link, 10),
  color: _theme.default.color.link,
  outline: 'none',
  textDecoration: 'underline'
};
const classes = {
  noedit: {
    appearance: 'none',
    backgroundColor: _theme.default.input.background.noedit,
    backgroundImage: 'none',
    borderColor: _theme.default.input.border.color.noedit,
    borderRadius: _theme.default.input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme.default.input.border.width,
    color: _theme.default.color.gray80,
    display: 'inline-block',
    lineHeight: _theme.default.input.lineHeight,
    padding: `0 ${_theme.default.input.paddingHorizontal}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    verticalAlign: 'middle',
    // prevent empty inputs from collapsing by adding content
    ':empty:before': {
      color: _theme.default.color.gray40,
      content: '"(no value)"'
    }
  },
  multiline: {
    display: 'block',
    height: 'auto',
    lineHeight: '1.4',
    paddingBottom: '0.6em',
    paddingTop: '0.6em'
  },
  // indicate clickability when using an anchor
  anchor: {
    backgroundColor: (0, _color.fade)(_theme.default.color.link, 5),
    borderColor: (0, _color.fade)(_theme.default.color.link, 10),
    color: _theme.default.color.link,
    marginRight: 5,
    minWidth: 0,
    textDecoration: 'none',
    ':hover': anchorHoverAndFocusStyles,
    ':focus': anchorHoverAndFocusStyles
  }
};
module.exports = FormInputNoedit;

},{"../../../theme":456,"../../../utils/color":458,"glamor":undefined,"react":undefined}],335:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Input
// ==============================
module.exports = {
  'FormInput': {
    'appearance': 'none',
    'backgroundColor': _theme.default.input.background.default,
    'backgroundImage': 'none',
    'borderColor': _theme.default.input.border.color.default,
    'borderRadius': _theme.default.input.border.radius,
    'borderStyle': 'solid',
    'borderWidth': _theme.default.input.border.width,
    'boxShadow': _theme.default.input.boxShadow,
    'color': 'inherit',
    // FIXME
    'display': 'block',
    'height': _theme.default.input.height,
    'lineHeight': _theme.default.input.lineHeight,
    'padding': `0 ${_theme.default.input.paddingHorizontal}`,
    'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    'width': '100%',
    ':hover': {
      borderColor: _theme.default.input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme.default.input.border.color.focus,
      boxShadow: _theme.default.input.boxShadowFocus,
      outline: 0
    }
  },
  'FormInput--disabled': {
    backgroundColor: _theme.default.input.background.disabled,
    pointerEvents: 'none'
  },
  // sizes
  'FormInput__size--small': {
    fontSize: _theme.default.font.size.small
  },
  'FormInput__size--large': {
    fontSize: _theme.default.font.size.large
  }
};

},{"../../../theme":456}],336:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FormLabel(_ref, _ref2) {
  let {
    cssStyles,
    className,
    component: Component,
    cropText,
    htmlFor,
    ...props
  } = _ref;
  let {
    formFieldId,
    formLayout,
    labelWidth
  } = _ref2;
  props.htmlFor = htmlFor || formFieldId;
  props.className = (0, _glamor.css)(_styles.default.FormLabel, formLayout ? _styles.default['FormLabel--form-layout-' + formLayout] : null, cropText ? _styles.default['FormLabel--crop-text'] : null, cssStyles);

  if (className) {
    props.className += ' ' + className;
  }

  if (labelWidth) {
    props.style = {
      width: labelWidth,
      ...props.style
    };
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
const stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormLabel.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)])
};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string,
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormLabel;

},{"./styles":337,"glamor":undefined,"react":undefined}],337:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Label
// ==============================
module.exports = {
  'FormLabel': {
    color: _theme.default.form.label.color,
    fontSize: _theme.default.form.label.fontSize,
    fontWeight: _theme.default.form.label.fontWeight,
    display: 'inline-block',
    marginBottom: '0.5em'
  },
  // when inside a horizontal form
  'FormLabel--form-layout-horizontal': {
    [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
      display: 'table-cell',
      lineHeight: _theme.default.component.lineHeight,
      // fix
      marginBottom: 0,
      paddingRight: 5,
      verticalAlign: 'top',
      width: _theme.default.form.label.width
    }
  },
  // crop long text
  'FormLabel--crop-text': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

},{"../../../theme":456}],338:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormNote(_ref) {
  let {
    className,
    children,
    component: Component,
    html,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.note, className); // Property Violation

  if (children && html) {
    console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
  }

  return html ? /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })) : /*#__PURE__*/_react.default.createElement(Component, props, children);
}

;
FormNote.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  html: _react.PropTypes.string
};
FormNote.defaultProps = {
  component: 'div'
};
module.exports = FormNote;

},{"./styles":339,"glamor":undefined,"react":undefined}],339:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Note
// ==============================
module.exports = {
  note: {
    color: _theme.default.form.note.color,
    fontSize: _theme.default.form.note.fontSize,
    marginTop: _theme.default.spacing.small
  }
};

},{"../../../theme":456}],340:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FormSelect extends _react.Component {
  render() {
    const {
      children,
      id,
      options,
      ...props
    } = this.props;
    const {
      formFieldId
    } = this.context;
    props.className = (0, _glamor.css)(_styles.default.select, props.disabled ? _styles.default['select--disabled'] : null);
    props.id = id || formFieldId; // Property Violation

    if (options && children) {
      console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(_styles.default.container)
    }, options ? /*#__PURE__*/_react.default.createElement("select", props, options.map(opt => /*#__PURE__*/_react.default.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label))) : /*#__PURE__*/_react.default.createElement("select", props, children), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrows, props.disabled ? _styles.default['arrows--disabled'] : null)
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrow, _styles.default.arrowTop)
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _glamor.css)(_styles.default.arrow, _styles.default.arrowBottom)
    })));
  }

}

;
FormSelect.contextTypes = {
  formFieldId: _react.PropTypes.string
};
FormSelect.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  options: _react.default.PropTypes.arrayOf(_react.default.PropTypes.shape({
    label: _react.default.PropTypes.string,
    value: _react.default.PropTypes.string
  })),
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormSelect;

},{"./styles":341,"glamor":undefined,"react":undefined}],341:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Select
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  container: {
    position: 'relative'
  },
  // select node
  select: {
    appearance: 'none',
    backgroundColor: _theme.default.input.background.default,
    backgroundImage: 'none',
    borderColor: _theme.default.input.border.color.default,
    borderBottomColor: (0, _color.darken)(_theme.default.input.border.color.default, 4),
    borderTopColor: (0, _color.lighten)(_theme.default.input.border.color.default, 4),
    borderRadius: _theme.default.input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme.default.input.border.width,
    boxShadow: _theme.default.select.boxShadow,
    color: 'inherit',
    // FIXME
    display: 'block',
    height: _theme.default.input.height,
    lineHeight: _theme.default.input.lineHeight,
    padding: `0 ${_theme.default.input.paddingHorizontal}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    width: '100%',
    ':hover': {
      borderColor: _theme.default.input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme.default.input.border.color.focus,
      boxShadow: _theme.default.input.boxShadowFocus,
      outline: 0
    }
  },
  'select--disabled': {
    backgroundColor: _theme.default.input.background.disabled,
    pointerEvents: 'none'
  },
  // arrows
  arrows: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: _theme.default.input.height,
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    width: _theme.default.input.height
  },
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    display: 'inline-block',
    height: 0,
    verticalAlign: 'middle',
    width: 0,
    zIndex: 1
  },
  arrowTop: {
    borderBottom: '0.3em solid',
    marginBottom: '0.1em'
  },
  arrowBottom: {
    borderTop: '0.3em solid',
    marginTop: '0.1em'
  }
};

},{"../../../theme":456,"../../../utils/color":458}],342:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Form extends _react.Component {
  getChildContext() {
    return {
      formLayout: this.props.layout,
      labelWidth: this.props.labelWidth
    };
  }

  render() {
    // NOTE `labelWidth` is declared to remove it from `props`, though never used
    const {
      className,
      component: Component,
      labelWidth,
      // eslint-disable-line no-unused-vars
      layout,
      ...props
    } = this.props;
    props.className = (0, _glamor.css)(_styles.default.Form, _styles.default['Form__' + layout], className);
    return /*#__PURE__*/_react.default.createElement(Component, props);
  }

}

;
Form.childContextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Form.propTypes = {
  children: _react.PropTypes.node.isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  layout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
  component: 'form',
  layout: 'basic'
};
module.exports = Form;

},{"./styles":343,"glamor":undefined,"react":undefined}],343:[function(require,module,exports){
"use strict";

// ==============================
// Form
// ==============================
module.exports = {
  Form: {}
};

},{}],344:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint quote-props: ["error", "as-needed"] */
function GlyphButton(_ref) {
  let {
    children,
    glyph,
    glyphColor,
    glyphSize,
    glyphStyle,
    position,
    ...props
  } = _ref;
  const isDefault = position === 'default';
  const isLeft = position === 'left';
  const isRight = position === 'right';
  const offset = {};
  if (isLeft) offset.marginRight = '0.5em';
  if (isRight) offset.marginLeft = '0.5em';
  const glyphStyles = { ...offset,
    ...glyphStyle
  };

  const icon = /*#__PURE__*/_react.default.createElement(_Glyph.default, {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return /*#__PURE__*/_react.default.createElement(_Button.default, props, (isDefault || isLeft) && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphButton.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  glyphStyle: _react.PropTypes.object,
  position: _react.PropTypes.oneOf(['default', 'left', 'right'])
};
GlyphButton.defaultProps = {
  glyphStyle: {},
  position: 'default' // no margin, assumes no children

};
const classes = {
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphButton;

},{"../Button":320,"../Glyph":347,"react":undefined}],345:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function GlyphField(_ref) {
  let {
    children,
    glyph,
    glyphColor,
    glyphSize,
    position,
    ...props
  } = _ref;
  const isLeft = position === 'left';
  const isRight = position === 'right';
  const glyphStyles = {};
  if (isLeft) glyphStyles.marginRight = '0.5em';
  if (isRight) glyphStyles.marginLeft = '0.5em';

  const icon = /*#__PURE__*/_react.default.createElement(_Glyph.default, {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return /*#__PURE__*/_react.default.createElement(_FormField.default, _extends({
    cssStyles: classes.wrapper
  }, props), isLeft && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphField.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(['left', 'right'])
};
GlyphField.defaultProps = {
  position: 'left'
};
const classes = {
  wrapper: {
    alignItems: 'center',
    display: 'flex'
  },
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphField;

},{"../FormField":331,"../Glyph":347,"react":undefined}],346:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.glyph.color.danger,
  inherit: _theme.default.glyph.color.inherit,
  inverted: _theme.default.glyph.color.inverted,
  primary: _theme.default.glyph.color.primary,
  success: _theme.default.glyph.color.success,
  warning: _theme.default.glyph.color.warning
};

},{"../../../theme":456}],347:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _octicons = _interopRequireDefault(require("./octicons"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
function Glyph(_ref) {
  let {
    cssStyles,
    className,
    color,
    component: Component,
    name,
    size,
    style,
    ...props
  } = _ref;
  const colorIsValidType = Object.keys(_colors.default).includes(color);
  props.className = (0, _glamor.css)(_styles.default.glyph, colorIsValidType && _styles.default['color__' + color], _styles.default['size__' + size], cssStyles) + ` ${_octicons.default[name]}`;

  if (className) {
    props.className += ' ' + className;
  } // support random color strings


  props.style = {
    color: !colorIsValidType ? color : null,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
Glyph.propTypes = {
  color: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_colors.default)), _react.PropTypes.string // support random color strings
  ]),
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  }),
  name: _react.PropTypes.oneOf(Object.keys(_octicons.default)).isRequired,
  size: _react.PropTypes.oneOf(Object.keys(_sizes.default))
};
Glyph.defaultProps = {
  component: 'i',
  color: 'inherit',
  size: 'small'
};
module.exports = Glyph;

},{"./colors":346,"./octicons":348,"./sizes":349,"./styles":350,"glamor":undefined,"react":undefined}],348:[function(require,module,exports){
"use strict";

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  alert: 'octicon octicon-alert',
  'arrow-down': 'octicon octicon-arrow-down',
  'arrow-left': 'octicon octicon-arrow-left',
  'arrow-right': 'octicon octicon-arrow-right',
  'arrow-small-down': 'octicon octicon-arrow-small-down',
  'arrow-small-left': 'octicon octicon-arrow-small-left',
  'arrow-small-right': 'octicon octicon-arrow-small-right',
  'arrow-small-up': 'octicon octicon-arrow-small-up',
  'arrow-up': 'octicon octicon-arrow-up',
  microscope: 'octicon octicon-microscope',
  beaker: 'octicon octicon-beaker',
  bell: 'octicon octicon-bell',
  book: 'octicon octicon-book',
  bookmark: 'octicon octicon-bookmark',
  briefcase: 'octicon octicon-briefcase',
  broadcast: 'octicon octicon-broadcast',
  browser: 'octicon octicon-browser',
  bug: 'octicon octicon-bug',
  calendar: 'octicon octicon-calendar',
  check: 'octicon octicon-check',
  checklist: 'octicon octicon-checklist',
  'chevron-down': 'octicon octicon-chevron-down',
  'chevron-left': 'octicon octicon-chevron-left',
  'chevron-right': 'octicon octicon-chevron-right',
  'chevron-up': 'octicon octicon-chevron-up',
  'circle-slash': 'octicon octicon-circle-slash',
  'circuit-board': 'octicon octicon-circuit-board',
  clippy: 'octicon octicon-clippy',
  clock: 'octicon octicon-clock',
  'cloud-download': 'octicon octicon-cloud-download',
  'cloud-upload': 'octicon octicon-cloud-upload',
  code: 'octicon octicon-code',
  'color-mode': 'octicon octicon-color-mode',
  'comment-add': 'octicon octicon-comment-add',
  comment: 'octicon octicon-comment',
  'comment-discussion': 'octicon octicon-comment-discussion',
  'credit-card': 'octicon octicon-credit-card',
  dash: 'octicon octicon-dash',
  dashboard: 'octicon octicon-dashboard',
  database: 'octicon octicon-database',
  clone: 'octicon octicon-clone',
  'desktop-download': 'octicon octicon-desktop-download',
  'device-camera': 'octicon octicon-device-camera',
  'device-camera-video': 'octicon octicon-device-camera-video',
  'device-desktop': 'octicon octicon-device-desktop',
  'device-mobile': 'octicon octicon-device-mobile',
  diff: 'octicon octicon-diff',
  'diff-added': 'octicon octicon-diff-added',
  'diff-ignored': 'octicon octicon-diff-ignored',
  'diff-modified': 'octicon octicon-diff-modified',
  'diff-removed': 'octicon octicon-diff-removed',
  'diff-renamed': 'octicon octicon-diff-renamed',
  ellipsis: 'octicon octicon-ellipsis',
  'eye-unwatch': 'octicon octicon-eye-unwatch',
  'eye-watch': 'octicon octicon-eye-watch',
  eye: 'octicon octicon-eye',
  'file-binary': 'octicon octicon-file-binary',
  'file-code': 'octicon octicon-file-code',
  'file-directory': 'octicon octicon-file-directory',
  'file-media': 'octicon octicon-file-media',
  'file-pdf': 'octicon octicon-file-pdf',
  'file-submodule': 'octicon octicon-file-submodule',
  'file-symlink-directory': 'octicon octicon-file-symlink-directory',
  'file-symlink-file': 'octicon octicon-file-symlink-file',
  'file-text': 'octicon octicon-file-text',
  'file-zip': 'octicon octicon-file-zip',
  flame: 'octicon octicon-flame',
  fold: 'octicon octicon-fold',
  gear: 'octicon octicon-gear',
  gift: 'octicon octicon-gift',
  gist: 'octicon octicon-gist',
  'gist-secret': 'octicon octicon-gist-secret',
  'git-branch-create': 'octicon octicon-git-branch-create',
  'git-branch-delete': 'octicon octicon-git-branch-delete',
  'git-branch': 'octicon octicon-git-branch',
  'git-commit': 'octicon octicon-git-commit',
  'git-compare': 'octicon octicon-git-compare',
  'git-merge': 'octicon octicon-git-merge',
  'git-pull-request-abandoned': 'octicon octicon-git-pull-request-abandoned',
  'git-pull-request': 'octicon octicon-git-pull-request',
  globe: 'octicon octicon-globe',
  graph: 'octicon octicon-graph',
  heart: 'octicon octicon-heart',
  history: 'octicon octicon-history',
  home: 'octicon octicon-home',
  'horizontal-rule': 'octicon octicon-horizontal-rule',
  hubot: 'octicon octicon-hubot',
  inbox: 'octicon octicon-inbox',
  info: 'octicon octicon-info',
  'issue-closed': 'octicon octicon-issue-closed',
  'issue-opened': 'octicon octicon-issue-opened',
  'issue-reopened': 'octicon octicon-issue-reopened',
  jersey: 'octicon octicon-jersey',
  key: 'octicon octicon-key',
  keyboard: 'octicon octicon-keyboard',
  law: 'octicon octicon-law',
  'light-bulb': 'octicon octicon-light-bulb',
  link: 'octicon octicon-link',
  'link-external': 'octicon octicon-link-external',
  'list-ordered': 'octicon octicon-list-ordered',
  'list-unordered': 'octicon octicon-list-unordered',
  location: 'octicon octicon-location',
  'gist-private': 'octicon octicon-gist-private',
  'mirror-private': 'octicon octicon-mirror-private',
  'git-fork-private': 'octicon octicon-git-fork-private',
  lock: 'octicon octicon-lock',
  'logo-github': 'octicon octicon-logo-github',
  mail: 'octicon octicon-mail',
  'mail-read': 'octicon octicon-mail-read',
  'mail-reply': 'octicon octicon-mail-reply',
  'mark-github': 'octicon octicon-mark-github',
  markdown: 'octicon octicon-markdown',
  megaphone: 'octicon octicon-megaphone',
  mention: 'octicon octicon-mention',
  milestone: 'octicon octicon-milestone',
  'mirror-public': 'octicon octicon-mirror-public',
  mirror: 'octicon octicon-mirror',
  'mortar-board': 'octicon octicon-mortar-board',
  mute: 'octicon octicon-mute',
  'no-newline': 'octicon octicon-no-newline',
  octoface: 'octicon octicon-octoface',
  organization: 'octicon octicon-organization',
  package: 'octicon octicon-package',
  paintcan: 'octicon octicon-paintcan',
  pencil: 'octicon octicon-pencil',
  'person-add': 'octicon octicon-person-add',
  'person-follow': 'octicon octicon-person-follow',
  person: 'octicon octicon-person',
  pin: 'octicon octicon-pin',
  plug: 'octicon octicon-plug',
  'repo-create': 'octicon octicon-repo-create',
  'gist-new': 'octicon octicon-gist-new',
  'file-directory-create': 'octicon octicon-file-directory-create',
  'file-add': 'octicon octicon-file-add',
  plus: 'octicon octicon-plus',
  'primitive-dot': 'octicon octicon-primitive-dot',
  'primitive-square': 'octicon octicon-primitive-square',
  pulse: 'octicon octicon-pulse',
  question: 'octicon octicon-question',
  quote: 'octicon octicon-quote',
  'radio-tower': 'octicon octicon-radio-tower',
  'repo-delete': 'octicon octicon-repo-delete',
  repo: 'octicon octicon-repo',
  'repo-clone': 'octicon octicon-repo-clone',
  'repo-force-push': 'octicon octicon-repo-force-push',
  'gist-fork': 'octicon octicon-gist-fork',
  'repo-forked': 'octicon octicon-repo-forked',
  'repo-pull': 'octicon octicon-repo-pull',
  'repo-push': 'octicon octicon-repo-push',
  rocket: 'octicon octicon-rocket',
  rss: 'octicon octicon-rss',
  ruby: 'octicon octicon-ruby',
  'screen-full': 'octicon octicon-screen-full',
  'screen-normal': 'octicon octicon-screen-normal',
  'search-save': 'octicon octicon-search-save',
  search: 'octicon octicon-search',
  server: 'octicon octicon-server',
  settings: 'octicon octicon-settings',
  shield: 'octicon octicon-shield',
  'log-in': 'octicon octicon-log-in',
  'sign-in': 'octicon octicon-sign-in',
  'log-out': 'octicon octicon-log-out',
  'sign-out': 'octicon octicon-sign-out',
  squirrel: 'octicon octicon-squirrel',
  'star-add': 'octicon octicon-star-add',
  'star-delete': 'octicon octicon-star-delete',
  star: 'octicon octicon-star',
  stop: 'octicon octicon-stop',
  'repo-sync': 'octicon octicon-repo-sync',
  sync: 'octicon octicon-sync',
  'tag-remove': 'octicon octicon-tag-remove',
  'tag-add': 'octicon octicon-tag-add',
  tag: 'octicon octicon-tag',
  telescope: 'octicon octicon-telescope',
  terminal: 'octicon octicon-terminal',
  'three-bars': 'octicon octicon-three-bars',
  thumbsdown: 'octicon octicon-thumbsdown',
  thumbsup: 'octicon octicon-thumbsup',
  tools: 'octicon octicon-tools',
  trashcan: 'octicon octicon-trashcan',
  'triangle-down': 'octicon octicon-triangle-down',
  'triangle-left': 'octicon octicon-triangle-left',
  'triangle-right': 'octicon octicon-triangle-right',
  'triangle-up': 'octicon octicon-triangle-up',
  unfold: 'octicon octicon-unfold',
  unmute: 'octicon octicon-unmute',
  versions: 'octicon octicon-versions',
  watch: 'octicon octicon-watch',
  'remove-close': 'octicon octicon-remove-close',
  x: 'octicon octicon-x',
  zap: 'octicon octicon-zap'
};

},{}],349:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  small: _theme.default.glyph.size.small,
  medium: _theme.default.glyph.size.medium,
  large: _theme.default.glyph.size.large
};

},{"../../../theme":456}],350:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Glyph
// ==============================
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  colorVariants[`color__${color}`] = {
    color: _colors.default[color]
  };
}); // Prepare sizes

const sizeVariants = {};
Object.keys(_sizes.default).forEach(size => {
  sizeVariants[`size__${size}`] = {
    fontSize: _sizes.default[size]
  };
});
module.exports = {
  glyph: {},
  // Colors
  ...colorVariants,
  // Sizes
  ...sizeVariants
};

},{"./colors":346,"./sizes":349}],351:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WIDTHS = {
  'one-whole': '100%',
  'one-half': '50%',
  'one-third': '33.33%',
  'two-thirds': '66.66%',
  'one-quarter': '25%',
  'three-quarters': '75%',
  'one-fifth': '20%',
  'two-fifths': '40%',
  'three-fifths': '60%',
  'four-fifths': '80%',
  'one-sixth': '16.66%',
  'five-sixths': '83.33%'
};

const GridCol = (props, context) => {
  const gutter = props.gutter || context.gutter;
  const xsmall = props.xsmall || context.xsmall;
  const small = props.small || context.small;
  const medium = props.medium || context.medium;
  const large = props.large || context.large;
  const className = (0, _glamor.css)(classes['xsmall-' + xsmall], classes['small-' + small], classes['medium-' + medium], classes['large-' + large]);
  const componentClassName = `${className}${props.className ? ' ' + props.className : ''}`;
  const componentStyles = gutter ? {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2
  } : {};
  return /*#__PURE__*/_react.default.createElement("div", {
    className: componentClassName,
    style: componentStyles
  }, props.children);
};

GridCol.contextTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridCol.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
const classes = { ...prepareWidths('xsmall', WIDTHS),
  ...prepareWidths('small', WIDTHS),
  ...prepareWidths('medium', WIDTHS),
  ...prepareWidths('large', WIDTHS)
};
/* eslint-disable guard-for-in */

function prepareWidths(prefix, obj) {
  let classes = {};

  switch (prefix) {
    case 'small':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.tabletPortraitMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    case 'medium':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.tabletLandscapeMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    case 'large':
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          [`@media (min-width: ${_theme.default.breakpoint.desktopMin})`]: {
            width: obj[prop]
          }
        };
      }

      break;

    default:
      for (let prop in obj) {
        classes[prefix + '-' + prop] = {
          width: obj[prop]
        };
      }

  }

  return classes;
}

;
module.exports = GridCol;

},{"../../../theme":456,"glamor":undefined,"react":undefined}],352:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GridRow extends _react.Component {
  getChildContext() {
    return {
      gutter: this.props.gutter,
      xsmall: this.props.xsmall,
      small: this.props.small,
      medium: this.props.medium,
      large: this.props.large
    };
  }

  render() {
    const {
      children,
      className,
      gutter,
      styles = {}
    } = this.props;
    const componentClassName = `${(0, _glamor.css)(classes.grid)}${className ? ' ' + className : ''}`;

    const componentStyles = _extends(styles, {
      marginLeft: gutter / -2,
      marginRight: gutter / -2
    });

    return /*#__PURE__*/_react.default.createElement("div", {
      className: componentClassName,
      style: componentStyles
    }, children);
  }

}

;
GridRow.childContextTypes = {
  gutter: _react.PropTypes.number,
  xsmall: _react.PropTypes.string,
  small: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  large: _react.PropTypes.string
};
GridRow.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridRow.defaultProps = {
  gutter: 0,
  xsmall: 'one-whole'
};
const classes = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};
module.exports = GridRow;

},{"glamor":undefined,"react":undefined}],353:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function () {
    return _GridCol.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function () {
    return _GridRow.default;
  }
});

var _GridCol = _interopRequireDefault(require("../GridCol"));

var _GridRow = _interopRequireDefault(require("../GridRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../GridCol":351,"../GridRow":352}],354:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// NOTE: Inline Group Section accepts a single child
function InlineGroupSection(_ref) {
  let {
    active,
    cssStyles,
    children,
    className,
    contiguous,
    grow,
    position,
    ...props
  } = _ref;
  // evaluate position
  const separate = position === 'last' || position === 'middle'; // A `contiguous` section must manipulate it's child directly
  // A separate (default) section just wraps the child

  return contiguous ? /*#__PURE__*/(0, _react.cloneElement)(children, {
    cssStyles: [_styles.default.contiguous, _styles.default['contiguous__' + position], active ? _styles.default.active : null, grow ? _styles.default.grow : null, cssStyles],
    ...props
  }) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _glamor.css)(!!grow && _styles.default.grow, !!separate && _styles.default.separate, cssStyles)
  }, props), children);
}

;
InlineGroupSection.propTypes = {
  active: _react.PropTypes.bool,
  // buttons only
  children: _react.PropTypes.element.isRequired,
  contiguous: _react.PropTypes.bool,
  grow: _react.PropTypes.bool,
  position: _react.PropTypes.oneOf(['first', 'last', 'middle', 'only'])
};
module.exports = InlineGroupSection;

},{"./styles":355,"glamor":undefined,"react":undefined}],355:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Inline Group: Section
// ==============================
// Takes only FormInput and Button as children, rendering them as a
// tidy inline array
module.exports = {
  // pull active elements up
  active: {
    position: 'relative'
  },
  // stretch to fill available width
  grow: {
    flex: '1 1 0'
  },
  // separate applicable non-contiguous elements
  separate: {
    paddingLeft: '0.75em'
  },
  // Contiguous: manipulate children directly
  // pull focused contiguous elements up
  contiguous: {
    ':focus': {
      position: 'relative',
      zIndex: 1
    }
  },
  // position
  contiguous__middle: {
    borderRadius: 0,
    marginLeft: _theme.default.button.borderWidth * -1
  },
  contiguous__first: {
    borderBottomRightRadius: '0 !important',
    borderTopRightRadius: '0 !important'
  },
  contiguous__last: {
    borderBottomLeftRadius: '0 !important',
    borderTopLeftRadius: '0 !important',
    marginLeft: _theme.default.button.borderWidth * -1
  }
};

},{"../../../theme":456}],356:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// NOTE: only accepts InlineGroupSection as a single child
function InlineGroup(_ref) {
  let {
    cssStyles,
    block,
    children,
    className,
    component: Component,
    contiguous,
    ...props
  } = _ref;
  // prepare group className
  props.className = (0, _glamor.css)(classes.group, !!block && classes.block, cssStyles);

  if (className) {
    props.className += ' ' + className;
  } // convert children to an array and filter out falsey values


  const buttons = _react.Children.toArray(children).filter(i => i); // normalize the count


  const count = buttons.length - 1; // clone children and apply classNames that glamor can target

  props.children = buttons.map((c, idx) => {
    if (!c) return null;
    const isOnlyChild = !count;
    const isFirstChild = !isOnlyChild && idx === 0;
    const isLastChild = !isOnlyChild && idx === count;
    const isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;
    let position;
    if (isOnlyChild) position = 'only';
    if (isFirstChild) position = 'first';
    if (isLastChild) position = 'last';
    if (isMiddleChild) position = 'middle';
    return /*#__PURE__*/(0, _react.cloneElement)(c, {
      contiguous: contiguous,
      position
    });
  });
  return /*#__PURE__*/_react.default.createElement(Component, props);
}

;
InlineGroup.propTypes = {
  block: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  contiguous: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })
};
InlineGroup.defaultProps = {
  component: 'div'
};
const classes = {
  group: {
    display: 'inline-flex'
  },
  block: {
    display: 'flex'
  }
};
module.exports = InlineGroup;

},{"glamor":undefined,"react":undefined}],357:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function LabelledControl(_ref) {
  let {
    className,
    inline,
    label,
    title,
    ...props
  } = _ref;
  const labelClassName = (0, _glamor.css)(_styles.default.wrapper, inline && _styles.default.wrapper__inline, className);
  return /*#__PURE__*/_react.default.createElement("label", {
    title: title,
    className: labelClassName
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    className: (0, _glamor.css)(_styles.default.control)
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(_styles.default.label)
  }, label));
}

;
LabelledControl.propTypes = {
  inline: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired
};
module.exports = LabelledControl;

},{"./styles":358,"glamor":undefined,"react":undefined}],358:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  wrapper: {
    display: 'block',
    height: _theme.default.input.height,
    lineHeight: _theme.default.input.lineHeight
  },
  wrapper__inline: {
    display: 'inline'
  },
  // checkbox or radio
  control: {
    marginRight: '0.5em'
  }
};

},{"../../../theme":456}],359:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LoadingButton(_ref) {
  let {
    children,
    loading,
    ...props
  } = _ref;
  // determine the correct variant for the spinner,
  // fill is the default variant on Button
  const variant = props.variant || 'fill'; // determine the correct color for the spinner,
  // cancel and delete alias to "danger"

  let color;
  if (props.color === 'cancel' || props.color === 'delete') color = 'danger'; // merge all the variant/color together

  const formattedColor = variant === 'fill' && props.color !== 'default' ? 'inverted' : color; // render the spinner if required

  const spinner = loading && /*#__PURE__*/_react.default.createElement(_Spinner.default, {
    size: "small",
    color: formattedColor
  }); // slide the spinner in and out of view


  const spinnerStyles = {
    width: loading ? _theme.default.spinner.size.small * 5 + _theme.default.spacing.small : 0
  }; // render everything

  return /*#__PURE__*/_react.default.createElement(_Button.default, props, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.spinner),
    style: spinnerStyles
  }, spinner), children);
}

;
LoadingButton.propTypes = {
  loading: _react.PropTypes.bool
};
LoadingButton.defaultProps = {
  loading: false
};
const classes = {
  spinner: {
    display: 'inline-block',
    overflow: 'hidden',
    textAlign: 'left',
    transition: 'width 200ms ease-out',
    verticalAlign: 'middle'
  }
};
module.exports = LoadingButton;

},{"../../../theme":456,"../Button":320,"../Spinner":376,"glamor":undefined,"react":undefined}],360:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalBody(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _glamor.css)(classes.body, className)
  }, props));
}

;
const classes = {
  body: {
    paddingBottom: _theme.default.modal.padding.body.vertical,
    paddingLeft: _theme.default.modal.padding.body.horizontal,
    paddingRight: _theme.default.modal.padding.body.horizontal,
    paddingTop: _theme.default.modal.padding.body.vertical
  }
};
module.exports = ModalBody;

},{"../../../theme":456,"glamor":undefined,"react":undefined}],361:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _ScrollLock = _interopRequireDefault(require("../ScrollLock"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

class ModalDialog extends _react.Component {
  constructor() {
    super();
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
  }

  getChildContext() {
    return {
      onClose: this.props.onClose
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!canUseDom) return; // add event listeners

    if (nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.addEventListener('keydown', this.handleKeyboardInput);
    }

    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeyboardInput);
    }
  }

  componentWillUnmount() {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeyboardInput);
    }
  } // ==============================
  // Methods
  // ==============================


  handleKeyboardInput(event) {
    if (event.keyCode === 27) this.props.onClose();
    return false;
  }

  handleBackdropClick(e) {
    if (e.target !== this.refs.container) return;
    this.props.onClose();
  } // ==============================
  // Renderers
  // ==============================


  renderDialog() {
    const {
      backdropClosesModal,
      children,
      isOpen,
      width
    } = this.props;
    if (!isOpen) return /*#__PURE__*/_react.default.createElement("span", {
      key: "closed"
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.container),
      key: "open",
      ref: "container",
      onClick: !!backdropClosesModal && this.handleBackdropClick,
      onTouchEnd: !!backdropClosesModal && this.handleBackdropClick
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.dialog),
      style: {
        width
      },
      "data-screen-id": "modal-dialog"
    }, children), /*#__PURE__*/_react.default.createElement(_ScrollLock.default, null));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_Portal.default, null, this.renderDialog());
  }

}

;
ModalDialog.propTypes = {
  backdropClosesModal: _react.PropTypes.bool,
  enableKeyboardInput: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  width: _react.PropTypes.number
};
ModalDialog.defaultProps = {
  enableKeyboardInput: true,
  width: 768
};
ModalDialog.childContextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
const classes = {
  container: {
    alignItems: 'center',
    backgroundColor: _theme.default.modal.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: _theme.default.modal.zIndex
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: _theme.default.borderRadius.default,
    maxHeight: '90%',
    overflowY: 'auto',
    paddingBottom: _theme.default.modal.padding.dialog.vertical,
    paddingLeft: _theme.default.modal.padding.dialog.horizontal,
    paddingRight: _theme.default.modal.padding.dialog.horizontal,
    paddingTop: _theme.default.modal.padding.dialog.vertical,
    position: 'relative'
  }
};
var _default = ModalDialog;
exports.default = _default;

},{"../../../theme":456,"../Portal":368,"../ScrollLock":371,"glamor":undefined,"react":undefined}],362:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalFooter(_ref) {
  let {
    align,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.footer, classes['align__' + align], className)
  }));
}

;
ModalFooter.propTypes = {
  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalFooter.defaultProps = {
  align: 'left'
};
const classes = {
  footer: {
    borderTop: `2px solid ${_theme.default.color.gray10}`,
    display: 'flex',
    paddingBottom: _theme.default.modal.padding.footer.vertical,
    paddingLeft: _theme.default.modal.padding.footer.horizontal,
    paddingRight: _theme.default.modal.padding.footer.horizontal,
    paddingTop: _theme.default.modal.padding.footer.vertical
  },
  // alignment
  align__left: {
    justifyContent: 'flex-start'
  },
  align__center: {
    justifyContent: 'center'
  },
  align__right: {
    justifyContent: 'flex-end'
  }
};
module.exports = ModalFooter;

},{"../../../theme":456,"glamor":undefined,"react":undefined}],363:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _GlyphButton = _interopRequireDefault(require("../GlyphButton"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalHeader(_ref, _ref2) {
  let {
    children,
    className,
    showCloseButton,
    text,
    ...props
  } = _ref;
  let {
    onClose
  } = _ref2;

  // Property Violation
  if (children && text) {
    console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.header, className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _glamor.css)(classes.grow)
  }, text ? /*#__PURE__*/_react.default.createElement("h4", {
    className: (0, _glamor.css)(classes.text)
  }, text) : children), !!onClose && showCloseButton && /*#__PURE__*/_react.default.createElement(_GlyphButton.default, {
    cssStyles: classes.close,
    color: "cancel",
    glyph: "x",
    onClick: onClose,
    variant: "link"
  }));
}

;
ModalHeader.propTypes = {
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalHeader.contextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
const classes = {
  header: {
    alignItems: 'center',
    borderBottom: `2px solid ${_theme.default.color.gray10}`,
    display: 'flex',
    paddingBottom: _theme.default.modal.padding.header.vertical,
    paddingLeft: _theme.default.modal.padding.header.horizontal,
    paddingRight: _theme.default.modal.padding.header.horizontal,
    paddingTop: _theme.default.modal.padding.header.vertical
  },
  // fill space to push the close button right
  grow: {
    flexGrow: 1
  },
  // title text
  text: {
    color: 'inherit',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1,
    margin: 0
  }
};
module.exports = ModalHeader;

},{"../../../theme":456,"../GlyphButton":344,"glamor":undefined,"react":undefined}],364:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function () {
    return _body.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function () {
    return _dialog.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});

var _body = _interopRequireDefault(require("./body"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _footer = _interopRequireDefault(require("./footer"));

var _header = _interopRequireDefault(require("./header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./body":360,"./dialog":361,"./footer":362,"./header":363}],365:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("./page"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Pagination extends _react.Component {
  renderCount() {
    let count = '';
    const {
      currentPage,
      pageSize,
      plural,
      singular,
      total
    } = this.props;

    if (!total) {
      count = 'No ' + (plural || 'records');
    } else if (total > pageSize) {
      let start = pageSize * (currentPage - 1) + 1;
      let end = Math.min(start + pageSize - 1, total);
      count = `Showing ${start} to ${end} of ${total}`;
    } else {
      count = 'Showing ' + total;

      if (total > 1 && plural) {
        count += ' ' + plural;
      } else if (total === 1 && singular) {
        count += ' ' + singular;
      }
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.count),
      "data-e2e-pagination-count": true
    }, count);
  }

  renderPages() {
    const {
      currentPage,
      limit,
      onPageSelect,
      pageSize,
      total
    } = this.props;
    if (total <= pageSize) return null;
    let pages = [];
    let totalPages = Math.ceil(total / pageSize);
    let minPage = 1;
    let maxPage = totalPages;

    if (limit && limit < totalPages) {
      let rightLimit = Math.floor(limit / 2);
      let leftLimit = rightLimit + limit % 2 - 1;
      minPage = currentPage - leftLimit;
      maxPage = currentPage + rightLimit;

      if (minPage < 1) {
        maxPage = limit;
        minPage = 1;
      }

      if (maxPage > totalPages) {
        minPage = totalPages - limit + 1;
        maxPage = totalPages;
      }
    }

    if (minPage > 1) {
      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: "page_start",
        onClick: () => onPageSelect(1)
      }, "..."));
    }

    for (let page = minPage; page <= maxPage; page++) {
      let selected = page === currentPage;
      /* eslint-disable no-loop-func */

      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: 'page_' + page,
        selected: selected,
        onClick: () => onPageSelect(page)
      }, page));
      /* eslint-enable */
    }

    if (maxPage < totalPages) {
      pages.push( /*#__PURE__*/_react.default.createElement(_page.default, {
        key: "page_end",
        onClick: () => onPageSelect(totalPages)
      }, "..."));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.list)
    }, pages);
  }

  render() {
    const className = (0, _glamor.css)(classes.container, this.props.className);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className,
      style: this.props.style
    }, this.renderCount(), this.renderPages());
  }

}

;
const classes = {
  container: {
    display: 'block',
    lineHeight: _theme.default.component.lineHeight,
    marginBottom: '2em'
  },
  count: {
    display: 'inline-block',
    marginRight: '1em',
    verticalAlign: 'middle'
  },
  list: {
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};
Pagination.propTypes = {
  className: _react.PropTypes.string,
  currentPage: _react.PropTypes.number.isRequired,
  limit: _react.PropTypes.number,
  onPageSelect: _react.PropTypes.func,
  pageSize: _react.PropTypes.number.isRequired,
  plural: _react.PropTypes.string,
  singular: _react.PropTypes.string,
  style: _react.PropTypes.object,
  total: _react.PropTypes.number.isRequired
};
module.exports = Pagination;

},{"../../../theme":456,"./page":366,"glamor":undefined,"react":undefined}],366:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Page(_ref) {
  let {
    disabled,
    selected,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
  return /*#__PURE__*/_react.default.createElement("button", props);
}

;
Page.propTypes = {
  disabled: _react.PropTypes.bool,
  onClick: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.bool
};
/* eslint quote-props: ["error", "as-needed"] */

const selectedStyle = {
  backgroundColor: _theme.default.pagination.selected.background,
  borderColor: _theme.default.pagination.selected.border,
  color: _theme.default.pagination.selected.color,
  cursor: 'default',
  zIndex: 2
};
const pseudoStyle = {
  backgroundColor: _theme.default.pagination.hover.background,
  borderColor: _theme.default.pagination.hover.border,
  color: _theme.default.pagination.hover.color,
  outline: 'none'
};
const classes = {
  page: {
    appearance: 'none',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: _theme.default.borderRadius.default,
    color: _theme.default.pagination.color,
    cursor: 'pointer',
    display: 'inline-block',
    float: 'left',
    // Collapse white-space
    marginRight: '0.25em',
    padding: '0 .7em',
    position: 'relative',
    textDecoration: 'none',
    // handle hover and focus
    ':hover': pseudoStyle,
    ':focus': pseudoStyle
  },
  // selected page
  selected: { ...selectedStyle,
    ':hover': selectedStyle,
    ':focus': selectedStyle
  },
  // disabled page
  disabled: {
    backgroundColor: _theme.default.pagination.disabled.background,
    borderColor: _theme.default.pagination.disabled.background,
    color: _theme.default.pagination.disabled.color,
    cursor: 'default'
  }
};
var _default = Page;
exports.default = _default;

},{"../../../theme":456,"glamor":undefined,"react":undefined}],367:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9
class PassContext extends _react.Component {
  getChildContext() {
    return this.props.context;
  }

  render() {
    return _react.Children.only(this.props.children);
  }

}

;
PassContext.propTypes = {
  context: _react.PropTypes.object.isRequired
};
PassContext.childContextTypes = {
  onClose: _react.PropTypes.func
};
var _default = PassContext;
exports.default = _default;

},{"react":undefined}],368:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _reactDom = require("react-dom");

var _PassContext = _interopRequireDefault(require("../PassContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Portal extends _react.Component {
  constructor() {
    super();
    this.portalElement = null;
  }

  componentDidMount() {
    const p = document.createElement('div');
    document.body.appendChild(p);
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // Animate fade on mount/unmount
    const duration = 200;
    const styles = `
				.fade-enter { opacity: 0.01; }
				.fade-enter.fade-enter-active { opacity: 1; transition: opacity ${duration}ms; }
				.fade-leave { opacity: 1; }
				.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ${duration}ms; }
		`;
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_PassContext.default, {
      context: this.context
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, styles), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, _extends({
      component: "div",
      transitionName: "fade",
      transitionEnterTimeout: duration,
      transitionLeaveTimeout: duration
    }, this.props)))), this.portalElement);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  render() {
    return null;
  }

}

exports.default = Portal;
Portal.contextTypes = {
  onClose: _react.PropTypes.func
};

},{"../PassContext":367,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],369:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.
// Return true if window + document
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

class ResponsiveText extends _react.Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      windowWidth: canUseDOM ? window.innerWidth : 0
    };
  }

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize() {
    this.setState({
      windowWidth: canUseDOM ? window.innerWidth : 0
    });
  }

  render() {
    const {
      component: Component,
      hiddenLG,
      hiddenMD,
      hiddenSM,
      hiddenXS,
      visibleLG,
      visibleMD,
      visibleSM,
      visibleXS,
      ...props
    } = this.props;
    const {
      windowWidth
    } = this.state;
    let text; // set text value from breakpoint; attempt XS --> LG

    if (windowWidth < _theme.default.breakpointNumeric.mobile) {
      text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
    } else if (windowWidth < _theme.default.breakpointNumeric.tabletPortrait) {
      text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
    } else if (windowWidth < _theme.default.breakpointNumeric.tabletLandscape) {
      text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
    } else {
      text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
    }

    return text ? /*#__PURE__*/_react.default.createElement(Component, props, text) : null;
  }

}

;
ResponsiveText.propTypes = {
  hiddenLG: _react.PropTypes.string,
  hiddenMD: _react.PropTypes.string,
  hiddenSM: _react.PropTypes.string,
  hiddenXS: _react.PropTypes.string,
  visibleLG: _react.PropTypes.string,
  visibleMD: _react.PropTypes.string,
  visibleSM: _react.PropTypes.string,
  visibleXS: _react.PropTypes.string
};
ResponsiveText.defaultProps = {
  component: 'span'
};
module.exports = ResponsiveText;

},{"../../../theme":456,"react":undefined}],370:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScreenReaderOnly(_ref) {
  let {
    className,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.srOnly, className);
  return /*#__PURE__*/_react.default.createElement("span", props);
}

;
const classes = {
  srOnly: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  }
};
module.exports = ScreenReaderOnly;

},{"glamor":undefined,"react":undefined}],371:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

class ScrollLock extends _react.Component {
  constructor() {
    super();
    this.lockCount = 0;
  }

  componentWillMount() {
    if (typeof window === 'undefined') return;
    this.lockCount++;
    if (this.lockCount > 1) return; //	FIXME iOS ignores overflow on body

    try {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      const target = document.body;
      target.style.paddingRight = scrollBarWidth + 'px';
      target.style.overflowY = 'hidden';
    } catch (err) {
      console.error('Failed to find body element. Err:', err);
    }
  }

  componentWillUnmount() {
    if (typeof window === 'undefined' || this.lockCount === 0) return;
    this.lockCount--;
    if (this.lockCount > 0) return; // Still locked
    //	FIXME iOS ignores overflow on body

    try {
      const target = document.body;
      target.style.paddingRight = '';
      target.style.overflowY = '';
    } catch (err) {
      console.error('Failed to find body element. Err:', err);
    }
  }

  render() {
    return null;
  }

}

exports.default = ScrollLock;

},{"react":undefined}],372:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  danger: _theme.default.color.danger,
  default: _theme.default.color.gray80,
  error: _theme.default.color.danger,
  info: _theme.default.color.info,
  primary: _theme.default.color.primary,
  success: _theme.default.color.success,
  warning: _theme.default.color.warning
};

},{"../../../theme":456}],373:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SegmentedControl(_ref) {
  let {
    className,
    color,
    cropText,
    equalWidthSegments,
    inline,
    onChange,
    options,
    value,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.control, inline ? _styles.default.control__inline : null, className);
  return /*#__PURE__*/_react.default.createElement("div", props, options.map(opt => {
    const buttonClassName = (0, _glamor.css)(_styles.default.button, opt.disabled ? _styles.default.button__disabled : null, opt.value === value ? _styles.default['button__' + color] : null, cropText ? _styles.default.button__cropText : null, equalWidthSegments ? _styles.default.button__equalWidth : null);
    return /*#__PURE__*/_react.default.createElement("button", {
      className: buttonClassName,
      key: opt.value,
      onClick: !opt.disabled && (() => onChange(opt.value)),
      type: "button",
      title: cropText ? opt.label : null,
      tabIndex: opt.disabled ? '-1' : ''
    }, opt.label);
  }));
}

;
const valuePropShape = [_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string];
SegmentedControl.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors.default)),
  cropText: _react.PropTypes.bool,
  // when `inline && equalWidthSegments` crops to the next largest option length
  equalWidthSegments: _react.PropTypes.bool,
  // only relevant when `inline === false`
  inline: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    disabled: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType(valuePropShape)
  })).isRequired,
  value: _react.PropTypes.oneOfType(valuePropShape)
};
SegmentedControl.defaultProps = {
  color: 'default'
};
module.exports = SegmentedControl;

},{"./colors":372,"./styles":374,"glamor":undefined,"react":undefined}],374:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Segmented Control
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
// Prepare variants
const colorVariants = {};
Object.keys(_colors.default).forEach(color => {
  const pseudoStyles = {
    backgroundColor: _colors.default[color],
    color: 'white'
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors.default[color],
    color: 'white',
    ':hover': pseudoStyles,
    ':focus': pseudoStyles,
    ':active': pseudoStyles
  };
});
module.exports = {
  control: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _theme.default.input.border.color.default,
    borderRadius: '0.4em',
    display: 'flex',
    fontSize: _theme.default.font.size.small,
    paddingLeft: 1,
    paddingRight: 1
  },
  control__inline: {
    display: 'inline-flex'
  },
  // buttons
  button: {
    background: 'none',
    border: 0,
    borderRadius: '0.25em',
    flexGrow: 1,
    margin: '2px 1px',
    padding: '0.3em 0.9em',
    outline: 0,
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':focus': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  button__equalWidth: {
    flex: '1 1 0'
  },
  button__cropText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  button__disabled: {
    opacity: 0.6,
    pointerEvents: 'none'
  },
  // colors
  ...colorVariants
};

},{"../../../theme":456,"./colors":372}],375:[function(require,module,exports){
"use strict";

module.exports = ['danger', 'default', 'inverted', 'primary', 'success', 'warning'];

},{}],376:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _ScreenReaderOnly = _interopRequireDefault(require("../ScreenReaderOnly"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Spinner(_ref) {
  let {
    className,
    size,
    color,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(_styles.default.base, _styles.default[size], className);
  return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__first)}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__second)}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `${(0, _glamor.css)(_styles.default.dot, _styles.default['size__' + size], _styles.default['color__' + color], _styles.default.dot__third)}`
  }), /*#__PURE__*/_react.default.createElement(_ScreenReaderOnly.default, null, "Loading..."));
}

;
Spinner.propTypes = {
  color: _react.PropTypes.oneOf(_colors.default),
  size: _react.PropTypes.oneOf(_sizes.default)
};
Spinner.defaultProps = {
  size: 'medium',
  color: 'default'
};
module.exports = Spinner;

},{"../ScreenReaderOnly":370,"./colors":375,"./sizes":377,"./styles":378,"glamor":undefined,"react":undefined}],377:[function(require,module,exports){
"use strict";

module.exports = ['small', 'medium', 'large'];

},{}],378:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Spinner
// ==============================
// Prepare variants
const colorVariants = {};

_colors.default.forEach(color => {
  colorVariants[`color__${color}`] = {
    backgroundColor: _theme.default.spinner.color[color]
  };
}); // Prepare sizes


const sizeVariants = {};

_sizes.default.forEach(size => {
  sizeVariants[`size__${size}`] = {
    fontSize: _theme.default.spinner.size[size]
  };
}); // Declare animation keyframes


const keyframes = _glamor.compose.keyframes('pulse', {
  '0%, 80%, 100%': {
    opacity: 0
  },
  '40%': {
    opacity: 1
  }
});

module.exports = {
  base: {
    display: 'inline-block',
    lineHeight: 1,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '5em'
  },
  small: {
    fontSize: 4
  },
  medium: {
    fontSize: 8
  },
  large: {
    fontSize: 16
  },
  // text
  text: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  },
  // dots
  dot: {
    animationName: keyframes,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    borderRadius: '1em',
    display: 'inline-block',
    height: '1em',
    verticalAlign: 'top',
    width: '1em'
  },
  dot__second: {
    animationDelay: '160ms',
    marginLeft: '1em'
  },
  dot__third: {
    animationDelay: '320ms',
    marginLeft: '1em'
  },
  // Colors
  ...colorVariants,
  // Sizes
  ...sizeVariants
};

},{"../../../theme":456,"./colors":375,"./sizes":377,"glamor":undefined}],379:[function(require,module,exports){
"use strict";

module.exports = {
  Alert: require('./Alert'),
  BlankState: require('./BlankState'),
  Button: require('./Button'),
  Center: require('./Center'),
  Chip: require('./Chip'),
  Container: require('./Container'),
  DropdownButton: require('./DropdownButton'),
  Form: require('./Form'),
  FormField: require('./FormField'),
  FormInput: require('./FormInput'),
  FormLabel: require('./FormLabel'),
  FormNote: require('./FormNote'),
  FormSelect: require('./FormSelect'),
  Glyph: require('./Glyph'),
  GlyphButton: require('./GlyphButton'),
  GlyphField: require('./GlyphField'),
  Grid: require('./Grid'),
  InlineGroup: require('./InlineGroup'),
  InlineGroupSection: require('./InlineGroupSection'),
  LabelledControl: require('./LabelledControl'),
  LoadingButton: require('./LoadingButton'),
  Modal: require('./Modal'),
  Pagination: require('./Pagination'),
  ResponsiveText: require('./ResponsiveText'),
  ScreenReaderOnly: require('./ScreenReaderOnly'),
  SegmentedControl: require('./SegmentedControl'),
  Spinner: require('./Spinner')
};

},{"./Alert":317,"./BlankState":319,"./Button":320,"./Center":322,"./Chip":325,"./Container":327,"./DropdownButton":330,"./Form":342,"./FormField":331,"./FormInput":333,"./FormLabel":336,"./FormNote":338,"./FormSelect":340,"./Glyph":347,"./GlyphButton":344,"./GlyphField":345,"./Grid":353,"./InlineGroup":356,"./InlineGroupSection":354,"./LabelledControl":357,"./LoadingButton":359,"./Modal":364,"./Pagination":365,"./ResponsiveText":369,"./ScreenReaderOnly":370,"./SegmentedControl":373,"./Spinner":376}],380:[function(require,module,exports){
"use strict";

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _reactRouterRedux = require("react-router-redux");

var _App = _interopRequireDefault(require("./App"));

var _Home = _interopRequireDefault(require("./screens/Home"));

var _Item = _interopRequireDefault(require("./screens/Item"));

var _List = _interopRequireDefault(require("./screens/List"));

var _store = _interopRequireDefault(require("./store"));

var _lists = require("../utils/lists");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the main entry file, which we compile the main JS bundle from. It
 * only contains the client side routing setup.
 */
// Needed for ES6 generators (redux-saga) to work
// Sync the browser history to the Redux store
const history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, _store.default); // Initialise Keystone.User list

Keystone.User = _lists.listsByKey[Keystone.userList];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_reactRouter.Router, {
  history: history
}, /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  path: Keystone.adminPath,
  component: _App.default
}, /*#__PURE__*/_react.default.createElement(_reactRouter.IndexRoute, {
  component: _Home.default
}), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  path: ":listId",
  component: _List.default
}), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  path: ":listId/:itemId",
  component: _Item.default
})))), document.getElementById('react-root'));

},{"../utils/lists":461,"./App":307,"./screens/Home":390,"./screens/Item":408,"./screens/List":435,"./store":454,"@babel/polyfill":1,"react":undefined,"react-dom":undefined,"react-redux":undefined,"react-router":undefined,"react-router-redux":undefined}],381:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterObject = createFilterObject;
exports.filterParser = filterParser;
exports.filtersParser = filtersParser;

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns an array of expanded filter objects,
 * given (a string representation | an array of filters) and a currentList object.
 *
 * @param { String|Array } Either a string representation of an array of filter objects, or an array of filter objects.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Array } of { Objects } as an expanded representation of the filters passed in.
 **/
function filtersParser(filters, currentList) {
  if (typeof filters === 'string') {
    try {
      filters = JSON.parse(filters);
    } catch (e) {
      console.warn('Invalid filters provided', filters);
      filters = void 0;
    }
  }

  if (!filters) return [];
  const assembledFilters = filters.map(filter => {
    const path = filter.path;

    const value = _extends({}, filter);

    delete value.path;
    return createFilterObject(path, value, currentList.fields);
  });
  filters = assembledFilters.filter(filter => filter);
  return filters;
}
/**
 * Returns an array of expanded filter objects,
 * given (a string representation | an array of filters) and a currentList object.
 *
 * @param { Object } Filter object  containing the following key value pairs {path} and {value}.
 * @param { Array } of { Objects } an array of the currently active filters.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Object } an expanded representation of the passed in filter { Object }.
 **/


function filterParser(_ref, activeFilters, currentList) {
  let {
    path,
    value
  } = _ref;

  if (!activeFilters || !(0, _isArray.default)(activeFilters)) {
    throw new Error('activeFilters must be an array');
  }

  if (!currentList) {
    throw new Error('No currentList selected');
  }

  if (!(0, _isObject.default)(currentList) || (0, _isArray.default)(currentList)) {
    throw new Error('currentList is expected to be an { Object }', currentList);
  }

  let filter = activeFilters.filter(i => i.field.path === path)[0];

  if (filter) {
    filter.value = value;
  } else {
    filter = createFilterObject(path, value, currentList.fields);

    if (!filter) {
      return void 0;
    }
  }

  return filter;
}
/*
* This method is a util, but has such a specific use that it is being left within
* the file that uses it.
*/

/**
 * Returns a filter object
 * given a path, a value, and the fields within an instance of the List prototype.
 *
 * @param { String } filter path
 * @param { Object } of filter values.
 * @param { Object } of fields from the current instance of the List prototype.
 * @return { Object } a filter comprised of the:filters.js
 *	- corresponding field value within the current List,
 *	- and the passed in value { Object }.
 **/


function createFilterObject(path, value, currentListFields) {
  if (!currentListFields || !(0, _isPlainObject.default)(currentListFields)) {
    console.warn('currentListFields must be a plain object', currentListFields);
    return;
  }

  const field = currentListFields[path];

  if (!field) {
    console.warn('Invalid Filter path specified:', path);
    return;
  }

  return {
    field,
    value
  };
}

},{"lodash/isArray":543,"lodash/isObject":549,"lodash/isPlainObject":551}],382:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnsParser = columnsParser;
Object.defineProperty(exports, "createFilterObject", {
  enumerable: true,
  get: function () {
    return _filters.createFilterObject;
  }
});
Object.defineProperty(exports, "filterParser", {
  enumerable: true,
  get: function () {
    return _filters.filterParser;
  }
});
Object.defineProperty(exports, "filtersParser", {
  enumerable: true,
  get: function () {
    return _filters.filtersParser;
  }
});
exports.sortParser = sortParser;

var _filters = require("./filters.js");

/**
 * Returns an array of expanded columns object, given a list of columns and currentList object.
 *
 * @param { String } columns, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Array } of { Objects } as an expanded representation of the column values passed in.
 */
function columnsParser(columns, currentList) {
  if (!currentList) {
    throw new Error('No currentList selected');
  }

  if (!columns || columns.length === 0) {
    return currentList.expandColumns(currentList.defaultColumns);
  }

  return currentList.expandColumns(columns);
}

;
/**
 * Returns an expanded sort object, given a sort path and currentList object.
 *
 * @param { String } path, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Object } an expanded representation of the sort path passed in.
 */

function sortParser(path, currentList) {
  if (!currentList) {
    throw new Error('No currentList selected');
  }

  if (!path) return currentList.expandSort(currentList.defaultSort);
  return currentList.expandSort(path);
}

},{"./filters.js":381}],383:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setActiveColumnsSaga = setActiveColumnsSaga;
exports.setActiveFilterSaga = setActiveFilterSaga;
exports.setActiveSortSaga = setActiveSortSaga;

var _reduxSaga = require("redux-saga");

var _effects = require("redux-saga/effects");

var actions = _interopRequireWildcard(require("../screens/List/constants"));

var _queryParamsSagas = require("./queryParamsSagas");

var _parsers = require("../parsers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Debounce the search loading new items by 500ms
 */
function* debouncedSearch() {
  const searchString = yield (0, _effects.select)(state => state.active.search);

  if (searchString) {
    yield (0, _reduxSaga.delay)(500);
  }

  yield (0, _effects.call)(_queryParamsSagas.updateParams);
}

function* setActiveColumnsSaga() {
  while (true) {
    const {
      columns
    } = yield (0, _effects.take)(actions.SELECT_ACTIVE_COLUMNS);
    const {
      currentList
    } = yield (0, _effects.select)(state => state.lists);
    const newColumns = yield (0, _effects.call)(_parsers.columnsParser, columns, currentList);
    yield (0, _effects.put)({
      type: actions.SET_ACTIVE_COLUMNS,
      columns: newColumns
    });
  }
}

function* setActiveSortSaga() {
  while (true) {
    const {
      path
    } = yield (0, _effects.take)(actions.SELECT_ACTIVE_SORT);
    const {
      currentList
    } = yield (0, _effects.select)(state => state.lists);
    const sort = yield (0, _effects.call)(_parsers.sortParser, path, currentList);
    yield (0, _effects.put)({
      type: actions.SET_ACTIVE_SORT,
      sort
    });
  }
}

function* setActiveFilterSaga() {
  while (true) {
    const {
      filter
    } = yield (0, _effects.take)(actions.SELECT_FILTER);
    const {
      currentList
    } = yield (0, _effects.select)(state => state.lists);
    const activeFilters = yield (0, _effects.select)(state => state.active.filters);
    const updatedFilter = yield (0, _effects.call)(_parsers.filterParser, filter, activeFilters, currentList);
    yield (0, _effects.put)({
      type: actions.ADD_FILTER,
      filter: updatedFilter
    });
  }
}

function* rootSaga() {
  yield (0, _effects.fork)(_reduxSaga.takeLatest, actions.SET_ACTIVE_SEARCH, debouncedSearch);
  yield (0, _effects.fork)(_reduxSaga.takeLatest, actions.SET_ACTIVE_LIST, _queryParamsSagas.evalQueryParams); // If one of the other active properties changes, update the query params and load the new items

  yield (0, _effects.fork)(setActiveSortSaga);
  yield (0, _effects.fork)(setActiveColumnsSaga);
  yield (0, _effects.fork)(setActiveFilterSaga);
  yield (0, _effects.fork)(_reduxSaga.takeLatest, [actions.QUERY_HAS_CHANGED, actions.ADD_FILTER, actions.SET_ACTIVE_COLUMNS, actions.SET_ACTIVE_SORT, actions.SET_CURRENT_PAGE, actions.CLEAR_FILTER, actions.CLEAR_ALL_FILTERS], _queryParamsSagas.updateParams);
}

var _default = rootSaga;
exports.default = _default;

},{"../parsers":382,"../screens/List/constants":434,"./queryParamsSagas":384,"redux-saga":undefined,"redux-saga/effects":558}],384:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evalQueryParams = evalQueryParams;
exports.parseQueryParams = parseQueryParams;
exports.updateParams = updateParams;
exports.urlUpdate = urlUpdate;

var _queryParams = require("../../utils/queryParams");

var _reactRouterRedux = require("react-router-redux");

var _effects = require("redux-saga/effects");

var _blacklist = _interopRequireDefault(require("blacklist"));

var actions = _interopRequireWildcard(require("../screens/List/constants"));

var _actions = require("../screens/List/actions");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _parsers = require("../parsers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* urlUpdate(query, cache, pathname) {
  const blacklistedField = 'search';
  const attenuatedQuery = (0, _blacklist.default)(query, blacklistedField);
  const attenuatedCache = (0, _blacklist.default)(cache, blacklistedField);

  if (!(0, _isEqual.default)(attenuatedQuery, attenuatedCache)) {
    yield (0, _effects.put)((0, _reactRouterRedux.push)({
      pathname,
      query
    }));
  } else {
    yield (0, _effects.put)((0, _reactRouterRedux.replace)({
      pathname,
      query
    }));
  }
}
/**
 * Update the query params based on the current state
 */


function* updateParams() {
  // Select all the things
  const activeState = yield (0, _effects.select)(state => state.active);
  const currentList = yield (0, _effects.select)(state => state.lists.currentList);
  const location = yield (0, _effects.select)(state => state.routing.locationBeforeTransitions);
  const {
    index
  } = yield (0, _effects.select)(state => state.lists.page); // Get the data into the right format, set the defaults

  let sort = (0, _queryParams.createSortQueryParams)(activeState.sort.rawInput, currentList.defaultSort);
  let page = (0, _queryParams.createPageQueryParams)(index, 1);
  let columns = (0, _queryParams.stringifyColumns)(activeState.columns, currentList.defaultColumnPaths);
  let search = activeState.search;
  let filters = (0, _queryParams.parametizeFilters)(activeState.filters);
  const newParams = (0, _queryParams.updateQueryParams)({
    page,
    columns,
    sort,
    search,
    filters
  }, location); // TODO: Starting or clearing a search pushes a new history state, but updating
  // the current search replaces it for nicer history navigation support

  yield (0, _effects.put)({
    type: actions.REPLACE_CACHED_QUERY,
    cachedQuery: newParams
  });
  yield* urlUpdate(newParams, activeState.cachedQuery, location.pathname);
  yield (0, _effects.put)((0, _actions.loadItems)());
}

function* evalQueryParams() {
  const {
    pathname,
    query
  } = yield (0, _effects.select)(state => state.routing.locationBeforeTransitions);
  const {
    cachedQuery
  } = yield (0, _effects.select)(state => state.active);
  const {
    currentList
  } = yield (0, _effects.select)(state => state.lists);
  if (pathname !== `${Keystone.adminPath}/${currentList.id}`) return;

  if ((0, _isEqual.default)(query, cachedQuery)) {
    yield (0, _effects.put)({
      type: actions.QUERY_HAS_NOT_CHANGED
    });
    yield (0, _effects.put)((0, _actions.loadItems)());
  } else {
    const parsedQuery = yield (0, _effects.call)(parseQueryParams, query, currentList);
    yield (0, _effects.put)({
      type: actions.QUERY_HAS_CHANGED,
      parsedQuery
    });
  }
}

function parseQueryParams(query, currentList) {
  const columns = (0, _parsers.columnsParser)(query.columns, currentList);
  const sort = (0, _parsers.sortParser)(query.sort, currentList);
  const filters = (0, _parsers.filtersParser)(query.filters, currentList);
  const currentPage = query.page || 1;
  const search = query.search || '';
  return {
    columns,
    sort,
    filters,
    currentPage,
    search
  };
}

},{"../../utils/queryParams":462,"../parsers":382,"../screens/List/actions":412,"../screens/List/constants":434,"blacklist":undefined,"lodash/isEqual":546,"react-router-redux":undefined,"redux-saga/effects":558}],385:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countsLoaded = countsLoaded;
exports.countsLoadingError = countsLoadingError;
exports.loadCounts = loadCounts;

var _xhr = _interopRequireDefault(require("xhr"));

var _constants = require("./constants");

var _constants2 = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load the counts of all lists
 */
function loadCounts() {
  return dispatch => {
    dispatch({
      type: _constants.LOAD_COUNTS
    });
    (0, _xhr.default)({
      url: `${Keystone.adminPath}/api/counts`
    }, (err, resp, body) => {
      if (err) {
        dispatch(countsLoadingError(err));
        return;
      }

      try {
        body = JSON.parse(body);

        if (body.counts) {
          dispatch(countsLoaded(body.counts));
        }
      } catch (e) {
        console.log('Error parsing results json:', e, body);
        dispatch(countsLoadingError(e));
        return;
      }
    });
  };
}
/**
 * Dispatched when the counts were loaded
 *
 * @param  {Object} counts The counts object as returned by the API
 */


function countsLoaded(counts) {
  return {
    type: _constants.COUNTS_LOADING_SUCCESS,
    counts
  };
}
/**
 * Dispatched when unsuccessfully trying to load the counts, will redispatch
 * loadCounts after NETWORK_ERROR_RETRY_DELAY until we get counts back
 *
 * @param  {object} error The error
 */


function countsLoadingError(error) {
  return (dispatch, getState) => {
    dispatch({
      type: _constants.COUNTS_LOADING_ERROR,
      error
    });
    setTimeout(() => {
      dispatch(loadCounts());
    }, _constants2.NETWORK_ERROR_RETRY_DELAY);
  };
}

},{"../../../constants":455,"./constants":389,"xhr":undefined}],386:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Displays information about a list and lets you create a new one.
 */
var ListTile = _react.default.createClass({
  displayName: "ListTile",
  propTypes: {
    count: _react.default.PropTypes.string,
    hideCreateButton: _react.default.PropTypes.bool,
    href: _react.default.PropTypes.string,
    label: _react.default.PropTypes.string,
    path: _react.default.PropTypes.string,
    spinner: _react.default.PropTypes.object
  },

  render() {
    var opts = {
      'data-list-path': this.props.path
    };
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: "dashboard-group__list"
    }, opts), /*#__PURE__*/_react.default.createElement("span", {
      className: "dashboard-group__list-inner"
    }, /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      to: this.props.href,
      className: "dashboard-group__list-tile"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-group__list-label"
    }, this.props.label), /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-group__list-count"
    }, this.props.spinner || this.props.count)), !this.props.hideCreateButton && /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      to: this.props.href + '?create',
      className: "dashboard-group__list-create octicon octicon-plus",
      title: "Create",
      tabIndex: "-1"
    })));
  }

});

module.exports = ListTile;

},{"react":undefined,"react-router":undefined}],387:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Lists = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactRedux = require("react-redux");

var _string = require("../../../../utils/string");

var _ListTile = _interopRequireDefault(require("./ListTile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Lists extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-group__lists"
    }, _lodash.default.map(this.props.lists, (list, key) => {
      // If an object is passed in the key is the index,
      // if an array is passed in the key is at list.key
      const listKey = list.key || key;
      const href = list.external ? list.path : `${Keystone.adminPath}/${list.path}`;
      const listData = this.props.listsData[list.path];
      const isNoCreate = listData ? listData.nocreate : false;
      return /*#__PURE__*/_react.default.createElement(_ListTile.default, {
        key: list.path,
        path: list.path,
        label: list.label,
        hideCreateButton: isNoCreate,
        href: href,
        count: (0, _string.plural)(this.props.counts[listKey], '* Item', '* Items'),
        spinner: this.props.spinner
      });
    }));
  }

}

exports.Lists = Lists;
Lists.propTypes = {
  counts: _react.default.PropTypes.object.isRequired,
  lists: _react.default.PropTypes.oneOfType([_react.default.PropTypes.array, _react.default.PropTypes.object]).isRequired,
  spinner: _react.default.PropTypes.node
};

var _default = (0, _reactRedux.connect)(state => {
  return {
    listsData: state.lists.data
  };
})(Lists);

exports.default = _default;

},{"../../../../utils/string":463,"./ListTile":386,"lodash":undefined,"react":undefined,"react-redux":undefined}],388:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _getRelatedIconClass = _interopRequireDefault(require("../utils/getRelatedIconClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Section extends _react.default.Component {
  render() {
    const iconClass = this.props.icon || (0, _getRelatedIconClass.default)(this.props.id);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-group",
      "data-section-label": this.props.label
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-group__heading"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `dashboard-group__heading-icon ${iconClass}`
    }), this.props.label), this.props.children);
  }

}

Section.propTypes = {
  children: _react.default.PropTypes.element.isRequired,
  icon: _react.default.PropTypes.string,
  id: _react.default.PropTypes.string,
  label: _react.default.PropTypes.string.isRequired
};
var _default = Section;
exports.default = _default;

},{"../utils/getRelatedIconClass":392,"react":undefined}],389:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_COUNTS = exports.COUNTS_LOADING_SUCCESS = exports.COUNTS_LOADING_ERROR = void 0;
const LOAD_COUNTS = 'app/Home/LOAD_COUNTS';
exports.LOAD_COUNTS = LOAD_COUNTS;
const COUNTS_LOADING_SUCCESS = 'app/Home/COUNTS_LOADING_SUCCESS';
exports.COUNTS_LOADING_SUCCESS = COUNTS_LOADING_SUCCESS;
const COUNTS_LOADING_ERROR = 'app/Home/COUNTS_LOADING_ERROR';
exports.COUNTS_LOADING_ERROR = COUNTS_LOADING_ERROR;

},{}],390:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HomeView = void 0;

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../elemental");

var _reactRedux = require("react-redux");

var _Lists = _interopRequireDefault(require("./components/Lists"));

var _Section = _interopRequireDefault(require("./components/Section"));

var _AlertMessages = _interopRequireDefault(require("../../shared/AlertMessages"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Home view is the view one sees at /keystone. It shows a list of all lists,
 * grouped by their section.
 */
var HomeView = _react.default.createClass({
  displayName: 'HomeView',

  getInitialState() {
    return {
      modalIsOpen: true
    };
  },

  // When everything is rendered, start loading the item counts of the lists
  // from the API
  componentDidMount() {
    this.props.dispatch((0, _actions.loadCounts)());
  },

  getSpinner() {
    if (this.props.counts && Object.keys(this.props.counts).length === 0 && (this.props.error || this.props.loading)) {
      return /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null);
    }

    return null;
  },

  render() {
    const spinner = this.getSpinner();
    return /*#__PURE__*/_react.default.createElement(_elemental.Container, {
      "data-screen-id": "home"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-header"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-heading"
    }, Keystone.brand)), /*#__PURE__*/_react.default.createElement("div", {
      className: "dashboard-groups"
    }, this.props.error && /*#__PURE__*/_react.default.createElement(_AlertMessages.default, {
      alerts: {
        error: {
          error: "There is a problem with the network, we're trying to reconnect..."
        }
      }
    }), Keystone.nav.flat ? /*#__PURE__*/_react.default.createElement(_Lists.default, {
      counts: this.props.counts,
      lists: Keystone.lists,
      spinner: spinner
    }) : /*#__PURE__*/_react.default.createElement("div", null, Keystone.nav.sections.map(navSection => {
      return /*#__PURE__*/_react.default.createElement(_Section.default, {
        key: navSection.key,
        id: navSection.key,
        label: navSection.label
      }, /*#__PURE__*/_react.default.createElement(_Lists.default, {
        counts: this.props.counts,
        lists: navSection.lists,
        spinner: spinner
      }));
    }), Keystone.orphanedLists.length ? /*#__PURE__*/_react.default.createElement(_Section.default, {
      label: "Other",
      icon: "octicon-database"
    }, /*#__PURE__*/_react.default.createElement(_Lists.default, {
      counts: this.props.counts,
      lists: Keystone.orphanedLists,
      spinner: spinner
    })) : null)));
  }

});

exports.HomeView = HomeView;

var _default = (0, _reactRedux.connect)(state => ({
  counts: state.home.counts,
  loading: state.home.loading,
  error: state.home.error
}))(HomeView);

exports.default = _default;

},{"../../elemental":379,"../../shared/AlertMessages":438,"./actions":385,"./components/Lists":387,"./components/Section":388,"react":undefined,"react-redux":undefined}],391:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {
  counts: {},
  loading: false,
  error: null
};

function home() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.LOAD_COUNTS:
      return (0, _objectAssign.default)({}, state, {
        loading: true
      });

    case _constants.COUNTS_LOADING_SUCCESS:
      return (0, _objectAssign.default)({}, state, {
        loading: false,
        counts: action.counts,
        error: null
      });

    case _constants.COUNTS_LOADING_ERROR:
      return (0, _objectAssign.default)({}, state, {
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
}

var _default = home;
exports.default = _default;

},{"./constants":389,"object-assign":556}],392:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRelatedIconClass;

/**
 * Gets a related icon for a string, returned as a classname to be applied to a span. If no related
 * icon is found, returns a classname for a dot icon
 *
 * @param  [String] string
 * @return [String]        The classname of the icon
 */
function getRelatedIconClass(string) {
  const icons = [{
    icon: 'book',
    sections: ['books', 'posts', 'blog', 'blog-posts', 'stories', 'news-stories', 'content']
  }, {
    icon: 'briefcase',
    sections: ['businesses', 'companies', 'listings', 'organizations', 'partners']
  }, {
    icon: 'calendar',
    sections: ['events', 'dates']
  }, {
    icon: 'clock',
    sections: ['classes', 'hours', 'times']
  }, {
    icon: 'file-media',
    sections: ['gallery', 'galleries', 'images', 'photos', 'pictures']
  }, {
    icon: 'file-text',
    sections: ['attachments', 'docs', 'documents', 'files']
  }, {
    icon: 'location',
    sections: ['locations', 'markers', 'places']
  }, {
    icon: 'mail',
    sections: ['emails', 'enquiries']
  }, {
    icon: 'megaphone',
    sections: ['broadcasts', 'jobs', 'talks']
  }, {
    icon: 'organization',
    sections: ['contacts', 'customers', 'groups', 'members', 'people', 'speakers', 'teams', 'users']
  }, {
    icon: 'package',
    sections: ['boxes', 'items', 'packages', 'parcels']
  }, {
    icon: 'tag',
    sections: ['tags']
  }];
  const classes = icons.filter(obj => obj.sections.indexOf(string) !== -1).map(obj => `octicon octicon-${obj.icon}`);

  if (!classes.length) {
    classes.push('octicon octicon-primitive-dot');
  }

  return classes.join(' ');
}

},{}],393:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataLoaded = dataLoaded;
exports.dataLoadingError = dataLoadingError;
exports.deleteItem = deleteItem;
exports.loadItemData = loadItemData;
exports.loadRelationshipItemData = loadRelationshipItemData;
exports.moveItem = moveItem;
exports.relationshipDataLoaded = relationshipDataLoaded;
exports.reorderItems = reorderItems;
exports.resetItems = resetItems;
exports.selectItem = selectItem;

var _constants = require("./constants");

var _actions = require("../List/actions");

/**
 * Select an item
 *
 * @param  {String} itemId The item ID
 */
function selectItem(itemId) {
  return {
    type: _constants.SELECT_ITEM,
    id: itemId
  };
}
/**
 * Load the item data of the current item
 */


function loadItemData() {
  return (dispatch, getState) => {
    // Hold on to the id of the item we currently want to load.
    // Dispatch this reference to our redux store to hold on to as a 'loadingRef'.
    const currentItemID = getState().item.id;
    dispatch({
      type: _constants.LOAD_DATA
    });
    const state = getState();
    const list = state.lists.currentList; // const itemID = state.item.id;
    // Load a specific item with the utils/List.js helper

    list.loadItem(state.item.id, {
      drilldown: true
    }, (err, itemData) => {
      // Once this async request has fired this callback, check that
      // the item id referenced by thisLoadRef is the same id
      // referenced by loadingRef in the redux store.
      // If it is, then this is the latest request, and it is safe to resolve it normally.
      // If it is not the same id however,
      // this means that this request is NOT the latest fired request,
      // and so we'll bail out of it early.
      if (getState().item.id !== currentItemID) return;

      if (err || !itemData) {
        dispatch(dataLoadingError(err));
      } else {
        dispatch(dataLoaded(itemData));
      }
    });
  };
}

function loadRelationshipItemData(_ref) {
  let {
    columns,
    refList,
    relationship,
    relatedItemId
  } = _ref;
  return (dispatch, getState) => {
    refList.loadItems({
      columns: columns,
      filters: [{
        field: refList.fields[relationship.refPath],
        value: {
          value: relatedItemId
        }
      }]
    }, (err, items) => {
      // // TODO: indicate pagination & link to main list view
      // this.setState({ items });
      dispatch(relationshipDataLoaded(relationship.path, items));
    });
  };
}
/**
 * Called when data of the current item is loaded
 *
 * @param  {Object} data The item data
 */


function dataLoaded(data) {
  return {
    type: _constants.DATA_LOADING_SUCCESS,
    loadingRef: null,
    data
  };
}

function relationshipDataLoaded(path, data) {
  return {
    type: _constants.LOAD_RELATIONSHIP_DATA,
    relationshipPath: path,
    data
  };
}

;
/**
 * Called when there was an error during the loading of the current item data,
 * will retry loading the data ever NETWORK_ERROR_RETRY_DELAY milliseconds
 *
 * @param  {Object} error The error
 */

function dataLoadingError(err) {
  return {
    type: _constants.DATA_LOADING_ERROR,
    loadingRef: null,
    error: err
  };
}
/**
 * Deletes an item and optionally redirects to the current list URL
 *
 * @param  {String} id     The ID of the item we want to delete
 * @param  {Object} router A react-router router object. If this is passed, we
 *                         redirect to Keystone.adminPath/currentList.path!
 */


function deleteItem(id, router) {
  return (dispatch, getState) => {
    const state = getState();
    const list = state.lists.currentList;
    list.deleteItem(id, err => {
      // If a router is passed, redirect to the current list path,
      // otherwise stay where we are
      if (router) {
        let redirectUrl = `${Keystone.adminPath}/${list.path}`;

        if (state.lists.page.index && state.lists.page.index > 1) {
          redirectUrl = `${redirectUrl}?page=${state.lists.page.index}`;
        }

        router.push(redirectUrl);
      } // TODO Proper error handling


      if (err) {
        alert(err.error || 'Error deleting item, please try again!');
      } else {
        dispatch((0, _actions.loadItems)());
      }
    });
  };
}

function reorderItems(_ref2) {
  let {
    columns,
    refList,
    relationship,
    relatedItemId,
    item,
    prevSortOrder,
    newSortOrder
  } = _ref2;
  return (dispatch, getState) => {
    // Send the item, previous sortOrder and the new sortOrder
    // we should get the proper list and new page results in return
    refList.reorderItems(item, prevSortOrder, newSortOrder, {
      columns: columns,
      filters: [{
        field: refList.fields[relationship.refPath],
        value: {
          value: relatedItemId
        }
      }]
    }, (err, items) => {
      dispatch(relationshipDataLoaded(relationship.path, items)); // If err, flash the row alert
      // if (err) {
      // 	dispatch(resetItems(item.id));
      // 	// return this.resetItems(this.findItemById[item.id]);
      // } else {
      // 	dispatch(itemsLoaded(items));
      // 	dispatch(setRowAlert({
      // 		success: item.id,
      // 		fail: false,
      // 	}));
      // }
    });
  };
}

function moveItem(_ref3) {
  let {
    prevIndex,
    newIndex,
    relationshipPath,
    newSortOrder
  } = _ref3;
  return {
    type: _constants.DRAG_MOVE_ITEM,
    prevIndex,
    newIndex,
    relationshipPath,
    newSortOrder
  };
}

function resetItems() {
  return {
    type: _constants.DRAG_RESET_ITEMS
  };
}

},{"../List/actions":412,"./constants":407}],394:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _vkey = _interopRequireDefault(require("vkey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class AltText extends _react.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      modified: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown, false);
    document.body.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
    document.body.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown(e) {
    if (_vkey.default[e.keyCode] !== this.props.modifier) return;
    this.setState({
      modified: true
    });
  }

  handleKeyUp(e) {
    if (_vkey.default[e.keyCode] !== this.props.modifier) return;
    this.setState({
      modified: false
    });
  }

  render() {
    // NOTE `modifier` is declared to remove it from `props`, though never used
    const {
      component: Component,
      modified,
      modifier,
      // eslint-disable-line no-unused-vars
      normal,
      ...props
    } = this.props;
    props.children = this.state.modified ? modified : normal;
    return /*#__PURE__*/_react.default.createElement(Component, props);
  }

}

;
const SUPPORTED_KEYS = ['<alt>', '<control>', '<meta>', '<shift>'];
AltText.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  modified: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  modifier: _react.PropTypes.oneOf(SUPPORTED_KEYS),
  normal: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
};
AltText.defaultProps = {
  component: 'span',
  modifier: '<alt>'
};
module.exports = AltText;

},{"react":undefined,"vkey":undefined}],395:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _DrilldownItem = _interopRequireDefault(require("./DrilldownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Drilldown(_ref) {
  let {
    className,
    items,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.drilldown, className);
  return /*#__PURE__*/_react.default.createElement("ul", props, items.map((item, idx) => /*#__PURE__*/_react.default.createElement(_DrilldownItem.default, {
    href: item.href,
    key: idx,
    label: item.label,
    separate: idx < items.length - 1
  })));
}

;
Drilldown.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    href: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string.isRequired,
    separate: _react.PropTypes.bool // FIXME verb; could be better

  })).isRequired
};
const classes = {
  drilldown: {
    display: 'inline-block',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};
module.exports = Drilldown;

},{"./DrilldownItem":396,"glamor":undefined,"react":undefined}],396:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _elemental = require("../../../elemental");

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DrilldownItem(_ref) {
  let {
    className,
    href,
    label,
    separate,
    separator,
    style,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.item, className); // remove horizontal padding

  const styles = {
    paddingLeft: 0,
    paddingRight: 0,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("li", props, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    component: _reactRouter.Link,
    style: styles,
    to: href,
    variant: "link"
  }, label), separate && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.separator)
  }, separator));
}

;
DrilldownItem.propTypes = {
  href: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string.isRequired,
  separate: _react.PropTypes.bool,
  // FIXME verb; could be better
  separator: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
};
DrilldownItem.defaultProps = {
  separator: /*#__PURE__*/_react.default.createElement(_elemental.Glyph, {
    name: "chevron-right"
  })
};
const classes = {
  item: {
    display: 'inline-block',
    margin: 0,
    padding: 0,
    verticalAlign: 'middle'
  },
  separator: {
    color: _theme.default.color.gray40,
    marginLeft: '0.5em',
    marginRight: '0.5em'
  }
};
module.exports = DrilldownItem;

},{"../../../../theme":456,"../../../elemental":379,"glamor":undefined,"react":undefined,"react-router":undefined}],397:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _elemental = require("../../../elemental");

var _FieldTypes = require("FieldTypes");

var _color = require("../../../../utils/color");

var _theme = _interopRequireDefault(require("../../../../theme"));

var _AlertMessages = _interopRequireDefault(require("../../../shared/AlertMessages"));

var _ConfirmationDialog = _interopRequireDefault(require("../../../shared/ConfirmationDialog"));

var _FormHeading = _interopRequireDefault(require("./FormHeading"));

var _AltText = _interopRequireDefault(require("./AltText"));

var _FooterBar = _interopRequireDefault(require("./FooterBar"));

var _InvalidFieldType = _interopRequireDefault(require("../../../shared/InvalidFieldType"));

var _actions = require("../actions");

var _string = require("../../../../utils/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNameFromData(data) {
  if (typeof data === 'object') {
    if (typeof data.first === 'string' && typeof data.last === 'string') {
      return data.first + ' ' + data.last;
    } else if (data.id) {
      return data.id;
    }
  }

  return data;
}

function smoothScrollTop() {
  var position = window.scrollY || window.pageYOffset;
  var speed = position / 10;

  if (position > 1) {
    var newPosition = position - speed;
    window.scrollTo(0, newPosition);
    window.requestAnimationFrame(smoothScrollTop);
  } else {
    window.scrollTo(0, 0);
  }
}

var EditForm = _react.default.createClass({
  displayName: 'EditForm',
  propTypes: {
    data: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object
  },

  getInitialState() {
    return {
      values: (0, _objectAssign.default)({}, this.props.data.fields),
      confirmationDialog: null,
      loading: false,
      lastValues: null,
      // used for resetting
      focusFirstField: !this.props.list.nameField && !this.props.list.nameFieldIsFormHeader
    };
  },

  componentDidMount() {
    this.__isMounted = true;
  },

  componentWillUnmount() {
    this.__isMounted = false;
  },

  getFieldProps(field) {
    const props = (0, _objectAssign.default)({}, field);
    const alerts = this.state.alerts; // Display validation errors inline

    if (alerts && alerts.error && alerts.error.error === 'validation errors') {
      if (alerts.error.detail[field.path]) {
        // NOTE: This won't work yet, as ElementalUI doesn't allow
        // passed in isValid, only invalidates via internal state.
        // PR to fix that: https://github.com/elementalui/elemental/pull/149
        props.isValid = false;
      }
    }

    props.value = this.state.values[field.path] === undefined ? field.defaultValue : this.state.values[field.path];
    props.values = this.state.values;
    props.onChange = this.handleChange;
    props.mode = 'edit';
    return props;
  },

  handleChange(event) {
    const values = (0, _objectAssign.default)({}, this.state.values);
    values[event.path] = event.value;
    this.setState({
      values
    });
  },

  toggleDeleteDialog() {
    this.setState({
      deleteDialogIsOpen: !this.state.deleteDialogIsOpen
    });
  },

  toggleResetDialog() {
    this.setState({
      resetDialogIsOpen: !this.state.resetDialogIsOpen
    });
  },

  handleReset() {
    this.setState({
      values: (0, _objectAssign.default)({}, this.state.lastValues || this.props.data.fields),
      resetDialogIsOpen: false
    });
  },

  handleDelete() {
    const {
      data
    } = this.props;
    this.props.dispatch((0, _actions.deleteItem)(data.id, this.props.router));
  },

  handleKeyFocus() {
    const input = this.refs.keyOrIdInput;
    input.select();
  },

  removeConfirmationDialog() {
    this.setState({
      confirmationDialog: null
    });
  },

  updateItem() {
    const {
      data,
      list
    } = this.props;
    const editForm = this.refs.editForm; // Fix for Safari where XHR form submission fails when input[type=file] is empty
    // https://stackoverflow.com/questions/49614091/safari-11-1-ajax-xhr-form-submission-fails-when-inputtype-file-is-empty

    $(editForm).find("input[type='file']").each(function () {
      if ($(this).get(0).files.length === 0) {
        $(this).prop('disabled', true);
      }
    });
    const formData = new FormData(editForm);
    $(editForm).find("input[type='file']").each(function () {
      if ($(this).get(0).files.length === 0) {
        $(this).prop('disabled', false);
      }
    }); // Show loading indicator

    this.setState({
      loading: true
    });
    list.updateItem(data.id, formData, (err, data) => {
      smoothScrollTop();

      if (err) {
        this.setState({
          alerts: {
            error: err
          },
          loading: false
        });
      } else {
        // Success, display success flash messages, replace values
        // TODO: Update key value
        this.setState({
          alerts: {
            success: {
              success: 'Your changes have been saved successfully'
            }
          },
          lastValues: this.state.values,
          values: data.fields,
          loading: false
        });
      }
    });
  },

  renderKeyOrId() {
    var className = 'EditForm__key-or-id';
    var list = this.props.list;

    if (list.nameField && list.autokey && this.props.data[list.autokey.path]) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, /*#__PURE__*/_react.default.createElement(_AltText.default, {
        modified: "ID:",
        normal: `${(0, _string.upcase)(list.autokey.path)}: `,
        title: "Press <alt> to reveal the ID",
        className: "EditForm__key-or-id__label"
      }), /*#__PURE__*/_react.default.createElement(_AltText.default, {
        modified: /*#__PURE__*/_react.default.createElement("input", {
          ref: "keyOrIdInput",
          onFocus: this.handleKeyFocus,
          value: this.props.data.id,
          className: "EditForm__key-or-id__input",
          readOnly: true
        }),
        normal: /*#__PURE__*/_react.default.createElement("input", {
          ref: "keyOrIdInput",
          onFocus: this.handleKeyFocus,
          value: this.props.data[list.autokey.path],
          className: "EditForm__key-or-id__input",
          readOnly: true
        }),
        title: "Press <alt> to reveal the ID",
        className: "EditForm__key-or-id__field"
      }));
    } else if (list.autokey && this.props.data[list.autokey.path]) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "EditForm__key-or-id__label"
      }, list.autokey.path, ": "), /*#__PURE__*/_react.default.createElement("div", {
        className: "EditForm__key-or-id__field"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: "keyOrIdInput",
        onFocus: this.handleKeyFocus,
        value: this.props.data[list.autokey.path],
        className: "EditForm__key-or-id__input",
        readOnly: true
      })));
    } else if (list.nameField) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "EditForm__key-or-id__label"
      }, "ID: "), /*#__PURE__*/_react.default.createElement("div", {
        className: "EditForm__key-or-id__field"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: "keyOrIdInput",
        onFocus: this.handleKeyFocus,
        value: this.props.data.id,
        className: "EditForm__key-or-id__input",
        readOnly: true
      })));
    }
  },

  renderNameField() {
    var nameField = this.props.list.nameField;
    var nameFieldIsFormHeader = this.props.list.nameFieldIsFormHeader;

    var wrapNameField = field => /*#__PURE__*/_react.default.createElement("div", {
      className: "EditForm__name-field"
    }, field);

    if (nameFieldIsFormHeader) {
      var nameFieldProps = this.getFieldProps(nameField);
      nameFieldProps.label = null;
      nameFieldProps.size = 'full';
      nameFieldProps.autoFocus = true;
      nameFieldProps.inputProps = {
        className: 'item-name-field',
        placeholder: nameField.label,
        size: 'large'
      };
      return wrapNameField( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[nameField.type], nameFieldProps));
    } else {
      return wrapNameField( /*#__PURE__*/_react.default.createElement("h2", null, this.props.data.name || '(no name)'));
    }
  },

  renderFormElements() {
    var headings = 0;
    return this.props.list.uiElements.map((el, index) => {
      // Don't render the name field if it is the header since it'll be rendered in BIG above
      // the list. (see renderNameField method, this is the reverse check of the one it does)
      if (this.props.list.nameField && el.field === this.props.list.nameField.path && this.props.list.nameFieldIsFormHeader) return;

      if (el.type === 'heading') {
        headings++;
        el.options.values = this.state.values;
        el.key = 'h-' + headings;
        return /*#__PURE__*/_react.default.createElement(_FormHeading.default, el);
      }

      if (el.type === 'field') {
        var field = this.props.list.fields[el.field];
        var props = this.getFieldProps(field);

        if (typeof _FieldTypes.Fields[field.type] !== 'function') {
          return /*#__PURE__*/_react.default.createElement(_InvalidFieldType.default, {
            type: field.type,
            path: field.path,
            key: field.path
          });
        }

        props.key = field.path;

        if (index === 0 && this.state.focusFirstField) {
          props.autoFocus = true;
        }

        return /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[field.type], props);
      }
    }, this);
  },

  renderFooterBar() {
    if (this.props.list.noedit && this.props.list.nodelete) {
      return null;
    }

    const {
      loading
    } = this.state;
    const loadingButtonText = loading ? 'Saving' : 'Save'; // Padding must be applied inline so the FooterBar can determine its
    // innerHeight at runtime. Aphrodite's styling comes later...

    return /*#__PURE__*/_react.default.createElement(_FooterBar.default, {
      style: styles.footerbar
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.footerbarInner
    }, !this.props.list.noedit && /*#__PURE__*/_react.default.createElement(_elemental.LoadingButton, {
      color: "primary",
      disabled: loading,
      loading: loading,
      onClick: this.updateItem,
      "data-button": "update"
    }, loadingButtonText), !this.props.list.noedit && /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      disabled: loading,
      onClick: this.toggleResetDialog,
      variant: "link",
      color: "cancel",
      "data-button": "reset"
    }, /*#__PURE__*/_react.default.createElement(_elemental.ResponsiveText, {
      hiddenXS: "reset changes",
      visibleXS: "reset"
    })), !this.props.list.nodelete && /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      disabled: loading,
      onClick: this.toggleDeleteDialog,
      variant: "link",
      color: "delete",
      style: styles.deleteButton,
      "data-button": "delete"
    }, /*#__PURE__*/_react.default.createElement(_elemental.ResponsiveText, {
      hiddenXS: `delete ${this.props.list.singular.toLowerCase()}`,
      visibleXS: "delete"
    }))));
  },

  renderTrackingMeta() {
    // TODO: These fields are visible now, so we don't want this. We may revisit
    // it when we have more granular control over hiding fields in certain
    // contexts, so I'm leaving this code here as a reference for now - JW
    if (true) return null; // if (true) prevents unreachable code linter errpr

    if (!this.props.list.tracking) return null;
    var elements = [];
    var data = {};

    if (this.props.list.tracking.createdAt) {
      data.createdAt = this.props.data.fields[this.props.list.tracking.createdAt];

      if (data.createdAt) {
        elements.push( /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
          key: "createdAt",
          label: "Created on"
        }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
          noedit: true,
          title: (0, _moment.default)(data.createdAt).format('DD/MM/YYYY h:mm:ssa')
        }, (0, _moment.default)(data.createdAt).format('Do MMM YYYY'))));
      }
    }

    if (this.props.list.tracking.createdBy) {
      data.createdBy = this.props.data.fields[this.props.list.tracking.createdBy];

      if (data.createdBy && data.createdBy.name) {
        let createdByName = getNameFromData(data.createdBy.name);

        if (createdByName) {
          elements.push( /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
            key: "createdBy",
            label: "Created by"
          }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
            noedit: true
          }, data.createdBy.name.first, " ", data.createdBy.name.last)));
        }
      }
    }

    if (this.props.list.tracking.updatedAt) {
      data.updatedAt = this.props.data.fields[this.props.list.tracking.updatedAt];

      if (data.updatedAt && (!data.createdAt || data.createdAt !== data.updatedAt)) {
        elements.push( /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
          key: "updatedAt",
          label: "Updated on"
        }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
          noedit: true,
          title: (0, _moment.default)(data.updatedAt).format('DD/MM/YYYY h:mm:ssa')
        }, (0, _moment.default)(data.updatedAt).format('Do MMM YYYY'))));
      }
    }

    if (this.props.list.tracking.updatedBy) {
      data.updatedBy = this.props.data.fields[this.props.list.tracking.updatedBy];

      if (data.updatedBy && data.updatedBy.name) {
        let updatedByName = getNameFromData(data.updatedBy.name);

        if (updatedByName) {
          elements.push( /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
            key: "updatedBy",
            label: "Updated by"
          }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
            noedit: true
          }, data.updatedBy.name.first, " ", data.updatedBy.name.last)));
        }
      }
    }

    return Object.keys(elements).length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "EditForm__meta"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: "form-heading"
    }, "Meta"), elements) : null;
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("form", {
      ref: "editForm",
      className: "EditForm-container"
    }, this.state.alerts ? /*#__PURE__*/_react.default.createElement(_AlertMessages.default, {
      alerts: this.state.alerts
    }) : null, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Row, null, /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, {
      large: "three-quarters"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Form, {
      layout: "horizontal",
      component: "div"
    }, this.renderNameField(), this.renderKeyOrId(), this.renderFormElements(), this.renderTrackingMeta())), /*#__PURE__*/_react.default.createElement(_elemental.Grid.Col, {
      large: "one-quarter"
    }, /*#__PURE__*/_react.default.createElement("span", null))), this.renderFooterBar(), /*#__PURE__*/_react.default.createElement(_ConfirmationDialog.default, {
      confirmationLabel: "Reset",
      isOpen: this.state.resetDialogIsOpen,
      onCancel: this.toggleResetDialog,
      onConfirmation: this.handleReset
    }, /*#__PURE__*/_react.default.createElement("p", null, "Reset your changes to ", /*#__PURE__*/_react.default.createElement("strong", null, this.props.data.name), "?")), /*#__PURE__*/_react.default.createElement(_ConfirmationDialog.default, {
      confirmationLabel: "Delete",
      isOpen: this.state.deleteDialogIsOpen,
      onCancel: this.toggleDeleteDialog,
      onConfirmation: this.handleDelete
    }, "Are you sure you want to delete ", /*#__PURE__*/_react.default.createElement("strong", null, this.props.data.name, "?"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "This cannot be undone."));
  }

});

const styles = {
  footerbar: {
    backgroundColor: (0, _color.fade)(_theme.default.color.body, 93),
    boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.1)',
    paddingBottom: 20,
    paddingTop: 20,
    zIndex: 99
  },
  footerbarInner: {
    height: _theme.default.component.height // FIXME aphrodite bug

  },
  deleteButton: {
    float: 'right'
  }
};
module.exports = EditForm;

},{"../../../../theme":456,"../../../../utils/color":458,"../../../../utils/string":463,"../../../elemental":379,"../../../shared/AlertMessages":438,"../../../shared/ConfirmationDialog":439,"../../../shared/InvalidFieldType":443,"../actions":393,"./AltText":394,"./FooterBar":400,"./FormHeading":401,"FieldTypes":undefined,"moment":undefined,"object-assign":556,"react":undefined}],398:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditFormHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _ToolbarSection = _interopRequireDefault(require("./Toolbar/ToolbarSection"));

var _EditFormHeaderSearch = _interopRequireDefault(require("./EditFormHeaderSearch"));

var _reactRouter = require("react-router");

var _Drilldown = _interopRequireDefault(require("./Drilldown"));

var _elemental = require("../../../elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const EditFormHeader = _react.default.createClass({
  displayName: 'EditFormHeader',
  propTypes: {
    data: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object,
    toggleCreate: _react.default.PropTypes.func
  },

  getInitialState() {
    return {
      searchString: ''
    };
  },

  toggleCreate(visible) {
    this.props.toggleCreate(visible);
  },

  searchStringChanged(event) {
    this.setState({
      searchString: event.target.value
    });
  },

  handleEscapeKey(event) {
    const escapeKeyCode = 27;

    if (event.which === escapeKeyCode) {
      (0, _reactDom.findDOMNode)(this.refs.searchField).blur();
    }
  },

  renderDrilldown() {
    return /*#__PURE__*/_react.default.createElement(_ToolbarSection.default, {
      left: true
    }, this.renderDrilldownItems(), this.renderSearch());
  },

  renderDrilldownItems() {
    const {
      data,
      list
    } = this.props;
    const items = data.drilldown ? data.drilldown.items : [];
    let backPath = `${Keystone.adminPath}/${list.path}`;
    const backStyles = {
      paddingLeft: 0,
      paddingRight: 0
    }; // Link to the list page the user came from

    if (this.props.listActivePage && this.props.listActivePage > 1) {
      backPath = `${backPath}?page=${this.props.listActivePage}`;
    } // return a single back button when no drilldown exists


    if (!items.length) {
      return /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, {
        component: _reactRouter.Link,
        "data-e2e-editform-header-back": true,
        glyph: "chevron-left",
        position: "left",
        style: backStyles,
        to: backPath,
        variant: "link"
      }, list.plural);
    } // prepare the drilldown elements


    const drilldown = [];
    items.forEach((item, idx) => {
      // FIXME @jedwatson
      // we used to support relationships of type MANY where items were
      // represented as siblings inside a single list item; this got a
      // bit messy...
      item.items.forEach(link => {
        drilldown.push({
          href: link.href,
          label: link.label,
          title: item.list.singular
        });
      });
    }); // add the current list to the drilldown

    drilldown.push({
      href: backPath,
      label: list.plural
    });
    return /*#__PURE__*/_react.default.createElement(_Drilldown.default, {
      items: drilldown
    });
  },

  renderSearch() {
    var list = this.props.list;
    return /*#__PURE__*/_react.default.createElement("form", {
      action: `${Keystone.adminPath}/${list.path}`,
      className: "EditForm__header__search"
    }, /*#__PURE__*/_react.default.createElement(_EditFormHeaderSearch.default, {
      value: this.state.searchString,
      onChange: this.searchStringChanged,
      onKeyUp: this.handleEscapeKey
    }));
  },

  renderInfo() {
    return /*#__PURE__*/_react.default.createElement(_ToolbarSection.default, {
      right: true
    }, this.renderCreateButton());
  },

  renderCreateButton() {
    const {
      nocreate,
      autocreate,
      singular
    } = this.props.list;
    if (nocreate) return null;
    let props = {};

    if (autocreate) {
      props.href = '?new' + Keystone.csrf.query;
    } else {
      props.onClick = () => {
        this.toggleCreate(true);
      };
    }

    return /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, _extends({
      "data-e2e-item-create-button": "true",
      color: "success",
      glyph: "plus",
      position: "left"
    }, props), /*#__PURE__*/_react.default.createElement(_elemental.ResponsiveText, {
      hiddenXS: `New ${singular}`,
      visibleXS: "Create"
    }));
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, this.renderDrilldown(), this.renderInfo());
  }

});

exports.EditFormHeader = EditFormHeader;

var _default = (0, _reactRedux.connect)(state => ({
  listActivePage: state.lists.page.index
}))(EditFormHeader);

exports.default = _default;

},{"../../../elemental":379,"./Drilldown":395,"./EditFormHeaderSearch":399,"./Toolbar":406,"./Toolbar/ToolbarSection":405,"react":undefined,"react-dom":undefined,"react-redux":undefined,"react-router":undefined}],399:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _glamor = require("glamor");

var _elemental = require("../../../elemental");

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class EditFormHeaderSearch extends _react.Component {
  constructor() {
    super();
    this.focusField = this.focusField.bind(this);
    this.state = {
      focused: false
    };
  }

  focusField() {
    this.setState({
      focused: true
    }, () => {
      (0, _reactDom.findDOMNode)(this.refs.target).focus();
    });
  }

  render() {
    const {
      focused
    } = this.state;
    const {
      onChange,
      onKeyUp,
      value,
      ...props
    } = this.props;
    return focused ? /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _glamor.css)(classes.wrapper)
    }, /*#__PURE__*/_react.default.createElement(_elemental.Glyph, {
      cssStyles: classes.glyph,
      color: _theme.default.color.gray40,
      name: "search",
      "data-e2e-search-icon": true
    }), /*#__PURE__*/_react.default.createElement(_elemental.FormInput, _extends({
      cssStyles: classes.input,
      name: "search",
      onBlur: () => this.setState({
        focused: false
      }),
      onChange: onChange,
      onKeyUp: onKeyUp,
      placeholder: "Search",
      ref: "target",
      type: "search",
      value: value
    }, props))) : /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, {
      color: "primary",
      glyph: "search",
      glyphStyle: {
        marginRight: '0.4em'
      },
      onClick: this.focusField,
      onFocus: this.focusField,
      position: "left",
      variant: "link",
      style: {
        paddingLeft: '0.7em'
      },
      "data-e2e-search-icon": true
    }, "Search");
  }

}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

EditFormHeaderSearch.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.string
};
const classes = {
  wrapper: {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'middle'
  },
  // input
  input: {
    paddingLeft: '2.2em',
    // opacity: 0,
    transition: 'all 240ms',
    width: 100,
    ':focus': {
      // opacity: 1,
      width: 240
    }
  },
  // glyph
  glyph: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '2.2em'
  }
};
module.exports = EditFormHeaderSearch; // Search
// ------------------------------
// .EditForm__header__search {
// 	display: inline-block;
// 	margin-left: 1em;
// }
// .EditForm__header__search-field {
// 	margin-bottom: 0;
//
// 	.IconField__icon {
// 		color: @app-primary;
// 	}
// }
//
// // make the input appear as a button link until focused
// .EditForm__header__search-input {
// 	// override elemental's transition to catch the width or it looks weird
// 	.transition( all 0.15s ease-in-out );
// 	.placeholder(@link-color);
// 	background: transparent;
// 	border-color: transparent;
// 	box-shadow: none;
// 	display: inline-block;
//
// 	// set the width to only be as long as if it were a button initially
// 	// this is updated on focus to a more comfortable typing length
// 	width: 100px;
//
// 	// decorate the input as a link
// 	&:hover {
// 		.placeholder(@link-hover-color);
// 		border-color: transparent;
// 		cursor: pointer;
//
// 		// handle placeholder text
// 		&::-moz-placeholder { text-decoration: underline; }
// 		&:-ms-input-placeholder { text-decoration: underline; }
// 		&::-webkit-input-placeholder  { text-decoration: underline; }
//
// 		+ .IconField__icon {
// 			color: @link-hover-color;
// 		}
// 	}
//
// 	// return the input to it's natural appearance on focus
// 	&:focus {
// 		.placeholder(@input-placeholder-color);
// 		background: white;
// 		border-color: @input-border-color-focus;
// 		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px fade(@input-border-color-focus, 10%);
// 		cursor: auto;
// 		outline: 0;
// 		width: 240px;
//
// 		// handle placeholder text
// 		&::-moz-placeholder { text-decoration: none; }
// 		&:-ms-input-placeholder { text-decoration: none; }
// 		&::-webkit-input-placeholder  { text-decoration: none; }
//
// 		+ .IconField__icon {
// 			color: @input-placeholder-color;
// 		}
// 	}
// }
// // hide the search field on small devices
// @media (max-width: 480px) {
// 	.EditForm__header__search {
// 		display: none;
// 	}
// }

},{"../../../../theme":456,"../../../elemental":379,"glamor":undefined,"react":undefined,"react-dom":undefined}],400:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FooterBar = _react.default.createClass({
  displayName: "FooterBar",
  propTypes: {
    style: _react.default.PropTypes.object
  },

  getDefaultProps() {
    return {
      style: {}
    };
  },

  getInitialState() {
    return {
      position: 'relative',
      width: 'auto',
      height: 'auto',
      top: 0
    };
  },

  componentDidMount() {
    // Bail in IE8 because React doesn't support the onScroll event in that browser
    // Conveniently (!) IE8 doesn't have window.getComputedStyle which we also use here
    if (!window.getComputedStyle) return;
    var footer = this.refs.footer;
    this.windowSize = this.getWindowSize();
    var footerStyle = window.getComputedStyle(footer);
    this.footerSize = {
      x: footer.offsetWidth,
      y: footer.offsetHeight + parseInt(footerStyle.marginTop || '0')
    };
    window.addEventListener('scroll', this.recalcPosition, false);
    window.addEventListener('resize', this.recalcPosition, false);
    this.recalcPosition();
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.recalcPosition, false);
    window.removeEventListener('resize', this.recalcPosition, false);
  },

  getWindowSize() {
    return {
      x: window.innerWidth,
      y: window.innerHeight
    };
  },

  recalcPosition() {
    var wrapper = this.refs.wrapper;
    this.footerSize.x = wrapper.offsetWidth;
    var offsetTop = 0;
    var offsetEl = wrapper;

    while (offsetEl) {
      offsetTop += offsetEl.offsetTop;
      offsetEl = offsetEl.offsetParent;
    }

    var maxY = offsetTop + this.footerSize.y;
    var viewY = window.scrollY + window.innerHeight;
    var newSize = this.getWindowSize();
    var sizeChanged = newSize.x !== this.windowSize.x || newSize.y !== this.windowSize.y;
    this.windowSize = newSize;
    var newState = {
      width: this.footerSize.x,
      height: this.footerSize.y
    };

    if (viewY > maxY && (sizeChanged || this.mode !== 'inline')) {
      this.mode = 'inline';
      newState.top = 0;
      newState.position = 'absolute';
      this.setState(newState);
    } else if (viewY <= maxY && (sizeChanged || this.mode !== 'fixed')) {
      this.mode = 'fixed';
      newState.top = window.innerHeight - this.footerSize.y;
      newState.position = 'fixed';
      this.setState(newState);
    }
  },

  render() {
    var wrapperStyle = {
      height: this.state.height,
      marginTop: 60,
      position: 'relative'
    };
    var footerProps = (0, _blacklist.default)(this.props, 'children', 'style');
    var footerStyle = (0, _objectAssign.default)({}, this.props.style, {
      position: this.state.position,
      top: this.state.top,
      width: this.state.width,
      height: this.state.height
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: "wrapper",
      style: wrapperStyle
    }, /*#__PURE__*/_react.default.createElement("div", _extends({
      ref: "footer",
      style: footerStyle
    }, footerProps), this.props.children));
  }

});

module.exports = FooterBar;

},{"blacklist":undefined,"object-assign":556,"react":undefined}],401:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _evalDependsOn = _interopRequireDefault(require("../../../../../../fields/utils/evalDependsOn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react.default.createClass({
  displayName: 'FormHeading',
  propTypes: {
    options: _react.default.PropTypes.object
  },

  render() {
    if (!(0, _evalDependsOn.default)(this.props.options.dependsOn, this.props.options.values)) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("h3", {
      className: "form-heading"
    }, this.props.content);
  }

});

},{"../../../../../../fields/utils/evalDependsOn":464,"react":undefined}],402:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _elemental = require("../../../../elemental");

var _RelatedItemsListDragDrop = _interopRequireDefault(require("./RelatedItemsListDragDrop"));

var _RelatedItemsListRow = _interopRequireDefault(require("./RelatedItemsListRow"));

var _actions = require("../../actions");

var _constants = require("../../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RelatedItemsList = _react.default.createClass({
  displayName: "RelatedItemsList",
  propTypes: {
    dispatch: _react.default.PropTypes.func.isRequired,
    dragNewSortOrder: _react.default.PropTypes.number,
    items: _react.default.PropTypes.array,
    list: _react.default.PropTypes.object.isRequired,
    refList: _react.default.PropTypes.object.isRequired,
    relatedItemId: _react.default.PropTypes.string.isRequired,
    relationship: _react.default.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      columns: this.getColumns(),
      err: null,
      items: null
    };
  },

  componentDidMount() {
    this.__isMounted = true;
    this.loadItems();
  },

  componentWillUnmount() {
    this.__isMounted = false;
  },

  isSortable() {
    // Check if the related items should be sortable. The referenced list has to
    //   be sortable and it has to set the current list as it's sortContext.
    const {
      refList,
      list,
      relationship
    } = this.props;
    const sortContext = refList.sortContext;

    if (refList.sortable && sortContext) {
      const parts = sortContext.split(':');

      if (parts[0] === list.key && parts[1] === relationship.path) {
        return true;
      }
    }

    return false;
  },

  getColumns() {
    const {
      relationship,
      refList
    } = this.props;
    const columns = refList.expandColumns(refList.defaultColumns);
    return columns.filter(i => i.path !== relationship.refPath);
  },

  loadItems() {
    const {
      refList,
      relatedItemId,
      relationship
    } = this.props;
    const {
      columns
    } = this.state; // TODO: Move error to redux store

    if (!refList.fields[relationship.refPath]) {
      const err = /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
        color: "danger"
      }, /*#__PURE__*/_react.default.createElement("strong", null, "Error:"), " Related List ", /*#__PURE__*/_react.default.createElement("strong", null, refList.label), " has no field ", /*#__PURE__*/_react.default.createElement("strong", null, relationship.refPath));

      return this.setState({
        err
      });
    }

    this.props.dispatch((0, _actions.loadRelationshipItemData)({
      columns,
      refList,
      relatedItemId,
      relationship
    }));
  },

  renderItems() {
    const tableBody = this.isSortable() ? /*#__PURE__*/_react.default.createElement(_RelatedItemsListDragDrop.default, _extends({
      columns: this.state.columns,
      items: this.props.items
    }, this.props)) : /*#__PURE__*/_react.default.createElement("tbody", null, this.props.items.results.map(item => {
      return /*#__PURE__*/_react.default.createElement(_RelatedItemsListRow.default, {
        key: item.id,
        columns: this.state.columns,
        item: item,
        refList: this.props.refList
      });
    }));
    return this.props.items.results.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "ItemList-wrapper"
    }, /*#__PURE__*/_react.default.createElement("table", {
      cellPadding: "0",
      cellSpacing: "0",
      className: "Table ItemList"
    }, this.renderTableCols(), this.renderTableHeaders(), tableBody)) : /*#__PURE__*/_react.default.createElement(_elemental.BlankState, {
      heading: `No related ${this.props.refList.plural.toLowerCase()}...`,
      style: {
        marginBottom: '3em'
      }
    });
  },

  renderTableCols() {
    const cols = this.state.columns.map(col => /*#__PURE__*/_react.default.createElement("col", {
      width: col.width,
      key: col.path
    }));
    return /*#__PURE__*/_react.default.createElement("colgroup", null, cols);
  },

  renderTableHeaders() {
    const cells = this.state.columns.map(col => {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: col.path
      }, col.label);
    }); // add sort col when available

    if (this.isSortable()) {
      cells.unshift( /*#__PURE__*/_react.default.createElement("th", {
        width: _constants.TABLE_CONTROL_COLUMN_WIDTH,
        key: "sortable"
      }));
    }

    return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, cells));
  },

  render() {
    if (this.state.err) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "Relationship"
      }, this.state.err);
    }

    const listHref = `${Keystone.adminPath}/${this.props.refList.path}`;

    const loadingElement = /*#__PURE__*/_react.default.createElement(_elemental.Center, {
      height: 100
    }, /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null));

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Relationship"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: "Relationship__link"
    }, /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
      to: listHref
    }, this.props.refList.label)), this.props.items ? this.renderItems() : loadingElement);
  }

});

module.exports = RelatedItemsList;

},{"../../../../../constants":455,"../../../../elemental":379,"../../actions":393,"./RelatedItemsListDragDrop":403,"./RelatedItemsListRow":404,"react":undefined,"react-router":undefined}],403:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _RelatedItemsListRow = require("./RelatedItemsListRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class RelatedItemsListDragDrop extends _react.Component {
  render() {
    const {
      items
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("tbody", null, items.results.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_RelatedItemsListRow.Sortable, _extends({
        key: item.id,
        index: i,
        item: item
      }, this.props));
    }));
  }

}

;
RelatedItemsListDragDrop.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  dispatch: _react.default.PropTypes.func.isRequired,
  dragNewSortOrder: _react.default.PropTypes.number,
  items: _react.PropTypes.array.isRequired,
  list: _react.PropTypes.object.isRequired,
  refList: _react.PropTypes.object.isRequired,
  relatedItemId: _react.PropTypes.string.isRequired,
  relationship: _react.PropTypes.object.isRequired
};
module.exports = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default)(RelatedItemsListDragDrop);

},{"./RelatedItemsListRow":404,"react":undefined,"react-dnd":undefined,"react-dnd-html5-backend":undefined}],404:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _FieldTypes = require("FieldTypes");

var _actions = require("../../actions");

var _ListControl = _interopRequireDefault(require("../../../List/components/ListControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class RelatedItemsListRow extends _react.Component {
  render() {
    const {
      columns,
      item,
      connectDragSource,
      connectDropTarget,
      refList
    } = this.props;
    const cells = columns.map((col, i) => {
      const ColumnType = _FieldTypes.Columns[col.type] || _FieldTypes.Columns.__unrecognised__;
      const linkTo = !i ? `${Keystone.adminPath}/${refList.path}/${item.id}` : undefined;
      return /*#__PURE__*/_react.default.createElement(ColumnType, {
        key: col.path,
        list: refList,
        col: col,
        data: item,
        linkTo: linkTo
      });
    }); // add sortable icon when applicable

    if (connectDragSource) {
      cells.unshift( /*#__PURE__*/_react.default.createElement(_ListControl.default, {
        key: "_sort",
        type: "sortable",
        dragSource: connectDragSource
      }));
    }

    const row = /*#__PURE__*/_react.default.createElement("tr", {
      key: 'i' + item.id
    }, cells);

    if (connectDropTarget) {
      return connectDropTarget(row);
    } else {
      return row;
    }
  }

}

RelatedItemsListRow.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  dragNewSortOrder: _react.default.PropTypes.number,
  index: _react.PropTypes.number,
  item: _react.PropTypes.object.isRequired,
  refList: _react.PropTypes.object.isRequired,
  relatedItemId: _react.PropTypes.string.isRequired,
  relationship: _react.PropTypes.object.isRequired,
  // Injected by React DnD:
  isDragging: _react.PropTypes.bool,
  // eslint-disable-line react/sort-prop-types
  connectDragSource: _react.PropTypes.func,
  // eslint-disable-line react/sort-prop-types
  connectDropTarget: _react.PropTypes.func,
  // eslint-disable-line react/sort-prop-types
  connectDragPreview: _react.PropTypes.func // eslint-disable-line react/sort-prop-types

};
module.exports = exports = RelatedItemsListRow; // Expose Sortable

/**
 * Implements drag source.
 */

const dragItem = {
  beginDrag(props) {
    const send = { ...props
    }; // props.dispatch(setDragBase(props.item, props.index));

    return { ...send
    };
  },

  endDrag(props, monitor, component) {
    // Dropped outside of the drop target, reset rows
    if (!monitor.didDrop()) {
      props.dispatch((0, _actions.resetItems)());
      return;
    }

    const draggedItem = props.item;
    const prevSortOrder = draggedItem.sortOrder;
    const newSortOrder = props.dragNewSortOrder; // Dropping on self

    if (prevSortOrder === newSortOrder) {
      props.dispatch((0, _actions.resetItems)());
      return;
    } // dropped on a target


    const {
      columns,
      refList,
      relationship,
      relatedItemId,
      item
    } = props;
    props.dispatch((0, _actions.reorderItems)({
      columns,
      refList,
      relationship,
      relatedItemId,
      item,
      prevSortOrder,
      newSortOrder
    }));
  }

};
/**
 * Implements drag target.
 */

const dropItem = {
  drop(props, monitor, component) {
    return { ...props
    };
  },

  hover(props, monitor, component) {
    // reset row alerts
    // if (props.rowAlert.success || props.rowAlert.fail) {
    // 	props.dispatch(setRowAlert({
    // 		reset: true,
    // 	}));
    // }
    const dragged = monitor.getItem().index;
    const over = props.index; // self

    if (dragged === over) {
      return;
    } // Since the items are moved on hover, we need to store the new sort order from the dragged over item so we can use it to reorder when the item is dropped.


    props.dispatch((0, _actions.moveItem)({
      prevIndex: dragged,
      newIndex: over,
      relationshipPath: props.relationship.path,
      newSortOrder: props.item.sortOrder
    }));
    monitor.getItem().index = over;
  }

};
/**
 * Specifies the props to inject into your component.
 */

function dragProps(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

function dropProps(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

; // exports.Sortable = RelatedItemsListRow;

exports.Sortable = (0, _reactDnd.DragSource)('item', dragItem, dragProps)((0, _reactDnd.DropTarget)('item', dropItem, dropProps)(RelatedItemsListRow));

},{"../../../List/components/ListControl":425,"../../actions":393,"FieldTypes":undefined,"react":undefined,"react-dnd":undefined}],405:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ToolbarSection(_ref) {
  let {
    className,
    left,
    right,
    ...props
  } = _ref;
  props.className = (0, _classnames.default)('Toolbar__section', {
    'Toolbar__section--left': left,
    'Toolbar__section--right': right
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", props);
}

;
ToolbarSection.propTypes = {
  left: _react.PropTypes.bool,
  right: _react.PropTypes.bool
};
module.exports = ToolbarSection;

},{"classnames":undefined,"react":undefined}],406:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Toolbar = props => /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
  className: "Toolbar"
}));

Toolbar.displayName = 'Toolbar';
Toolbar.propTypes = {
  children: _react.PropTypes.node.isRequired
};
module.exports = Toolbar;

},{"react":undefined}],407:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT_ITEM = exports.LOAD_RELATIONSHIP_DATA = exports.LOAD_DATA = exports.DRAG_RESET_ITEMS = exports.DRAG_MOVE_ITEM = exports.DATA_LOADING_SUCCESS = exports.DATA_LOADING_ERROR = void 0;
const SELECT_ITEM = 'app/Item/SELECT_ITEM';
exports.SELECT_ITEM = SELECT_ITEM;
const LOAD_DATA = 'app/Item/LOAD_DATA';
exports.LOAD_DATA = LOAD_DATA;
const DATA_LOADING_SUCCESS = 'app/Item/DATA_LOADING_SUCCESS';
exports.DATA_LOADING_SUCCESS = DATA_LOADING_SUCCESS;
const DATA_LOADING_ERROR = 'app/Item/DATA_LOADING_ERROR';
exports.DATA_LOADING_ERROR = DATA_LOADING_ERROR;
const DRAG_MOVE_ITEM = 'app/Item/DRAG_MOVE_ITEM';
exports.DRAG_MOVE_ITEM = DRAG_MOVE_ITEM;
const DRAG_RESET_ITEMS = 'app/Item/DRAG_RESET_ITEMS';
exports.DRAG_RESET_ITEMS = DRAG_RESET_ITEMS;
const LOAD_RELATIONSHIP_DATA = 'app/Item/LOAD_RELATIONSHIP_DATA';
exports.LOAD_RELATIONSHIP_DATA = LOAD_RELATIONSHIP_DATA;

},{}],408:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../elemental");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _lists = require("../../../utils/lists");

var _CreateForm = _interopRequireDefault(require("../../shared/CreateForm"));

var _Alert = _interopRequireDefault(require("../../elemental/Alert"));

var _EditForm = _interopRequireDefault(require("./components/EditForm"));

var _EditFormHeader = _interopRequireDefault(require("./components/EditFormHeader"));

var _RelatedItemsList = _interopRequireDefault(require("./components/RelatedItemsList/RelatedItemsList"));

var _actions = require("./actions");

var _actions2 = require("../List/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Item View
 *
 * This is the item view, it is rendered when users visit a page of a specific
 * item. This mainly renders the form to edit the item content in.
 */
// import FlashMessages from '../../shared/FlashMessages';
var ItemView = _react.default.createClass({
  displayName: 'ItemView',
  contextTypes: {
    router: _react.default.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      createIsOpen: false
    };
  },

  componentDidMount() {
    // When we directly navigate to an item without coming from another client
    // side routed page before, we need to select the list before initializing the item
    // We also need to update when the list id has changed
    if (!this.props.currentList || this.props.currentList.id !== this.props.params.listId) {
      this.props.dispatch((0, _actions2.selectList)(this.props.params.listId));
    }

    this.initializeItem(this.props.params.itemId);
  },

  componentWillReceiveProps(nextProps) {
    // We've opened a new item from the client side routing, so initialize
    // again with the new item id
    if (nextProps.params.itemId !== this.props.params.itemId) {
      this.props.dispatch((0, _actions2.selectList)(nextProps.params.listId));
      this.initializeItem(nextProps.params.itemId);
    }
  },

  // Initialize an item
  initializeItem(itemId) {
    this.props.dispatch((0, _actions.selectItem)(itemId));
    this.props.dispatch((0, _actions.loadItemData)());
  },

  // Called when a new item is created
  onCreate(item) {
    // Hide the create form
    this.toggleCreateModal(false); // Redirect to newly created item path

    const list = this.props.currentList;
    this.context.router.push(`${Keystone.adminPath}/${list.path}/${item.id}`);
  },

  // Open and close the create new item modal
  toggleCreateModal(visible) {
    this.setState({
      createIsOpen: visible
    });
  },

  // Render this items relationships
  renderRelationships() {
    const {
      relationships
    } = this.props.currentList;
    const keys = Object.keys(relationships);
    if (!keys.length) return;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Relationships"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, "Relationships"), keys.map(key => {
      const relationship = relationships[key];
      const refList = _lists.listsByKey[relationship.ref];
      const {
        currentList,
        params,
        relationshipData,
        drag
      } = this.props;
      return /*#__PURE__*/_react.default.createElement(_RelatedItemsList.default, {
        key: relationship.path,
        list: currentList,
        refList: refList,
        relatedItemId: params.itemId,
        relationship: relationship,
        items: relationshipData[relationship.path],
        dragNewSortOrder: drag.newSortOrder,
        dispatch: this.props.dispatch
      });
    })));
  },

  // Handle errors
  handleError(error) {
    const detail = error.detail;

    if (detail) {
      // Item not found
      if (detail.name === 'CastError' && detail.path === '_id') {
        return /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement(_Alert.default, {
          color: "danger",
          style: {
            marginTop: '2em'
          }
        }, "No item matching id \"", this.props.routeParams.itemId, "\".\xA0", /*#__PURE__*/_react.default.createElement(_reactRouter.Link, {
          to: `${Keystone.adminPath}/${this.props.routeParams.listId}`
        }, "Go back to ", this.props.routeParams.listId, "?")));
      }
    }

    if (error.message) {
      // Server down + possibly other errors
      if (error.message === 'Internal XMLHttpRequest Error') {
        return /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement(_Alert.default, {
          color: "danger",
          style: {
            marginTop: '2em'
          }
        }, "We encountered some network problems, please refresh."));
      }
    }

    return /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement(_Alert.default, {
      color: "danger",
      style: {
        marginTop: '2em'
      }
    }, "An unknown error has ocurred, please refresh."));
  },

  render() {
    // If we don't have any data yet, show the loading indicator
    if (!this.props.ready) {
      return /*#__PURE__*/_react.default.createElement(_elemental.Center, {
        height: "50vh",
        "data-screen-id": "item"
      }, /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null));
    } // When we have the data, render the item view with it


    return /*#__PURE__*/_react.default.createElement("div", {
      "data-screen-id": "item"
    }, this.props.error ? this.handleError(this.props.error) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement(_EditFormHeader.default, {
      list: this.props.currentList,
      data: this.props.data,
      toggleCreate: this.toggleCreateModal
    }), /*#__PURE__*/_react.default.createElement(_CreateForm.default, {
      list: this.props.currentList,
      isOpen: this.state.createIsOpen,
      onCancel: () => this.toggleCreateModal(false),
      onCreate: item => this.onCreate(item)
    }), /*#__PURE__*/_react.default.createElement(_EditForm.default, {
      list: this.props.currentList,
      data: this.props.data,
      dispatch: this.props.dispatch,
      router: this.context.router
    })), this.renderRelationships()));
  }

});

module.exports = (0, _reactRedux.connect)(state => ({
  data: state.item.data,
  loading: state.item.loading,
  ready: state.item.ready,
  error: state.item.error,
  currentList: state.lists.currentList,
  relationshipData: state.item.relationshipData,
  drag: state.item.drag
}))(ItemView);

},{"../../../utils/lists":461,"../../elemental":379,"../../elemental/Alert":317,"../../shared/CreateForm":440,"../List/actions":412,"./actions":393,"./components/EditForm":397,"./components/EditFormHeader":398,"./components/RelatedItemsList/RelatedItemsList":402,"react":undefined,"react-redux":undefined,"react-router":undefined}],409:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Item reducer, handles the item data and loading
 */
const initialState = {
  data: null,
  id: null,
  loading: false,
  ready: false,
  error: null,
  relationshipData: {},
  drag: {
    clonedItems: false,
    newSortOrder: null,
    relationshipPath: false
  }
};

function item() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SELECT_ITEM:
      return (0, _objectAssign.default)({}, state, {
        ready: false,
        id: action.id,
        data: null
      });

    case _constants.LOAD_DATA:
      return (0, _objectAssign.default)({}, state, {
        loading: true
      });

    case _constants.DATA_LOADING_SUCCESS:
      Keystone.item = action.data; // Fix keystone filter

      return (0, _objectAssign.default)({}, state, {
        data: action.data,
        loading: false,
        ready: true,
        error: null
      });

    case _constants.DATA_LOADING_ERROR:
      return (0, _objectAssign.default)({}, state, {
        data: null,
        loading: false,
        ready: true,
        error: action.error
      });

    case _constants.DRAG_MOVE_ITEM:
      const currentItems = state.relationshipData[action.relationshipPath].results; // Cache a copy of the current items to reset the items when dismissing a drag and drop if a cached copy doesn't already exist

      const clonedItems = state.drag.clonedItems || currentItems;
      const item = currentItems[action.prevIndex]; // Remove item at prevIndex from array and save that array in
      // itemsWithoutItem

      let itemsWithoutItem = currentItems.slice(0, action.prevIndex).concat(currentItems.slice(action.prevIndex + 1, currentItems.length)); // Add item back in at new index

      itemsWithoutItem.splice(action.newIndex, 0, item);
      const newRelationshipData = (0, _objectAssign.default)({}, state.relationshipData[action.relationshipPath], {
        results: itemsWithoutItem
      });
      return (0, _objectAssign.default)({}, state, {
        drag: {
          newSortOrder: action.newSortOrder,
          clonedItems: clonedItems,
          relationshipPath: action.relationshipPath
        },
        relationshipData: { ...state.relationshipData,
          [action.relationshipPath]: newRelationshipData
        }
      });

    case _constants.DRAG_RESET_ITEMS:
      const originalRelationshipData = (0, _objectAssign.default)({}, state.relationshipData[state.drag.relationshipPath], {
        results: state.drag.clonedItems
      });
      return (0, _objectAssign.default)({}, state, {
        drag: {
          newSortOrder: null,
          clonedItems: false,
          relationshipPath: false
        },
        relationshipData: { ...state.relationshipData,
          [state.drag.relationshipPath]: originalRelationshipData
        }
      });

    case _constants.LOAD_RELATIONSHIP_DATA:
      return (0, _objectAssign.default)({}, state, {
        // Reset drag and drop when relationship data is loaded
        drag: {
          newSortOrder: null,
          clonedItems: false,
          relationshipPath: false
        },
        relationshipData: { ...state.relationshipData,
          [action.relationshipPath]: action.data
        }
      });

    default:
      return state;
  }
}

var _default = item;
exports.default = _default;

},{"./constants":407,"object-assign":556}],410:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllFilters = clearAllFilters;
exports.clearCachedQuery = clearCachedQuery;
exports.clearFilter = clearFilter;
exports.setActiveColumns = setActiveColumns;
exports.setActiveList = setActiveList;
exports.setActiveSearch = setActiveSearch;
exports.setActiveSort = setActiveSort;
exports.setFilter = setFilter;

var _constants = require("../constants");

/**
 * Active actions
 */
function setActiveSearch(searchString) {
  return {
    type: _constants.SET_ACTIVE_SEARCH,
    searchString
  };
}

function setActiveSort(path) {
  return {
    type: _constants.SELECT_ACTIVE_SORT,
    path
  };
}

function setActiveColumns(columns) {
  return {
    type: _constants.SELECT_ACTIVE_COLUMNS,
    columns
  };
}

function setActiveList(list, id) {
  return {
    type: _constants.SET_ACTIVE_LIST,
    list,
    id
  };
}
/**
 * Filtering actions
 */


function clearFilter(path) {
  return {
    type: _constants.CLEAR_FILTER,
    path
  };
}

function clearAllFilters() {
  return {
    type: _constants.CLEAR_ALL_FILTERS
  };
}

function setFilter(path, value) {
  return {
    type: _constants.SELECT_FILTER,
    filter: {
      path,
      value
    }
  };
}

function clearCachedQuery() {
  return {
    type: _constants.CLEAR_CACHED_QUERY
  };
}

},{"../constants":434}],411:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveItem = moveItem;
exports.reorderItems = reorderItems;
exports.resetDragItems = resetDragItems;
exports.resetDragPage = resetDragPage;
exports.resetItems = resetItems;
exports.setDragBase = setDragBase;
exports.setDragIndex = setDragIndex;
exports.setDragItem = setDragItem;
exports.setRowAlert = setRowAlert;

var _constants = require("../constants");

var _actions = require("../actions");

function setDragBase(item, index) {
  return dispatch => {
    dispatch(resetDragPage());
    dispatch(resetDragItems());

    if (item) {
      dispatch(setDragItem(item));

      if (index) {
        dispatch(setDragIndex(index));
      }
    }
  };
}

;

function resetDragPage() {
  return {
    type: _constants.RESET_DRAG_PAGE
  };
}

function resetDragItems() {
  return {
    type: _constants.RESET_DRAG_ITEMS
  };
}

function setDragItem(item) {
  return {
    type: _constants.SET_DRAG_ITEM,
    item
  };
}

function setDragIndex(index) {
  return {
    type: _constants.SET_DRAG_INDEX,
    index
  };
}

function setRowAlert(data) {
  return {
    type: _constants.SET_ROW_ALERT,
    data
  };
}

function moveItem(prevIndex, newIndex, options) {
  return {
    type: _constants.DRAG_MOVE_ITEM,
    prevIndex,
    newIndex,
    options
  };
}

function reorderItems(item, prevSortOrder, newSortOrder, goToPage) {
  // // reset drag
  // defaultDrag();
  return (dispatch, getState) => {
    if (goToPage) {
      // TODO FIGURE OUT IF THIS IS A RACE CONDITION
      dispatch((0, _actions.setCurrentPage)(goToPage));
    }

    const state = getState();
    const list = state.lists.currentList; // Send the item, previous sortOrder and the new sortOrder
    // we should get the proper list and new page results in return

    list.reorderItems(item, prevSortOrder, newSortOrder, {
      search: state.active.search,
      filters: state.active.filters,
      sort: state.active.sort,
      columns: state.active.columns,
      page: state.lists.page
    }, (err, items) => {
      // If err, flash the row alert
      if (err) {
        dispatch(resetItems(item.id)); // return this.resetItems(this.findItemById[item.id]);
      } else {
        dispatch((0, _actions.itemsLoaded)(items));
        dispatch(setRowAlert({
          success: item.id,
          fail: false
        }));
      }
    });
  };
}

function resetItems(itemId) {
  return (dispatch, getState) => {
    const state = getState();
    const {
      page,
      drag
    } = state.lists;

    if (page.index !== drag.page) {
      // We are not on the original page so we need to move back to it
      dispatch((0, _actions.setCurrentPage)(drag.page));
      dispatch((0, _actions.loadItems)({
        fail: true,
        id: itemId
      })); // reset drag
      // return defaultDrag();
    } // Reset the list if dragout or error


    dispatch(setRowAlert({
      success: false,
      fail: itemId
    })); // we use the cached clone since this is the same page
    // the clone contains the proper index numbers which get overwritten on drag
    // _items.results = drag.clonedItems;
    // defaultDrag();
    // this.notifyChange();
  };
}

},{"../actions":412,"../constants":434}],412:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "clearAllFilters", {
  enumerable: true,
  get: function () {
    return _active.clearAllFilters;
  }
});
Object.defineProperty(exports, "clearCachedQuery", {
  enumerable: true,
  get: function () {
    return _active.clearCachedQuery;
  }
});
Object.defineProperty(exports, "clearFilter", {
  enumerable: true,
  get: function () {
    return _active.clearFilter;
  }
});
Object.defineProperty(exports, "deleteItems", {
  enumerable: true,
  get: function () {
    return _items.deleteItems;
  }
});
Object.defineProperty(exports, "downloadItems", {
  enumerable: true,
  get: function () {
    return _items.downloadItems;
  }
});
Object.defineProperty(exports, "itemLoadingError", {
  enumerable: true,
  get: function () {
    return _items.itemLoadingError;
  }
});
Object.defineProperty(exports, "itemsLoaded", {
  enumerable: true,
  get: function () {
    return _items.itemsLoaded;
  }
});
exports.loadInitialItems = loadInitialItems;
Object.defineProperty(exports, "loadItems", {
  enumerable: true,
  get: function () {
    return _items.loadItems;
  }
});
Object.defineProperty(exports, "moveItem", {
  enumerable: true,
  get: function () {
    return _dragdrop.moveItem;
  }
});
Object.defineProperty(exports, "reorderItems", {
  enumerable: true,
  get: function () {
    return _dragdrop.reorderItems;
  }
});
Object.defineProperty(exports, "resetItems", {
  enumerable: true,
  get: function () {
    return _dragdrop.resetItems;
  }
});
exports.selectList = selectList;
Object.defineProperty(exports, "setActiveColumns", {
  enumerable: true,
  get: function () {
    return _active.setActiveColumns;
  }
});
Object.defineProperty(exports, "setActiveFilters", {
  enumerable: true,
  get: function () {
    return _active.setActiveFilters;
  }
});
Object.defineProperty(exports, "setActiveSearch", {
  enumerable: true,
  get: function () {
    return _active.setActiveSearch;
  }
});
Object.defineProperty(exports, "setActiveSort", {
  enumerable: true,
  get: function () {
    return _active.setActiveSort;
  }
});
exports.setCurrentPage = setCurrentPage;
Object.defineProperty(exports, "setDragBase", {
  enumerable: true,
  get: function () {
    return _dragdrop.setDragBase;
  }
});
Object.defineProperty(exports, "setFilter", {
  enumerable: true,
  get: function () {
    return _active.setFilter;
  }
});
Object.defineProperty(exports, "setRowAlert", {
  enumerable: true,
  get: function () {
    return _dragdrop.setRowAlert;
  }
});

var _constants = require("../constants");

var _active = require("./active");

var _items = require("./items");

var _dragdrop = require("./dragdrop");

/**
 * Select a list, and set it as the active list. Called whenever the main
 * List component mounts or the list changes.
 *
 * @param  {String} id The list ID, passed via this.props.params.listId
 */
function selectList(id) {
  return (dispatch, getState) => {
    dispatch({
      type: _constants.SELECT_LIST,
      id
    });
    dispatch((0, _active.setActiveList)(getState().lists.data[id], id));
  };
}

function loadInitialItems() {
  return {
    type: _constants.INITIAL_LIST_LOAD
  };
}
/**
 * Set the current page
 *
 * @param {Number} index The page number we want to be on
 */


function setCurrentPage(index) {
  return {
    type: _constants.SET_CURRENT_PAGE,
    index: parseInt(index)
  };
} // Export all actions from here again for easier usability, that they're split up
// should be an implementation detail of List

},{"../constants":434,"./active":410,"./dragdrop":411,"./items":413}],413:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = deleteItems;
exports.downloadItems = downloadItems;
exports.itemLoadingError = itemLoadingError;
exports.itemsLoaded = itemsLoaded;
exports.loadItems = loadItems;

var _constants = require("../constants");

var _constants2 = require("../../../../constants");

function loadItems() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (dispatch, getState) => {
    let currentLoadCounter = getState().lists.loadCounter + 1;
    dispatch({
      type: _constants.LOAD_ITEMS,
      loadCounter: currentLoadCounter
    }); // Take a snapshot of the current redux state.

    const state = getState(); // Hold a reference to the currentList in state.

    const currentList = state.lists.currentList;
    currentList.loadItems({
      search: state.active.search,
      filters: state.active.filters,
      sort: state.active.sort,
      columns: state.active.columns,
      page: state.lists.page
    }, (err, items) => {
      // Create a new state snapshot and compare the current active list id
      // to the id of the currentList referenced above.
      // If they are the same, then this is the latest fetch request, we may resolve this normally.
      // If these are not the same, then it means that this is not the latest fetch request.
      // BAIL OUT!
      if (getState().active.id !== currentList.id) return;
      if (getState().lists.loadCounter > currentLoadCounter) return;

      if (items) {
        // if (page.index !== drag.page && drag.item) {
        // 	// add the dragging item
        // 	if (page.index > drag.page) {
        // 		_items.results.unshift(drag.item);
        // 	} else {
        // 		_items.results.push(drag.item);
        // 	}
        // }
        // _itemsResultsClone = items.results.slice(0);
        //
        // TODO Reenable this
        // if (options.success && options.id) {
        // 	// flashes a success background on the row
        // 	_rowAlert.success = options.id;
        // }
        // if (options.fail && options.id) {
        // 	// flashes a failure background on the row
        // 	_rowAlert.fail = options.id;
        // }
        // Successfully resolve this request in redux and set the loadCounter back to zero.
        dispatch(itemsLoaded(items));
      } else {
        // Catch this error in redux and set the loadCounter back to zero.
        dispatch(itemLoadingError(err));
      }
    });
  };
}

function downloadItems(format, columns) {
  return (dispatch, getState) => {
    const state = getState();
    const active = state.active;
    const currentList = state.lists.currentList;
    const url = currentList.getDownloadURL({
      search: active.search,
      filters: active.filters,
      sort: active.sort,
      columns: columns ? currentList.expandColumns(columns) : active.columns,
      format: format
    });
    window.open(url);
  };
}

function itemsLoaded(items) {
  return {
    type: _constants.ITEMS_LOADED,
    items
  };
}
/**
 * Dispatched when unsuccessfully trying to load the items, will redispatch
 * loadItems after NETWORK_ERROR_RETRY_DELAY milliseconds until we get items back
 */


function itemLoadingError() {
  return dispatch => {
    dispatch({
      type: _constants.ITEM_LOADING_ERROR,
      err: 'Network request failed'
    });
    setTimeout(() => {
      dispatch(loadItems());
    }, _constants2.NETWORK_ERROR_RETRY_DELAY);
  };
}

function deleteItems(ids) {
  return (dispatch, getState) => {
    const list = getState().lists.currentList;
    list.deleteItems(ids, (err, data) => {
      // TODO ERROR HANDLING
      dispatch(loadItems());
    });
  };
}

},{"../../../../constants":455,"../constants":434}],414:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _FieldTypes = require("FieldTypes");

var _elemental = require("../../../../elemental");

var _Popout = _interopRequireDefault(require("../../../../shared/Popout"));

var _actions = require("../../actions");

var _getFilterLabel = _interopRequireDefault(require("./getFilterLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Filter extends _react.Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.state = {
      isOpen: false
    };
  }

  open() {
    this.setState({
      isOpen: true,
      filterValue: this.props.filter.value
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  updateValue(filterValue) {
    this.setState({
      filterValue: filterValue
    });
  }

  updateFilter(e) {
    const {
      dispatch,
      filter
    } = this.props;
    dispatch((0, _actions.setFilter)(filter.field.path, this.state.filterValue));
    this.close();
    e.preventDefault();
  }

  removeFilter() {
    this.props.dispatch((0, _actions.clearFilter)(this.props.filter.field.path));
  }

  render() {
    const {
      filter
    } = this.props;
    const filterId = `activeFilter__${filter.field.path}`;
    const FilterComponent = _FieldTypes.Filters[filter.field.type];
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_elemental.Chip, {
      label: (0, _getFilterLabel.default)(filter.field, filter.value),
      onClick: this.open,
      onClear: this.removeFilter,
      color: "primary",
      id: filterId
    }), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: this.state.isOpen,
      onCancel: this.close,
      relativeToID: filterId
    }, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.updateFilter
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Header, {
      title: "Edit Filter"
    }), /*#__PURE__*/_react.default.createElement(_Popout.default.Body, null, /*#__PURE__*/_react.default.createElement(FilterComponent, {
      field: filter.field,
      filter: this.state.filterValue,
      onChange: this.updateValue
    })), /*#__PURE__*/_react.default.createElement(_Popout.default.Footer, {
      ref: "footer",
      primaryButtonIsSubmit: true,
      primaryButtonLabel: "Apply",
      secondaryButtonAction: this.close,
      secondaryButtonLabel: "Cancel"
    }))));
  }

}

;
Filter.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  filter: _react.PropTypes.shape({
    field: _react.PropTypes.object.isRequired,
    value: _react.PropTypes.object.isRequired
  }).isRequired
};
module.exports = Filter;

},{"../../../../elemental":379,"../../../../shared/Popout":452,"../../actions":412,"./getFilterLabel":418,"FieldTypes":undefined,"react":undefined}],415:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../../elemental");

var _Filter = _interopRequireDefault(require("./Filter"));

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ListFilters = _ref => {
  let {
    dispatch,
    filters
  } = _ref;
  if (!filters.length) return /*#__PURE__*/_react.default.createElement("div", null);

  const dispatchClearAllFilters = function () {
    dispatch((0, _actions.clearAllFilters)());
  }; // Generate the list of filter pills


  const currentFilters = filters.map((filter, i) => /*#__PURE__*/_react.default.createElement(_Filter.default, {
    key: 'f' + i,
    filter: filter,
    dispatch: dispatch
  })); // When more than 1, append the clear button

  if (currentFilters.length > 1) {
    currentFilters.push( /*#__PURE__*/_react.default.createElement(_elemental.Chip, {
      key: "listFilters__clear",
      label: "Clear All",
      onClick: dispatchClearAllFilters
    }));
  }

  const styles = {
    marginBottom: '1em',
    marginTop: '1em'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles
  }, currentFilters);
};

ListFilters.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  filters: _react.PropTypes.array.isRequired
};
module.exports = ListFilters;

},{"../../../../elemental":379,"../../actions":412,"./Filter":414,"react":undefined}],416:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListFiltersAddForm = _interopRequireDefault(require("./ListFiltersAddForm"));

var _Popout = _interopRequireDefault(require("../../../../shared/Popout"));

var _PopoutList = _interopRequireDefault(require("../../../../shared/Popout/PopoutList"));

var _elemental = require("../../../../elemental");

var _ListHeaderButton = _interopRequireDefault(require("../ListHeaderButton"));

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListFiltersAdd = _react.default.createClass({
  displayName: 'ListFiltersAdd',
  propTypes: {
    maxHeight: _react.default.PropTypes.number
  },

  getDefaultProps() {
    return {
      maxHeight: 360
    };
  },

  getInitialState() {
    return {
      innerHeight: 0,
      isOpen: false,
      searchString: '',
      selectedField: false
    };
  },

  updateSearch(e) {
    this.setState({
      searchString: e.target.value
    });
  },

  openPopout() {
    this.setState({
      isOpen: true
    }, this.focusSearch);
  },

  closePopout() {
    this.setState({
      innerHeight: 0,
      isOpen: false,
      searchString: '',
      selectedField: false
    });
  },

  setPopoutHeight(height) {
    this.setState({
      innerHeight: Math.min(this.props.maxHeight, height)
    });
  },

  navigateBack() {
    this.setState({
      selectedField: false,
      searchString: '',
      innerHeight: 0
    }, this.focusSearch);
  },

  focusSearch() {
    (0, _reactDom.findDOMNode)(this.refs.search).focus();
  },

  selectField(field) {
    this.setState({
      selectedField: field
    });
  },

  applyFilter(value) {
    this.props.dispatch((0, _actions.setFilter)(this.state.selectedField.path, value));
    this.closePopout();
  },

  renderList() {
    const activeFilterFields = this.props.activeFilters.map(obj => obj.field);
    const activeFilterPaths = activeFilterFields.map(obj => obj.path);
    const {
      searchString
    } = this.state;
    let filteredFilters = this.props.availableFilters;

    if (searchString) {
      filteredFilters = filteredFilters.filter(filter => filter.type !== 'heading').filter(filter => new RegExp(searchString).test(filter.field.label.toLowerCase()));
    }

    const popoutList = filteredFilters.map((el, i) => {
      if (el.type === 'heading') {
        return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, {
          key: 'heading_' + i
        }, el.content);
      }

      const filterIsActive = activeFilterPaths.length && activeFilterPaths.indexOf(el.field.path) > -1;
      return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Item, {
        key: 'item_' + el.field.path,
        icon: filterIsActive ? 'check' : 'chevron-right',
        iconHover: filterIsActive ? 'check' : 'chevron-right',
        isSelected: !!filterIsActive,
        label: el.field.label,
        onClick: () => {
          this.selectField(el.field);
        }
      });
    });
    const formFieldStyles = {
      borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
      marginBottom: '1em',
      paddingBottom: '1em'
    };
    return /*#__PURE__*/_react.default.createElement(_Popout.default.Pane, {
      onLayout: this.setPopoutHeight,
      key: "list"
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
      style: formFieldStyles
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      onChange: this.updateSearch,
      placeholder: "Find a filter...",
      ref: "search",
      value: this.state.searchString
    })), popoutList));
  },

  renderForm() {
    return /*#__PURE__*/_react.default.createElement(_Popout.default.Pane, {
      onLayout: this.setPopoutHeight,
      key: "form"
    }, /*#__PURE__*/_react.default.createElement(_ListFiltersAddForm.default, {
      activeFilters: this.props.activeFilters,
      field: this.state.selectedField,
      onApply: this.applyFilter,
      onCancel: this.closePopout,
      onBack: this.navigateBack,
      maxHeight: this.props.maxHeight,
      onHeightChange: this.setPopoutHeight,
      dispatch: this.props.dispatch
    }));
  },

  render() {
    const {
      isOpen,
      selectedField
    } = this.state;
    const popoutBodyStyle = this.state.innerHeight ? {
      height: this.state.innerHeight
    } : null;
    const popoutPanesClassname = (0, _classnames.default)('Popout__panes', {
      'Popout__scrollable-area': !selectedField
    });
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListHeaderButton.default, {
      active: isOpen,
      glyph: "eye",
      id: "listHeaderFilterButton",
      label: "Filter",
      onClick: isOpen ? this.closePopout : this.openPopout
    }), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: isOpen,
      onCancel: this.closePopout,
      relativeToID: "listHeaderFilterButton"
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Header, {
      leftAction: selectedField ? this.navigateBack : null,
      leftIcon: selectedField ? 'chevron-left' : null,
      title: selectedField ? selectedField.label : 'Filter',
      transitionDirection: selectedField ? 'next' : 'prev'
    }), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      className: popoutPanesClassname,
      component: "div",
      style: popoutBodyStyle,
      transitionName: selectedField ? 'Popout__pane-next' : 'Popout__pane-prev',
      transitionEnterTimeout: 360,
      transitionLeaveTimeout: 360
    }, selectedField ? this.renderForm() : this.renderList())));
  }

});

module.exports = ListFiltersAdd;

},{"../../../../elemental":379,"../../../../shared/Popout":452,"../../../../shared/Popout/PopoutList":448,"../../actions":412,"../ListHeaderButton":427,"./ListFiltersAddForm":417,"classnames":undefined,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],417:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Popout = _interopRequireDefault(require("../../../../shared/Popout"));

var _FieldTypes = require("FieldTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListFiltersAddForm = _react.default.createClass({
  displayName: "ListFiltersAddForm",
  propTypes: {
    field: _react.default.PropTypes.object.isRequired,
    maxHeight: _react.default.PropTypes.number,
    onApply: _react.default.PropTypes.func,
    onCancel: _react.default.PropTypes.func,
    onHeightChange: _react.default.PropTypes.func
  },

  getInitialState() {
    const filterComponent = _FieldTypes.Filters[this.props.field.type];
    let filterValue = this.props.activeFilters.filter(i => i.field.path === this.props.field.path)[0];

    if (filterValue) {
      filterValue = filterValue.value;
    } else {
      filterValue = filterComponent && filterComponent.getDefaultValue ? filterComponent.getDefaultValue() : {};
    }

    return {
      filterComponent: filterComponent,
      filterValue: filterValue
    };
  },

  updateHeight(bodyHeight) {
    bodyHeight += 40; // TODO: remove magic number, currently accounts for padding

    const footerHeight = (0, _reactDom.findDOMNode)(this.refs.footer).offsetHeight;
    const maxBodyHeight = this.props.maxHeight - footerHeight;
    const newHeight = bodyHeight + footerHeight; // console.log(bodyHeight, maxBodyHeight, '|', newHeight, this.props.maxHeight);

    this.setState({
      bodyHeight: Math.min(bodyHeight, maxBodyHeight)
    }, () => {
      this.props.onHeightChange(Math.min(newHeight, this.props.maxHeight));
    });
  },

  updateValue(filterValue) {
    this.setState({
      filterValue: filterValue
    });
  },

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onApply(this.state.filterValue);
  },

  renderInvalidFilter() {
    return /*#__PURE__*/_react.default.createElement("div", null, "Error: type ", this.props.field.type, " has no filter UI.");
  },

  render() {
    var FilterComponent = this.state.filterComponent;
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.handleFormSubmit
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Body, {
      ref: "body",
      scrollable: true,
      style: {
        height: this.state.bodyHeight
      }
    }, FilterComponent ? /*#__PURE__*/_react.default.createElement(FilterComponent, {
      field: this.props.field,
      filter: this.state.filterValue,
      onChange: this.updateValue,
      onHeightChange: this.updateHeight
    }) : this.renderInvalidFilter()), /*#__PURE__*/_react.default.createElement(_Popout.default.Footer, {
      ref: "footer",
      primaryButtonIsSubmit: true,
      primaryButtonLabel: "Apply",
      secondaryButtonAction: this.props.onCancel,
      secondaryButtonLabel: "Cancel"
    }));
  }

});

module.exports = ListFiltersAddForm;

},{"../../../../shared/Popout":452,"FieldTypes":undefined,"react":undefined,"react-dom":undefined}],418:[function(require,module,exports){
"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DATE_FORMAT = 'MMM D YYYY';
const DATETIME_FORMAT = 'MMM D YYYY h:mm:ss';

function getFilterLabel(field, value) {
  const label = field.label;

  switch (field.type) {
    // BOOLEAN
    case 'boolean':
      {
        return value.value ? label : `NOT ${label}`;
      }
    // DATE

    case 'date':
      {
        return `${label} ${resolveDateFormat(value, DATE_FORMAT)}`;
      }
    // DATE ARRAY

    case 'datearray':
      {
        const presence = value.presence === 'some' ? 'Some' : 'No';
        return `${presence} ${label} ${resolveDateFormat(value, DATETIME_FORMAT, 'are')}`;
      }
    // DATETIME

    case 'datetime':
      {
        return `${label} ${resolveDateFormat(value, DATETIME_FORMAT)}`;
      }
    // GEOPOINT
    // TODO distance needs a qualifier, currently defaults to "km"?

    case 'geopoint':
      {
        const mode = value.distance.mode === 'max' ? 'is within' : 'is at least';
        const distance = `${value.distance.value}km`;
        const conjunction = value.distance.mode === 'max' ? 'of' : 'from';
        const latlong = `${value.lat}, ${value.lon}`;
        return `${label} ${mode} ${distance} ${conjunction} ${latlong}`;
      }
    // LOCATION

    case 'location':
      {
        const joiner = value.inverted ? 'does NOT match' : 'matches'; // Remove undefined values before rendering the template literal

        const formattedValue = [value.street, value.city, value.state, value.code, value.country].join(' ').trim();
        return `${label} ${joiner} "${formattedValue}"`;
      }
    // NUMBER & MONEY

    case 'number':
    case 'money':
      {
        return `${label} ${resolveNumberFormat(value)}`;
      }
    // NUMBER ARRAY

    case 'numberarray':
      {
        const presence = value.presence === 'some' ? 'Some' : 'No';
        return `${presence} ${label} ${resolveNumberFormat(value, 'are')}`;
      }
    // PASSWORD

    case 'password':
      {
        return value.exists ? `${label} is set` : `${label} is NOT set`;
      }
    // RELATIONSHIP
    // TODO populate relationship, currently rendering an ID

    case 'relationship':
      {
        let joiner = value.inverted ? 'is NOT' : 'is';
        let formattedValue = value.value.length > 1 ? value.value.join(', or ') : value.value[0];
        return `${label} ${joiner} ${formattedValue}`;
      }
    // SELECT

    case 'select':
      {
        let joiner = value.inverted ? 'is NOT' : 'is';
        let formattedValue = value.value.length > 1 ? value.value.join(', or ') : value.value[0];
        return `${label} ${joiner} ${formattedValue}`;
      }
    // TEXT-LIKE

    case 'code':
    case 'color':
    case 'email':
    case 'html':
    case 'key':
    case 'markdown':
    case 'name':
    case 'text':
    case 'textarea':
    case 'url':
      {
        let mode = '';

        if (value.mode === 'beginsWith') {
          mode = value.inverted ? 'does NOT begin with' : 'begins with';
        } else if (value.mode === 'endsWith') {
          mode = value.inverted ? 'does NOT end with' : 'ends with';
        } else if (value.mode === 'exactly') {
          mode = value.inverted ? 'is NOT exactly' : 'is exactly';
        } else if (value.mode === 'contains') {
          mode = value.inverted ? 'does NOT contain' : 'contains';
        }

        return `${label} ${mode} "${value.value}"`;
      }
    // TEXTARRAY

    case 'textarray':
      {
        const presence = value.presence === 'some' ? 'Some' : 'No';
        let mode = '';

        if (value.mode === 'beginsWith') {
          mode = value.inverted ? 'do NOT begin with' : 'begin with';
        } else if (value.mode === 'endsWith') {
          mode = value.inverted ? 'do NOT end with' : 'end with';
        } else if (value.mode === 'exactly') {
          mode = value.inverted ? 'are NOT exactly' : 'are exactly';
        } else if (value.mode === 'contains') {
          mode = value.inverted ? 'do NOT contain' : 'contain';
        }

        return `${presence} ${label} ${mode} "${value.value}"`;
      }
    // CATCHALL

    default:
      {
        return `${label} "${value.value}"`;
      }
  }
}

;

function resolveNumberFormat(value) {
  let conjunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is';
  let mode = '';
  if (value.mode === 'equals') mode = conjunction;else if (value.mode === 'gt') mode = `${conjunction} greater than`;else if (value.mode === 'lt') mode = `${conjunction} less than`;
  const formattedValue = value.mode === 'between' ? `is between ${value.value.min} and ${value.value.max}` : value.value;
  return `${mode} ${formattedValue}`;
}

function resolveDateFormat(value, format) {
  let conjunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is';
  const joiner = value.inverted ? `${conjunction} NOT` : conjunction;
  const mode = value.mode === 'on' ? '' : value.mode;
  const formattedValue = value.mode === 'between' ? `${(0, _moment.default)(value.after).format(format)} and ${(0, _moment.default)(value.before).format(format)}` : (0, _moment.default)(value.value).format(format);
  return `${joiner} ${mode} ${formattedValue}`;
}

module.exports = getFilterLabel;

},{"moment":undefined}],419:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ItemsTableRow = _interopRequireDefault(require("./ItemsTableRow"));

var _ItemsTableDragDrop = _interopRequireDefault(require("./ItemsTableDragDrop"));

var _constants = require("../../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ItemsTable = _react.default.createClass({
  displayName: "ItemsTable",
  propTypes: {
    checkedItems: _react.PropTypes.object.isRequired,
    columns: _react.PropTypes.array.isRequired,
    deleteTableItem: _react.PropTypes.func.isRequired,
    handleSortSelect: _react.PropTypes.func.isRequired,
    items: _react.PropTypes.object.isRequired,
    list: _react.PropTypes.object.isRequired,
    manageMode: _react.PropTypes.bool.isRequired,
    rowAlert: _react.PropTypes.object.isRequired
  },

  renderCols() {
    let cols = this.props.columns.map(col => /*#__PURE__*/_react.default.createElement("col", {
      key: col.path,
      width: col.width
    })); // add delete col when available

    if (!this.props.list.nodelete) {
      cols.unshift( /*#__PURE__*/_react.default.createElement("col", {
        width: _constants.TABLE_CONTROL_COLUMN_WIDTH,
        key: "delete"
      }));
    } // add sort col when available


    if (this.props.list.sortable) {
      cols.unshift( /*#__PURE__*/_react.default.createElement("col", {
        width: _constants.TABLE_CONTROL_COLUMN_WIDTH,
        key: "sortable"
      }));
    }

    return /*#__PURE__*/_react.default.createElement("colgroup", null, cols);
  },

  renderHeaders() {
    let listControlCount = 0;
    if (this.props.list.sortable) listControlCount++;
    if (!this.props.list.nodelete) listControlCount++; // set active sort

    const activeSortPath = this.props.activeSort.paths[0]; // pad first col when controls are available

    const cellPad = listControlCount ? /*#__PURE__*/_react.default.createElement("th", {
      colSpan: listControlCount
    }) : null; // map each heading column

    const cellMap = this.props.columns.map(col => {
      const isSelected = activeSortPath && activeSortPath.path === col.path;
      const isInverted = isSelected && activeSortPath.invert;
      const buttonTitle = `Sort by ${col.label}${isSelected && !isInverted ? ' (desc)' : ''}`;
      const colClassName = (0, _classnames.default)('ItemList__sort-button th-sort', {
        'th-sort--asc': isSelected && !isInverted,
        'th-sort--desc': isInverted
      });
      return /*#__PURE__*/_react.default.createElement("th", {
        key: col.path,
        colSpan: "1"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: colClassName,
        onClick: () => {
          this.props.handleSortSelect(col.path, isSelected && !isInverted);
        },
        title: buttonTitle
      }, col.label, /*#__PURE__*/_react.default.createElement("span", {
        className: "th-sort__icon"
      })));
    });
    return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, cellPad, cellMap));
  },

  render() {
    const {
      items
    } = this.props;
    if (!items.results.length) return null;
    const tableBody = this.props.list.sortable ? /*#__PURE__*/_react.default.createElement(_ItemsTableDragDrop.default, this.props) : /*#__PURE__*/_react.default.createElement("tbody", null, items.results.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_ItemsTableRow.default, _extends({
        key: item.id,
        deleteTableItem: this.props.deleteTableItem,
        index: i,
        sortOrder: item.sortOrder || 0,
        id: item.id,
        item: item
      }, this.props));
    }));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "ItemList-wrapper"
    }, /*#__PURE__*/_react.default.createElement("table", {
      cellPadding: "0",
      cellSpacing: "0",
      className: "Table ItemList"
    }, this.renderCols(), this.renderHeaders(), tableBody));
  }

});

module.exports = exports = ItemsTable;

},{"../../../../../constants":455,"./ItemsTableDragDrop":420,"./ItemsTableRow":423,"classnames":undefined,"react":undefined}],420:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _ItemsTableRow = require("./ItemsTableRow");

var _ItemsTableDragDropZone = _interopRequireDefault(require("./ItemsTableDragDropZone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ItemsTableDragDrop = _react.default.createClass({
  displayName: 'ItemsTableDragDrop',
  propTypes: {
    columns: _react.default.PropTypes.array,
    id: _react.default.PropTypes.any,
    index: _react.default.PropTypes.number,
    items: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("tbody", null, this.props.items.results.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_ItemsTableRow.Sortable, _extends({
        key: item.id,
        index: i,
        sortOrder: item.sortOrder || 0,
        id: item.id,
        item: item
      }, this.props));
    }), /*#__PURE__*/_react.default.createElement(_ItemsTableDragDropZone.default, this.props));
  }

});

module.exports = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default)(ItemsTableDragDrop);

},{"./ItemsTableDragDropZone":421,"./ItemsTableRow":423,"react":undefined,"react-dnd":undefined,"react-dnd-html5-backend":undefined}],421:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ItemsTableDragDropZoneTarget = _interopRequireDefault(require("./ItemsTableDragDropZoneTarget"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * THIS IS ORPHANED AND ISN'T RENDERED AT THE MOMENT
 * THIS WAS DONE TO FINISH THE REDUX INTEGRATION, WILL REWRITE SOON
 * - @mxstbr
 */
var ItemsTableDragDropZone = _react.default.createClass({
  displayName: 'ItemsTableDragDropZone',
  propTypes: {
    columns: _react.default.PropTypes.array,
    connectDropTarget: _react.default.PropTypes.func,
    items: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object
  },

  renderPageDrops() {
    const {
      items,
      currentPage,
      pageSize
    } = this.props;
    const totalPages = Math.ceil(items.count / pageSize);
    const style = {
      display: totalPages > 1 ? null : 'none'
    };
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      const page = i + 1;
      const pageItems = '' + (page * pageSize - (pageSize - 1)) + ' - ' + page * pageSize;
      const current = page === currentPage;
      const className = (0, _classnames.default)('ItemList__dropzone--page', {
        'is-active': current
      });
      pages.push( /*#__PURE__*/_react.default.createElement(_ItemsTableDragDropZoneTarget.default, {
        key: 'page_' + page,
        page: page,
        className: className,
        pageItems: pageItems,
        pageSize: pageSize,
        currentPage: currentPage,
        drag: this.props.drag,
        dispatch: this.props.dispatch
      }));
    }

    let cols = this.props.columns.length;
    if (this.props.list.sortable) cols++;
    if (!this.props.list.nodelete) cols++;
    return /*#__PURE__*/_react.default.createElement("tr", {
      style: style
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: cols
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "ItemList__dropzone"
    }, pages, /*#__PURE__*/_react.default.createElement("div", {
      className: "clearfix"
    }))));
  },

  render() {
    return this.renderPageDrops();
  }

});

module.exports = ItemsTableDragDropZone;

},{"./ItemsTableDragDropZoneTarget":422,"classnames":undefined,"react":undefined}],422:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * THIS IS ORPHANED AND ISN'T RENDERED AT THE MOMENT
 * THIS WAS DONE TO FINISH THE REDUX INTEGRATION, WILL REWRITE SOON
 * - @mxstbr
 */
let timeoutID = false; // drop target

var ItemsTableDragDropZoneTarget = _react.default.createClass({
  displayName: 'ItemsTableDragDropZoneTarget',
  propTypes: {
    className: _react.default.PropTypes.string,
    connectDropTarget: _react.default.PropTypes.func,
    isOver: _react.default.PropTypes.bool,
    pageItems: _react.default.PropTypes.string
  },

  componentDidUpdate() {
    if (timeoutID && !this.props.isOver) {
      clearTimeout(timeoutID);
      timeoutID = false;
    }
  },

  render() {
    const {
      pageItems,
      page,
      isOver,
      dispatch
    } = this.props;
    let {
      className
    } = this.props;

    if (isOver) {
      className += page === this.props.currentPage ? ' is-available ' : ' is-waiting ';
    }

    return this.props.connectDropTarget( /*#__PURE__*/_react.default.createElement("div", {
      className: className,
      onClick: e => {
        dispatch((0, _actions.setCurrentPage)(page));
      }
    }, pageItems));
  }

});
/**
 * Implements drag target.
 */


const dropTarget = {
  drop(props, monitor, component) {
    // we send manual data to endDrag to send this item to the correct page
    const {
      page
    } = props.drag;
    const targetPage = props.page;
    const pageSize = props.pageSize;
    const item = monitor.getItem();
    item.goToPage = props.page;
    item.prevSortOrder = item.sortOrder; // Work out the new sort order. If the new page is greater, we'll put it at the start of the page, and
    // if it's smaller we'll put it at the end of the page.

    item.newSortOrder = targetPage < page ? targetPage * pageSize : targetPage * pageSize - (pageSize - 1);
    return item;
  }
  /*
  * TODO Work out if it's possible to implement this in a way that works.
  hover (props, monitor, component) {
  	if (timeoutID) {
  		return;
  	}
  	const { page, currentPage } = props;
  		// self
  	if (page === currentPage) {
  		return;
  	}
  		if (monitor.isOver()) {
  		timeoutID = setTimeout(() => {
  			// If user hovers over the target for a while change the page.
  			// TODO Get this working. Currently, it looks like it's going to work, but when you
  			// drop onto a new page, no drop events are fired, and react-dnd doesn't have a way to
  			// manually force them to happen. Not sure what to do here.
  			props.dispatch(setCurrentPage(props.page));
  
  			clearTimeout(timeoutID);
  			timeoutID = false;
  		}, 750);
  	}
  },
  */


};
/**
 * Specifies the props to inject into your component.
 */

function dropProps(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

;
module.exports = (0, _reactDnd.DropTarget)('item', dropTarget, dropProps)(ItemsTableDragDropZoneTarget);

},{"../../actions":412,"react":undefined,"react-dnd":undefined}],423:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListControl = _interopRequireDefault(require("../ListControl"));

var _FieldTypes = require("FieldTypes");

var _reactDnd = require("react-dnd");

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItemsRow = _react.default.createClass({
  displayName: "ItemsRow",
  propTypes: {
    columns: _react.default.PropTypes.array,
    id: _react.default.PropTypes.any,
    index: _react.default.PropTypes.number,
    items: _react.default.PropTypes.object,
    list: _react.default.PropTypes.object,
    // Injected by React DnD:
    isDragging: _react.default.PropTypes.bool,
    // eslint-disable-line react/sort-prop-types
    connectDragSource: _react.default.PropTypes.func,
    // eslint-disable-line react/sort-prop-types
    connectDropTarget: _react.default.PropTypes.func,
    // eslint-disable-line react/sort-prop-types
    connectDragPreview: _react.default.PropTypes.func // eslint-disable-line react/sort-prop-types

  },

  renderRow(item) {
    const itemId = item.id;
    const rowClassname = (0, _classnames.default)({
      'ItemList__row--dragging': this.props.isDragging,
      'ItemList__row--selected': this.props.checkedItems[itemId],
      'ItemList__row--manage': this.props.manageMode,
      'ItemList__row--success': this.props.rowAlert.success === itemId,
      'ItemList__row--failure': this.props.rowAlert.fail === itemId
    }); // item fields

    var cells = this.props.columns.map((col, i) => {
      var ColumnType = _FieldTypes.Columns[col.type] || _FieldTypes.Columns.__unrecognised__;
      var linkTo = !i ? `${Keystone.adminPath}/${this.props.list.path}/${itemId}` : undefined;
      return /*#__PURE__*/_react.default.createElement(ColumnType, {
        key: col.path,
        list: this.props.list,
        col: col,
        data: item,
        linkTo: linkTo
      });
    }); // add sortable icon when applicable

    if (this.props.list.sortable) {
      cells.unshift( /*#__PURE__*/_react.default.createElement(_ListControl.default, {
        key: "_sort",
        type: "sortable",
        dragSource: this.props.connectDragSource
      }));
    } // add delete/check icon when applicable


    if (!this.props.list.nodelete) {
      cells.unshift(this.props.manageMode ? /*#__PURE__*/_react.default.createElement(_ListControl.default, {
        key: "_check",
        type: "check",
        active: this.props.checkedItems[itemId]
      }) : /*#__PURE__*/_react.default.createElement(_ListControl.default, {
        key: "_delete",
        onClick: e => this.props.deleteTableItem(item, e),
        type: "delete"
      }));
    }

    var addRow = /*#__PURE__*/_react.default.createElement("tr", {
      key: 'i' + item.id,
      onClick: this.props.manageMode ? e => this.props.checkTableItem(item, e) : null,
      className: rowClassname
    }, cells);

    if (this.props.list.sortable) {
      return (// we could add a preview container/image
        // this.props.connectDragPreview(this.props.connectDropTarget(addRow))
        this.props.connectDropTarget(addRow)
      );
    } else {
      return addRow;
    }
  },

  render() {
    return this.renderRow(this.props.item);
  }

});

module.exports = exports = ItemsRow; // Expose Sortable

/**
 * Implements drag source.
 */

const dragItem = {
  beginDrag(props) {
    const send = { ...props
    };
    props.dispatch((0, _actions.setDragBase)(props.item, props.index));
    return { ...send
    };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      props.dispatch((0, _actions.resetItems)(props.id));
      return;
    }

    const page = props.currentPage;
    const pageSize = props.pageSize; // If we were dropped onto a page change target, then droppedOn.prevSortOrder etc will be
    // set by that target, and we should use those values. If we were just dropped onto a new row
    // then we need to calculate these values ourselves.

    const droppedOn = monitor.getDropResult();
    const prevSortOrder = droppedOn.prevSortOrder || props.sortOrder; // To explain the following line, suppose we are on page 3 and there are 10 items per page.
    // Previous to this page, there are (3 - 1)*10 = 20 items before us. If we have index 6
    // on this page, then we're the 7th item to display (index starts from 0), and so we
    // want to update the display order to 20 + 7 = 27.

    const newSortOrder = droppedOn.newSortOrder || (page - 1) * pageSize + droppedOn.index + 1; // If we were dropped on a page change target, then droppedOn.gotToPage will be set, and we should
    // pass this to reorderItems, which will then change the page for the user.

    props.dispatch((0, _actions.reorderItems)(props.item, prevSortOrder, newSortOrder, Number(droppedOn.goToPage)));
  }

};
/**
 * Implements drag target.
 */

const dropItem = {
  drop(props, monitor, component) {
    return { ...props
    };
  },

  hover(props, monitor, component) {
    // reset row alerts
    if (props.rowAlert.success || props.rowAlert.fail) {
      props.dispatch((0, _actions.setRowAlert)({
        reset: true
      }));
    }

    const dragged = monitor.getItem().index;
    const over = props.index; // self

    if (dragged === over) {
      return;
    }

    props.dispatch((0, _actions.moveItem)(dragged, over, props));
    monitor.getItem().index = over;
  }

};
/**
 * Specifies the props to inject into your component.
 */

function dragProps(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

function dropProps(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

;
exports.Sortable = (0, _reactDnd.DragSource)('item', dragItem, dragProps)((0, _reactDnd.DropTarget)('item', dropItem, dropProps)(ItemsRow));

},{"../../actions":412,"../ListControl":425,"FieldTypes":undefined,"classnames":undefined,"react":undefined,"react-dnd":undefined}],424:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _Popout = _interopRequireDefault(require("../../../shared/Popout"));

var _PopoutList = _interopRequireDefault(require("../../../shared/Popout/PopoutList"));

var _elemental = require("../../../elemental");

var _ListHeaderButton = _interopRequireDefault(require("./ListHeaderButton"));

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListColumnsForm = _react.default.createClass({
  displayName: 'ListColumnsForm',

  getInitialState() {
    return {
      selectedColumns: {},
      searchString: ''
    };
  },

  getSelectedColumnsFromStore() {
    var selectedColumns = {};
    this.props.activeColumns.forEach(col => {
      selectedColumns[col.path] = true;
    });
    return selectedColumns;
  },

  togglePopout(visible) {
    this.setState({
      selectedColumns: this.getSelectedColumnsFromStore(),
      isOpen: visible,
      searchString: ''
    });
  },

  toggleColumn(path, value) {
    const newColumns = (0, _objectAssign.default)({}, this.state.selectedColumns);

    if (value) {
      newColumns[path] = value;
    } else {
      delete newColumns[path];
    }

    this.setState({
      selectedColumns: newColumns
    });
  },

  applyColumns() {
    this.props.dispatch((0, _actions.setActiveColumns)(Object.keys(this.state.selectedColumns)));
    this.togglePopout(false);
  },

  updateSearch(e) {
    this.setState({
      searchString: e.target.value
    });
  },

  renderColumns() {
    const availableColumns = this.props.availableColumns;
    const {
      searchString
    } = this.state;
    let filteredColumns = availableColumns;

    if (searchString) {
      filteredColumns = filteredColumns.filter(column => column.type !== 'heading').filter(column => new RegExp(searchString).test(column.field.label.toLowerCase()));
    }

    return filteredColumns.map((el, i) => {
      if (el.type === 'heading') {
        return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, {
          key: 'heading_' + i
        }, el.content);
      }

      const path = el.field.path;
      const selected = this.state.selectedColumns[path];
      return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Item, {
        key: 'column_' + el.field.path,
        icon: selected ? 'check' : 'dash',
        iconHover: selected ? 'dash' : 'check',
        isSelected: !!selected,
        label: el.field.label,
        onClick: () => {
          this.toggleColumn(path, !selected);
        }
      });
    });
  },

  render() {
    const formFieldStyles = {
      borderBottom: '1px dashed rgba(0,0,0,0.1)',
      marginBottom: '1em',
      paddingBottom: '1em'
    };
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListHeaderButton.default, {
      active: this.state.isOpen,
      id: "listHeaderColumnButton",
      glyph: "list-unordered",
      label: "Columns",
      onClick: () => this.togglePopout(!this.state.isOpen)
    }), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: this.state.isOpen,
      onCancel: () => this.togglePopout(false),
      relativeToID: "listHeaderColumnButton"
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Header, {
      title: "Columns"
    }), /*#__PURE__*/_react.default.createElement(_Popout.default.Body, {
      scrollable: true
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: formFieldStyles
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoFocus: true,
      onChange: this.updateSearch,
      placeholder: "Find a column...",
      value: this.state.searchString
    })), /*#__PURE__*/_react.default.createElement(_PopoutList.default, null, this.renderColumns())), /*#__PURE__*/_react.default.createElement(_Popout.default.Footer, {
      primaryButtonAction: this.applyColumns,
      primaryButtonLabel: "Apply",
      secondaryButtonAction: () => this.togglePopout(false),
      secondaryButtonLabel: "Cancel"
    })));
  }

});

module.exports = ListColumnsForm;

},{"../../../elemental":379,"../../../shared/Popout":452,"../../../shared/Popout/PopoutList":448,"../actions":412,"./ListHeaderButton":427,"object-assign":556,"react":undefined}],425:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListControl = _react.default.createClass({
  displayName: "ListControl",
  propTypes: {
    dragSource: _react.default.PropTypes.func,
    onClick: _react.default.PropTypes.func,
    type: _react.default.PropTypes.oneOf(['check', 'delete', 'sortable']).isRequired
  },

  renderControl() {
    var icon = 'octicon octicon-';
    var className = (0, _classnames.default)('ItemList__control ItemList__control--' + this.props.type, {
      'is-active': this.props.active
    });
    var tabindex = this.props.type === 'sortable' ? -1 : null;

    if (this.props.type === 'check') {
      icon += 'check';
    }

    if (this.props.type === 'delete') {
      icon += 'trashcan';
    }

    if (this.props.type === 'sortable') {
      icon += 'three-bars';
    }

    var renderButton = /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: this.props.onClick,
      className: className,
      tabIndex: tabindex
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: icon
    }));

    if (this.props.dragSource) {
      return this.props.dragSource(renderButton);
    } else {
      return renderButton;
    }
  },

  render() {
    var className = 'ItemList__col--control ItemList__col--' + this.props.type;
    return /*#__PURE__*/_react.default.createElement("td", {
      className: className
    }, this.renderControl());
  }

});

module.exports = ListControl;

},{"classnames":undefined,"react":undefined}],426:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _Popout = _interopRequireDefault(require("../../../shared/Popout"));

var _PopoutList = _interopRequireDefault(require("../../../shared/Popout/PopoutList"));

var _ListHeaderButton = _interopRequireDefault(require("./ListHeaderButton"));

var _elemental = require("../../../elemental");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FORMAT_OPTIONS = [{
  label: 'CSV',
  value: 'csv'
}, {
  label: 'JSON',
  value: 'json'
}];

var ListDownloadForm = _react.default.createClass({
  displayName: "ListDownloadForm",
  propTypes: {
    activeColumns: _react.PropTypes.array,
    dispatch: _react.PropTypes.func.isRequired,
    list: _react.PropTypes.object
  },

  getInitialState() {
    return {
      format: FORMAT_OPTIONS[0].value,
      isOpen: false,
      useCurrentColumns: true,
      selectedColumns: this.getDefaultSelectedColumns()
    };
  },

  getDefaultSelectedColumns() {
    var selectedColumns = {};
    this.props.activeColumns.forEach(col => {
      selectedColumns[col.path] = true;
    });
    return selectedColumns;
  },

  getListUIElements() {
    return this.props.list.uiElements.map(el => {
      return el.type === 'field' ? {
        type: 'field',
        field: this.props.list.fields[el.field]
      } : el;
    });
  },

  allColumnsSelected() {
    const selectedColumns = Object.keys(this.state.selectedColumns).length;
    const columnAmount = this.getListUIElements().filter(el => el.type !== 'heading').length;
    return selectedColumns === columnAmount;
  },

  togglePopout(visible) {
    this.setState({
      isOpen: visible
    });
  },

  toggleColumn(column, value) {
    const newColumns = (0, _objectAssign.default)({}, this.state.selectedColumns);

    if (value) {
      newColumns[column] = value;
    } else {
      delete newColumns[column];
    }

    this.setState({
      selectedColumns: newColumns
    });
  },

  changeFormat(value) {
    this.setState({
      format: value
    });
  },

  toggleCurrentlySelectedColumns(e) {
    const newState = {
      useCurrentColumns: e.target.checked,
      selectedColumns: this.getDefaultSelectedColumns()
    };
    this.setState(newState);
  },

  clickSelectAll() {
    if (this.allColumnsSelected()) {
      this.selectNoColumns();
    } else {
      this.selectAllColumns();
    }
  },

  selectAllColumns() {
    const newColumns = {};
    this.getListUIElements().map(el => {
      if (el.type !== 'heading') {
        newColumns[el.field.path] = true;
      }
    });
    this.setState({
      selectedColumns: newColumns
    });
  },

  selectNoColumns() {
    this.setState({
      selectedColumns: {}
    });
  },

  handleDownloadRequest() {
    this.props.dispatch((0, _actions.downloadItems)(this.state.format, Object.keys(this.state.selectedColumns)));
    this.togglePopout(false);
  },

  renderColumnSelect() {
    if (this.state.useCurrentColumns) return null;
    const possibleColumns = this.getListUIElements().map((el, i) => {
      if (el.type === 'heading') {
        return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, {
          key: 'heading_' + i
        }, el.content);
      }

      const columnKey = el.field.path;
      const columnValue = this.state.selectedColumns[columnKey];
      return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Item, {
        key: 'item_' + el.field.path,
        icon: columnValue ? 'check' : 'dash',
        iconHover: columnValue ? 'dash' : 'check',
        isSelected: columnValue,
        label: el.field.label,
        onClick: () => this.toggleColumn(columnKey, !columnValue)
      });
    });
    const allColumnsSelected = this.allColumnsSelected();
    const checkboxLabel = allColumnsSelected ? 'Select None' : 'Select All';
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      offsetAbsentLabel: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.LabelledControl, {
      checked: allColumnsSelected,
      label: checkboxLabel,
      onChange: this.clickSelectAll,
      type: "checkbox",
      value: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderTop: '1px dashed rgba(0,0,0,0.1)',
        marginTop: '1em',
        paddingTop: '1em'
      }
    }, possibleColumns));
  },

  render() {
    const {
      useCurrentColumns
    } = this.state;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListHeaderButton.default, {
      active: this.state.isOpen,
      id: "listHeaderDownloadButton",
      glyph: "cloud-download",
      label: "Download",
      onClick: () => this.togglePopout(!this.state.isOpen)
    }), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: this.state.isOpen,
      onCancel: () => this.togglePopout(false),
      relativeToID: "listHeaderDownloadButton"
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Header, {
      title: "Download"
    }), /*#__PURE__*/_react.default.createElement(_Popout.default.Body, {
      scrollable: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.Form, {
      layout: "horizontal",
      labelWidth: 100,
      component: "div"
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      label: "File format:"
    }, /*#__PURE__*/_react.default.createElement(_elemental.SegmentedControl, {
      equalWidthSegments: true,
      onChange: this.changeFormat,
      options: FORMAT_OPTIONS,
      value: this.state.format
    })), /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      label: "Columns:",
      style: {
        marginBottom: 0
      }
    }, /*#__PURE__*/_react.default.createElement(_elemental.LabelledControl, {
      autoFocus: true,
      checked: useCurrentColumns,
      label: "Use currently selected",
      onChange: this.toggleCurrentlySelectedColumns,
      type: "checkbox",
      value: true
    })), this.renderColumnSelect())), /*#__PURE__*/_react.default.createElement(_Popout.default.Footer, {
      primaryButtonAction: this.handleDownloadRequest,
      primaryButtonLabel: "Download",
      secondaryButtonAction: () => this.togglePopout(false),
      secondaryButtonLabel: "Cancel"
    })));
  }

});

module.exports = ListDownloadForm;

},{"../../../elemental":379,"../../../shared/Popout":452,"../../../shared/Popout/PopoutList":448,"../actions":412,"./ListHeaderButton":427,"object-assign":556,"react":undefined}],427:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ListHeaderButton(_ref) {
  let {
    className,
    label,
    glyph,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_elemental.DropdownButton, _extends({
    block: true
  }, props), /*#__PURE__*/_react.default.createElement(_elemental.Glyph, {
    name: glyph,
    cssStyles: classes.glyph
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _glamor.css)(classes.label)
  }, label));
}

;
ListHeaderButton.propTypes = {
  glyph: _react.PropTypes.string.isRequired
}; // show an icon on small screens where real estate is precious
// otherwise render the label

const classes = {
  glyph: {
    'display': 'none',
    '@media (max-width: 500px)': {
      display: 'inline-block'
    }
  },
  label: {
    'display': 'inline-block',
    '@media (max-width: 500px)': {
      display: 'none'
    }
  }
};
module.exports = ListHeaderButton;

},{"../../../elemental":379,"glamor":undefined,"react":undefined}],428:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../../theme"));

var _color = require("../../../../utils/color");

var _elemental = require("../../../elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ListHeaderSearch(_ref) {
  let {
    focusInput,
    handleChange,
    handleClear,
    handleKeyup,
    value,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.wrapper)
  }), /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
    "data-search-input-field": true,
    onChange: handleChange,
    onKeyUp: handleKeyup,
    placeholder: "Search",
    value: value
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _glamor.css)(classes.icon, !!value.length && classes.iconWhenClear),
    "data-search-input-field-clear-icon": true,
    disabled: !value.length,
    onClick: value.length && handleClear,
    title: "Clear search query",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement(_elemental.Glyph, {
    name: value.length ? 'x' : 'search'
  })));
}

;
ListHeaderSearch.propTypes = {
  focusInput: _react.PropTypes.bool,
  handleChange: _react.PropTypes.func.isRequired,
  handleClear: _react.PropTypes.func.isRequired,
  handleKeyup: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.string
};
const clearHoverAndFocusStyles = {
  color: _theme.default.color.danger,
  outline: 0,
  textDecoration: 'none'
};
const classes = {
  wrapper: {
    position: 'relative'
  },
  icon: {
    background: 'none',
    border: 'none',
    color: _theme.default.color.gray40,
    height: '100%',
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: 0,
    width: '2.2em',
    zIndex: 2 // above the form field on focus

  },
  iconWhenClear: {
    ':hover': clearHoverAndFocusStyles,
    ':focus': clearHoverAndFocusStyles,
    ':active': {
      color: (0, _color.darken)(_theme.default.color.danger, 10)
    }
  }
};
module.exports = ListHeaderSearch;

},{"../../../../theme":456,"../../../../utils/color":458,"../../../elemental":379,"glamor":undefined,"react":undefined}],429:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../../theme"));

var _ListSort = _interopRequireDefault(require("./ListSort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ListHeaderTitle(_ref) {
  let {
    activeSort,
    availableColumns,
    handleSortSelect,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("h2", _extends({
    className: (0, _glamor.css)(classes.heading)
  }, props), title, /*#__PURE__*/_react.default.createElement(_ListSort.default, {
    activeSort: activeSort,
    availableColumns: availableColumns,
    handleSortSelect: handleSortSelect
  }));
}

;
ListHeaderTitle.propTypes = {
  activeSort: _react.PropTypes.object,
  availableColumns: _react.PropTypes.arrayOf(_react.PropTypes.object),
  handleSortSelect: _react.PropTypes.func.isRequired,
  title: _react.PropTypes.string
};
const classes = {
  heading: {
    [`@media (max-width: ${_theme.default.breakpoint.mobileMax})`]: {
      fontSize: '1.25em',
      fontWeight: 500
    }
  }
};
module.exports = ListHeaderTitle;

},{"../../../../theme":456,"./ListSort":432,"glamor":undefined,"react":undefined}],430:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../elemental");

var _theme = _interopRequireDefault(require("../../../../theme"));

var _ListColumnsForm = _interopRequireDefault(require("./ListColumnsForm"));

var _ListDownloadForm = _interopRequireDefault(require("./ListDownloadForm"));

var _ListHeaderSearch = _interopRequireDefault(require("./ListHeaderSearch"));

var _ListFiltersAdd = _interopRequireDefault(require("./Filtering/ListFiltersAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ButtonDivider(_ref) {
  let {
    style,
    ...props
  } = _ref;
  props.style = {
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    paddingLeft: '0.75em',
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", props);
}

;

function CreateButton(_ref2) {
  let {
    listName,
    onClick,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, _extends({
    block: true,
    color: "success",
    "data-e2e-list-create-button": "header",
    glyph: "plus",
    onClick: onClick,
    position: "left",
    title: `Create ${listName}`
  }, props), /*#__PURE__*/_react.default.createElement(_elemental.ResponsiveText, {
    visibleSM: "Create",
    visibleMD: "Create",
    visibleLG: `Create ${listName}`
  }));
}

;

function ListHeaderToolbar(_ref3) {
  let {
    // common
    dispatch,
    list,
    // expand
    expandIsActive,
    expandOnClick,
    // list
    createIsAvailable,
    createListName,
    createOnClick,
    // search
    searchHandleChange,
    searchHandleClear,
    searchHandleKeyup,
    searchValue,
    // filters
    filtersActive,
    filtersAvailable,
    // columns
    columnsAvailable,
    columnsActive,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
    block: true,
    cssStyles: classes.wrapper
  }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    grow: true,
    cssStyles: classes.search
  }, /*#__PURE__*/_react.default.createElement(_ListHeaderSearch.default, {
    handleChange: searchHandleChange,
    handleClear: searchHandleClear,
    handleKeyup: searchHandleKeyup,
    value: searchValue
  })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    grow: true,
    cssStyles: classes.buttons
  }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
    block: true
  }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    cssStyles: classes.filter
  }, /*#__PURE__*/_react.default.createElement(_ListFiltersAdd.default, {
    dispatch: dispatch,
    activeFilters: filtersActive,
    availableFilters: filtersAvailable
  })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    cssStyles: classes.columns
  }, /*#__PURE__*/_react.default.createElement(_ListColumnsForm.default, {
    availableColumns: columnsAvailable,
    activeColumns: columnsActive,
    dispatch: dispatch
  })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    cssStyles: classes.download
  }, /*#__PURE__*/_react.default.createElement(_ListDownloadForm.default, {
    activeColumns: columnsActive,
    dispatch: dispatch,
    list: list
  })), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    cssStyles: classes.expand
  }, /*#__PURE__*/_react.default.createElement(ButtonDivider, null, /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, {
    active: expandIsActive,
    glyph: "mirror",
    onClick: expandOnClick,
    title: "Expand table width"
  }))), createIsAvailable && /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, {
    cssStyles: classes.create
  }, /*#__PURE__*/_react.default.createElement(ButtonDivider, null, /*#__PURE__*/_react.default.createElement(CreateButton, {
    listName: createListName,
    onClick: createOnClick
  }))))));
}

;
ListHeaderToolbar.propTypes = {
  columnsActive: _react.PropTypes.array,
  columnsAvailable: _react.PropTypes.array,
  createIsAvailable: _react.PropTypes.bool,
  createListName: _react.PropTypes.string,
  createOnClick: _react.PropTypes.func.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  expandIsActive: _react.PropTypes.bool,
  expandOnClick: _react.PropTypes.func.isRequired,
  filtersActive: _react.PropTypes.array,
  filtersAvailable: _react.PropTypes.array,
  list: _react.PropTypes.object,
  searchHandleChange: _react.PropTypes.func.isRequired,
  searchHandleClear: _react.PropTypes.func.isRequired,
  searchHandleKeyup: _react.PropTypes.func.isRequired,
  searchValue: _react.PropTypes.string
};
const tabletGrowStyles = {
  [`@media (max-width: ${_theme.default.breakpoint.tabletPortraitMax})`]: {
    flexGrow: 1
  }
};
const classes = {
  // main wrapper
  wrapper: {
    [`@media (max-width: ${_theme.default.breakpoint.tabletPortraitMax})`]: {
      flexWrap: 'wrap'
    }
  },
  // button wrapper
  buttons: {
    [`@media (max-width: ${_theme.default.breakpoint.tabletPortraitMax})`]: {
      paddingLeft: 0
    }
  },
  // cols
  expand: {
    [`@media (max-width: ${_theme.default.breakpoint.desktopMax})`]: {
      display: 'none'
    }
  },
  filter: {
    [`@media (max-width: ${_theme.default.breakpoint.tabletPortraitMax})`]: {
      paddingLeft: 0,
      flexGrow: 1
    }
  },
  columns: tabletGrowStyles,
  create: tabletGrowStyles,
  download: tabletGrowStyles,
  search: {
    [`@media (max-width: ${_theme.default.breakpoint.tabletPortraitMax})`]: {
      marginBottom: '0.75em',
      minWidth: '100%'
    }
  }
};
module.exports = ListHeaderToolbar;

},{"../../../../theme":456,"../../../elemental":379,"./Filtering/ListFiltersAdd":416,"./ListColumnsForm":424,"./ListDownloadForm":426,"./ListHeaderSearch":428,"react":undefined}],431:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../../elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ListManagement(_ref) {
  let {
    checkedItemCount,
    handleDelete,
    handleSelect,
    handleToggle,
    isOpen,
    itemCount,
    itemsPerPage,
    nodelete,
    noedit,
    selectAllItemsLoading,
    ...props
  } = _ref;
  // do not render if there's no results
  // or if edit/delete unavailable on the list
  if (!itemCount || nodelete && noedit) return null;
  const buttonNoteStyles = {
    color: '#999',
    fontWeight: 'normal'
  }; // delete button

  const actionButtons = isOpen && /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, {
    color: "cancel",
    disabled: !checkedItemCount,
    glyph: "trashcan",
    onClick: handleDelete,
    position: "left",
    variant: "link",
    alt: "delete"
  }, "Delete")); // select buttons


  const allVisibleButtonIsActive = checkedItemCount === itemCount;
  const pageVisibleButtonIsActive = checkedItemCount === itemsPerPage;
  const noneButtonIsActive = !checkedItemCount;

  const selectAllButton = itemCount > itemsPerPage && /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    active: allVisibleButtonIsActive,
    onClick: () => handleSelect('all'),
    title: "Select all rows (including those not visible)"
  }, selectAllItemsLoading ? /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null) : 'All', " ", /*#__PURE__*/_react.default.createElement("small", {
    style: buttonNoteStyles
  }, "(", itemCount, ")")));

  const selectButtons = isOpen ? /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
    contiguous: true
  }, selectAllButton, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    active: pageVisibleButtonIsActive,
    onClick: () => handleSelect('visible'),
    title: "Select all rows"
  }, itemCount > itemsPerPage ? 'Page ' : 'All ', /*#__PURE__*/_react.default.createElement("small", {
    style: buttonNoteStyles
  }, "(", itemCount > itemsPerPage ? itemsPerPage : itemCount, ")"))), /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    active: noneButtonIsActive,
    onClick: () => handleSelect('none'),
    title: "Deselect all rows"
  }, "None")))) : null; // selected count text

  const selectedCountText = isOpen ? /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#666',
      display: 'inline-block',
      lineHeight: '2.4em',
      margin: 1
    }
  }, checkedItemCount, " selected")) : null; // put it all together

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroup, {
    style: {
      float: 'left',
      marginRight: '.75em',
      marginBottom: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_elemental.InlineGroupSection, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    active: isOpen,
    onClick: () => handleToggle(!isOpen)
  }, "Manage")), selectButtons, actionButtons, selectedCountText));
}

;
ListManagement.propTypes = {
  checkedItems: _react.PropTypes.number,
  handleDelete: _react.PropTypes.func.isRequired,
  handleSelect: _react.PropTypes.func.isRequired,
  handleToggle: _react.PropTypes.func.isRequired,
  isOpen: _react.PropTypes.bool,
  itemCount: _react.PropTypes.number,
  itemsPerPage: _react.PropTypes.number,
  nodelete: _react.PropTypes.bool,
  noedit: _react.PropTypes.bool,
  selectAllItemsLoading: _react.PropTypes.bool
};
module.exports = ListManagement;

},{"../../../elemental":379,"react":undefined}],432:[function(require,module,exports){
"use strict";

var _elemental = require("../../../elemental");

var _react = _interopRequireWildcard(require("react"));

var _vkey = _interopRequireDefault(require("vkey"));

var _Kbd = _interopRequireDefault(require("../../../shared/Kbd"));

var _Popout = _interopRequireDefault(require("../../../shared/Popout"));

var _PopoutList = _interopRequireDefault(require("../../../shared/Popout/PopoutList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListSort = _react.default.createClass({
  displayName: 'ListSort',
  propTypes: {
    handleSortSelect: _react.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      altDown: false,
      popoutIsOpen: false,
      searchString: ''
    };
  },

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown, false);
    document.body.addEventListener('keyup', this.handleKeyUp, false);
  },

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
    document.body.removeEventListener('keyup', this.handleKeyUp);
  },

  handleKeyDown(e) {
    if (_vkey.default[e.keyCode] !== '<alt>') return;
    this.setState({
      altDown: true
    });
  },

  handleKeyUp(e) {
    if (_vkey.default[e.keyCode] !== '<alt>') return;
    this.setState({
      altDown: false
    });
  },

  handleSortSelect(path, inverted) {
    if (this.state.altDown) inverted = true;
    this.props.handleSortSelect(path, inverted);
    this.closePopout();
  },

  openPopout() {
    this.setState({
      popoutIsOpen: true
    });
  },

  closePopout() {
    this.setState({
      popoutIsOpen: false,
      searchString: ''
    });
  },

  updateSearch(e) {
    this.setState({
      searchString: e.target.value
    });
  },

  renderSortOptions() {
    // TODO: Handle multiple sort paths
    const activeSortPath = this.props.activeSort.paths[0];
    const availibleColumns = this.props.availableColumns;
    const {
      searchString
    } = this.state;
    let filteredColumns = availibleColumns;

    if (searchString) {
      filteredColumns = filteredColumns.filter(column => column.type !== 'heading').filter(column => new RegExp(searchString).test(column.field.label.toLowerCase()));
    }

    return filteredColumns.map((el, i) => {
      if (el.type === 'heading') {
        return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Heading, {
          key: 'heading_' + i
        }, el.content);
      }

      const path = el.field.path;
      const isSelected = activeSortPath && activeSortPath.path === path;
      const isInverted = isSelected && activeSortPath.invert;
      const icon = this.state.altDown || isSelected && !isInverted ? 'chevron-up' : 'chevron-down';
      return /*#__PURE__*/_react.default.createElement(_PopoutList.default.Item, {
        key: 'column_' + el.field.path,
        icon: icon,
        isSelected: isSelected,
        label: el.field.label,
        onClick: () => {
          this.handleSortSelect(path, isSelected && !isInverted);
        }
      });
    });
  },

  render() {
    // TODO: Handle multiple sort paths
    const activeSortPath = this.props.activeSort.paths[0];
    const formFieldStyles = {
      borderBottom: '1px dashed rgba(0,0,0,0.1)',
      paddingBottom: '1em'
    };
    return /*#__PURE__*/_react.default.createElement("span", null, activeSortPath && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: '#999'
      }
    }, " sorted by "), /*#__PURE__*/_react.default.createElement("a", {
      id: "listHeaderSortButton",
      href: "javascript:;",
      onClick: this.openPopout
    }, activeSortPath.label.toLowerCase(), activeSortPath.invert ? ' (descending)' : '', /*#__PURE__*/_react.default.createElement("span", {
      className: "disclosure-arrow"
    }))), /*#__PURE__*/_react.default.createElement(_Popout.default, {
      isOpen: this.state.popoutIsOpen,
      onCancel: this.closePopout,
      relativeToID: "listHeaderSortButton"
    }, /*#__PURE__*/_react.default.createElement(_Popout.default.Header, {
      title: "Sort"
    }), /*#__PURE__*/_react.default.createElement(_Popout.default.Body, {
      scrollable: true
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormField, {
      style: formFieldStyles
    }, /*#__PURE__*/_react.default.createElement(_elemental.FormInput, {
      autoFocus: true,
      value: this.state.searchString,
      onChange: this.updateSearch,
      placeholder: "Find a field..."
    })), /*#__PURE__*/_react.default.createElement(_PopoutList.default, null, this.renderSortOptions())), /*#__PURE__*/_react.default.createElement(_Popout.default.Footer, null, /*#__PURE__*/_react.default.createElement(_elemental.FormNote, null, "Hold ", /*#__PURE__*/_react.default.createElement(_Kbd.default, null, "alt"), " to toggle ascending/descending"))));
  }

});

module.exports = ListSort;

},{"../../../elemental":379,"../../../shared/Kbd":444,"../../../shared/Popout":452,"../../../shared/Popout/PopoutList":448,"react":undefined,"vkey":undefined}],433:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _reactDom = require("react-dom");

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _FieldTypes = require("FieldTypes");

var _InvalidFieldType = _interopRequireDefault(require("../../../shared/InvalidFieldType"));

var _string = require("../../../../utils/string");

var _elemental = require("../../../elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdateForm = _react.default.createClass({
  displayName: 'UpdateForm',
  propTypes: {
    isOpen: _react.default.PropTypes.bool,
    itemIds: _react.default.PropTypes.array,
    list: _react.default.PropTypes.object,
    onCancel: _react.default.PropTypes.func
  },

  getDefaultProps() {
    return {
      isOpen: false
    };
  },

  getInitialState() {
    return {
      fields: []
    };
  },

  componentDidMount() {
    this.doFocus();
  },

  componentDidUpdate() {
    this.doFocus();
  },

  doFocus() {
    if (this.refs.focusTarget) {
      (0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
    }
  },

  getOptions() {
    const {
      fields
    } = this.props.list;
    return Object.keys(fields).map(key => ({
      value: fields[key].path,
      label: fields[key].label
    }));
  },

  getFieldProps(field) {
    var props = (0, _objectAssign.default)({}, field);
    props.value = this.state.fields[field.path];
    props.values = this.state.fields;
    props.onChange = this.handleChange;
    props.mode = 'create';
    props.key = field.path;
    return props;
  },

  updateOptions(fields) {
    this.setState({
      fields: fields
    }, this.doFocus);
  },

  handleChange(value) {
    console.log('handleChange:', value);
  },

  handleClose() {
    this.setState({
      fields: []
    });
    this.props.onCancel();
  },

  renderFields() {
    const {
      list
    } = this.props;
    const {
      fields
    } = this.state;
    const formFields = [];
    let focusRef;
    fields.forEach(fieldOption => {
      const field = list.fields[fieldOption.value];

      if (typeof _FieldTypes.Fields[field.type] !== 'function') {
        formFields.push( /*#__PURE__*/_react.default.createElement(_InvalidFieldType.default, {
          type: field.type,
          path: field.path,
          key: field.path
        }));
        return;
      }

      var fieldProps = this.getFieldProps(field);

      if (!focusRef) {
        fieldProps.ref = focusRef = 'focusTarget';
      }

      formFields.push( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[field.type], fieldProps));
    });
    const fieldsUI = formFields.length ? formFields : /*#__PURE__*/_react.default.createElement(_elemental.BlankState, {
      heading: "Choose a field above to begin",
      style: {
        padding: '3em 2em'
      }
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderTop: '1px dashed rgba(0,0,0,0.1)',
        marginTop: 20,
        paddingTop: 20
      }
    }, fieldsUI);
  },

  renderForm() {
    const {
      itemIds,
      list
    } = this.props;
    const itemCount = (0, _string.plural)(itemIds, '* ' + list.singular, '* ' + list.plural);
    const formAction = `${Keystone.adminPath}/${list.path}`;
    return /*#__PURE__*/_react.default.createElement(_elemental.Form, {
      layout: "horizontal",
      action: formAction,
      noValidate: "true"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Modal.Header, {
      onClose: this.handleClose,
      showCloseButton: true,
      text: 'Update ' + itemCount
    }), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      key: "field-select",
      multi: true,
      onChange: this.updateOptions,
      options: this.getOptions(),
      ref: "initialFocusTarget",
      value: this.state.fields
    }), this.renderFields()), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      color: "primary",
      submit: true
    }, "Update"), /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      color: "cancel",
      variant: "link",
      onClick: this.handleClose
    }, "Cancel")));
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_elemental.Modal.Dialog, {
      isOpen: this.props.isOpen,
      onClose: this.handleClose,
      backdropClosesModal: true
    }, this.renderForm());
  }

});

module.exports = UpdateForm;

},{"../../../../utils/string":463,"../../../elemental":379,"../../../shared/InvalidFieldType":443,"FieldTypes":undefined,"object-assign":556,"react":undefined,"react-dom":undefined,"react-select":undefined}],434:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_ROW_ALERT = exports.SET_FILTERS = exports.SET_DRAG_ITEM = exports.SET_DRAG_INDEX = exports.SET_CURRENT_PAGE = exports.SET_ACTIVE_SORT = exports.SET_ACTIVE_SEARCH = exports.SET_ACTIVE_LIST = exports.SET_ACTIVE_COLUMNS = exports.SELECT_LIST = exports.SELECT_FILTER = exports.SELECT_ACTIVE_SORT = exports.SELECT_ACTIVE_COLUMNS = exports.RESET_DRAG_PAGE = exports.RESET_DRAG_ITEMS = exports.REPLACE_CACHED_QUERY = exports.QUERY_HAS_NOT_CHANGED = exports.QUERY_HAS_CHANGED = exports.LOAD_ITEMS = exports.LOADING_ITEMS = exports.ITEM_LOADING_ERROR = exports.ITEMS_LOADED = exports.INITIAL_LIST_LOAD = exports.DRAG_MOVE_ITEM = exports.CLEAR_FILTER = exports.CLEAR_CACHED_QUERY = exports.CLEAR_ALL_FILTERS = exports.ADD_FILTER = void 0;
// General
const SELECT_LIST = 'app/List/SELECT_LIST';
exports.SELECT_LIST = SELECT_LIST;
const SET_CURRENT_PAGE = 'app/List/SET_CURRENT_PAGE';
exports.SET_CURRENT_PAGE = SET_CURRENT_PAGE;
const INITIAL_LIST_LOAD = 'app/List/INITIAL_LIST_LOAD'; // Items

exports.INITIAL_LIST_LOAD = INITIAL_LIST_LOAD;
const LOAD_ITEMS = 'app/List/LOAD_ITEMS';
exports.LOAD_ITEMS = LOAD_ITEMS;
const LOADING_ITEMS = 'app/List/LOADING_ITEMS';
exports.LOADING_ITEMS = LOADING_ITEMS;
const ITEMS_LOADED = 'app/List/ITEMS_LOADED';
exports.ITEMS_LOADED = ITEMS_LOADED;
const ITEM_LOADING_ERROR = 'app/List/ITEM_LOADING_ERROR'; // Active

exports.ITEM_LOADING_ERROR = ITEM_LOADING_ERROR;
const SELECT_ACTIVE_SORT = 'app/List/SELECT_ACTIVE_SORT';
exports.SELECT_ACTIVE_SORT = SELECT_ACTIVE_SORT;
const SELECT_ACTIVE_COLUMNS = 'app/List/SELECT_ACTIVE_COLUMNS';
exports.SELECT_ACTIVE_COLUMNS = SELECT_ACTIVE_COLUMNS;
const SELECT_FILTER = 'app/List/SELECT_FILTER';
exports.SELECT_FILTER = SELECT_FILTER;
const SET_ACTIVE_SEARCH = 'app/List/SET_ACTIVE_SEARCH';
exports.SET_ACTIVE_SEARCH = SET_ACTIVE_SEARCH;
const SET_ACTIVE_SORT = 'app/List/SET_ACTIVE_SORT';
exports.SET_ACTIVE_SORT = SET_ACTIVE_SORT;
const SET_ACTIVE_COLUMNS = 'app/List/SET_ACTIVE_COLUMNS';
exports.SET_ACTIVE_COLUMNS = SET_ACTIVE_COLUMNS;
const SET_ACTIVE_LIST = 'app/List/SET_ACTIVE_LIST'; // Query Params

exports.SET_ACTIVE_LIST = SET_ACTIVE_LIST;
const QUERY_HAS_CHANGED = 'app/List/QUERY_HAS_CHANGED';
exports.QUERY_HAS_CHANGED = QUERY_HAS_CHANGED;
const QUERY_HAS_NOT_CHANGED = 'app/List/QUERY_HAS_NOT_CHANGED';
exports.QUERY_HAS_NOT_CHANGED = QUERY_HAS_NOT_CHANGED;
const REPLACE_CACHED_QUERY = 'app/List/REPLACE_CACHED_QUERY';
exports.REPLACE_CACHED_QUERY = REPLACE_CACHED_QUERY;
const CLEAR_CACHED_QUERY = 'app/List/CLEAR_CACHED_QUERY'; // Filtering

exports.CLEAR_CACHED_QUERY = CLEAR_CACHED_QUERY;
const ADD_FILTER = 'app/List/ADD_FILTER';
exports.ADD_FILTER = ADD_FILTER;
const CLEAR_FILTER = 'app/List/CLEAR_FILTER';
exports.CLEAR_FILTER = CLEAR_FILTER;
const CLEAR_ALL_FILTERS = 'app/List/CLEAR_ALL_FILTERS';
exports.CLEAR_ALL_FILTERS = CLEAR_ALL_FILTERS;
const SET_FILTERS = 'app/List/SET_FILTERS'; // Drag

exports.SET_FILTERS = SET_FILTERS;
const SET_ROW_ALERT = 'app/List/SET_ROW_ALERT';
exports.SET_ROW_ALERT = SET_ROW_ALERT;
const RESET_DRAG_PAGE = 'app/List/RESET_DRAG_PAGE';
exports.RESET_DRAG_PAGE = RESET_DRAG_PAGE;
const RESET_DRAG_ITEMS = 'app/List/RESET_DRAG_ITEMS';
exports.RESET_DRAG_ITEMS = RESET_DRAG_ITEMS;
const SET_DRAG_ITEM = 'app/List/SET_DRAG_ITEM';
exports.SET_DRAG_ITEM = SET_DRAG_ITEM;
const SET_DRAG_INDEX = 'app/List/SET_DRAG_INDEX';
exports.SET_DRAG_INDEX = SET_DRAG_INDEX;
const DRAG_MOVE_ITEM = 'app/List/DRAG_MOVE_ITEM';
exports.DRAG_MOVE_ITEM = DRAG_MOVE_ITEM;

},{}],435:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _numeral = _interopRequireDefault(require("numeral"));

var _reactRedux = require("react-redux");

var _elemental = require("../../elemental");

var _ListFilters = _interopRequireDefault(require("./components/Filtering/ListFilters"));

var _ListHeaderTitle = _interopRequireDefault(require("./components/ListHeaderTitle"));

var _ListHeaderToolbar = _interopRequireDefault(require("./components/ListHeaderToolbar"));

var _ListManagement = _interopRequireDefault(require("./components/ListManagement"));

var _ConfirmationDialog = _interopRequireDefault(require("../../shared/ConfirmationDialog"));

var _CreateForm = _interopRequireDefault(require("../../shared/CreateForm"));

var _FlashMessages = _interopRequireDefault(require("../../shared/FlashMessages"));

var _ItemsTable = _interopRequireDefault(require("./components/ItemsTable/ItemsTable"));

var _UpdateForm = _interopRequireDefault(require("./components/UpdateForm"));

var _string = require("../../../utils/string");

var _lists = require("../../../utils/lists");

var _queryParams = require("../../../utils/queryParams");

var _actions = require("./actions");

var _actions2 = require("../Item/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The list view is a paginated table of all items in the list. It can show a
 * variety of information about the individual items in columns.
 */
// import { findDOMNode } from 'react-dom'; // TODO re-implement focus when ready
const ESC_KEY_CODE = 27;

const ListView = _react.default.createClass({
  displayName: "ListView",
  contextTypes: {
    router: _react.default.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      confirmationDialog: {
        isOpen: false
      },
      checkedItems: {},
      constrainTableWidth: true,
      manageMode: false,
      showCreateForm: false,
      showUpdateForm: false
    };
  },

  componentWillMount() {
    // When we directly navigate to a list without coming from another client
    // side routed page before, we need to initialize the list and parse
    // possibly specified query parameters
    this.props.dispatch((0, _actions.selectList)(this.props.params.listId));
    const isNoCreate = this.props.lists.data[this.props.params.listId].nocreate;
    const shouldOpenCreate = this.props.location.search === '?create';
    this.setState({
      showCreateForm: shouldOpenCreate && !isNoCreate || Keystone.createFormErrors
    });
  },

  componentWillReceiveProps(nextProps) {
    // We've opened a new list from the client side routing, so initialize
    // again with the new list id
    const isReady = this.props.lists.ready && nextProps.lists.ready;

    if (isReady && (0, _queryParams.checkForQueryChange)(nextProps, this.props)) {
      this.props.dispatch((0, _actions.selectList)(nextProps.params.listId));
    }
  },

  componentWillUnmount() {
    this.props.dispatch((0, _actions.clearCachedQuery)());
  },

  // ==============================
  // HEADER
  // ==============================
  // Called when a new item is created
  onCreate(item) {
    // Hide the create form
    this.toggleCreateModal(false); // Redirect to newly created item path

    const list = this.props.currentList;
    this.context.router.push(`${Keystone.adminPath}/${list.path}/${item.id}`);
  },

  createAutocreate() {
    const list = this.props.currentList;
    list.createItem(null, (err, data) => {
      if (err) {
        // TODO Proper error handling
        alert('Something went wrong, please try again!');
        console.log(err);
      } else {
        this.context.router.push(`${Keystone.adminPath}/${list.path}/${data.id}`);
      }
    });
  },

  updateSearch(e) {
    this.props.dispatch((0, _actions.setActiveSearch)(e.target.value));
  },

  handleSearchClear() {
    this.props.dispatch((0, _actions.setActiveSearch)('')); // TODO re-implement focus when ready
    // findDOMNode(this.refs.listSearchInput).focus();
  },

  handleSearchKey(e) {
    // clear on esc
    if (e.which === ESC_KEY_CODE) {
      this.handleSearchClear();
    }
  },

  handlePageSelect(i) {
    // If the current page index is the same as the index we are intending to pass to redux, bail out.
    if (i === this.props.lists.page.index) return;
    return this.props.dispatch((0, _actions.setCurrentPage)(i));
  },

  toggleManageMode() {
    let filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.state.manageMode;
    this.setState({
      manageMode: filter,
      checkedItems: {}
    });
  },

  toggleUpdateModal() {
    let filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.state.showUpdateForm;
    this.setState({
      showUpdateForm: filter
    });
  },

  massUpdate() {
    // TODO: Implement update multi-item
    console.log('Update ALL the things!');
  },

  massDelete() {
    const {
      checkedItems
    } = this.state;
    const list = this.props.currentList;
    const itemCount = (0, _string.plural)(checkedItems, '* ' + list.singular.toLowerCase(), '* ' + list.plural.toLowerCase());
    const itemIds = Object.keys(checkedItems);
    this.setState({
      confirmationDialog: {
        isOpen: true,
        label: 'Delete',
        body: /*#__PURE__*/_react.default.createElement("div", null, "Are you sure you want to delete ", itemCount, "?", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "This cannot be undone."),
        onConfirmation: () => {
          this.props.dispatch((0, _actions.deleteItems)(itemIds));
          this.toggleManageMode();
          this.removeConfirmationDialog();
        }
      }
    });
  },

  handleManagementSelect(selection) {
    if (selection === 'all') this.checkAllItems();
    if (selection === 'none') this.uncheckAllTableItems();
    if (selection === 'visible') this.checkAllTableItems();
    return false;
  },

  renderConfirmationDialog() {
    const props = this.state.confirmationDialog;
    return /*#__PURE__*/_react.default.createElement(_ConfirmationDialog.default, {
      confirmationLabel: props.label,
      isOpen: props.isOpen,
      onCancel: this.removeConfirmationDialog,
      onConfirmation: props.onConfirmation
    }, props.body);
  },

  renderManagement() {
    const {
      checkedItems,
      manageMode,
      selectAllItemsLoading
    } = this.state;
    const {
      currentList
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_ListManagement.default, {
      checkedItemCount: Object.keys(checkedItems).length,
      handleDelete: this.massDelete,
      handleSelect: this.handleManagementSelect,
      handleToggle: () => this.toggleManageMode(!manageMode),
      isOpen: manageMode,
      itemCount: this.props.items.count,
      itemsPerPage: this.props.lists.page.size,
      nodelete: currentList.nodelete,
      noedit: currentList.noedit,
      selectAllItemsLoading: selectAllItemsLoading
    });
  },

  renderPagination() {
    const items = this.props.items;
    if (this.state.manageMode || !items.count) return;
    const list = this.props.currentList;
    const currentPage = this.props.lists.page.index;
    const pageSize = this.props.lists.page.size;
    return /*#__PURE__*/_react.default.createElement(_elemental.Pagination, {
      currentPage: currentPage,
      onPageSelect: this.handlePageSelect,
      pageSize: pageSize,
      plural: list.plural,
      singular: list.singular,
      style: {
        marginBottom: 0
      },
      total: items.count,
      limit: 10
    });
  },

  renderHeader() {
    const items = this.props.items;
    const {
      autocreate,
      nocreate,
      plural,
      singular
    } = this.props.currentList;
    return /*#__PURE__*/_react.default.createElement(_elemental.Container, {
      style: {
        paddingTop: '2em'
      }
    }, /*#__PURE__*/_react.default.createElement(_ListHeaderTitle.default, {
      activeSort: this.props.active.sort,
      availableColumns: this.props.currentList.columns,
      handleSortSelect: this.handleSortSelect,
      title: `
						${(0, _numeral.default)(items.count).format()}
						${(0, _string.plural)(items.count, ' ' + singular, ' ' + plural)}
					`
    }), /*#__PURE__*/_react.default.createElement(_ListHeaderToolbar.default // common
    , {
      dispatch: this.props.dispatch,
      list: _lists.listsByPath[this.props.params.listId] // expand
      ,
      expandIsActive: !this.state.constrainTableWidth,
      expandOnClick: this.toggleTableWidth // create
      ,
      createIsAvailable: !nocreate,
      createListName: singular,
      createOnClick: autocreate ? this.createAutocreate : this.openCreateModal // search
      ,
      searchHandleChange: this.updateSearch,
      searchHandleClear: this.handleSearchClear,
      searchHandleKeyup: this.handleSearchKey,
      searchValue: this.props.active.search // filters
      ,
      filtersActive: this.props.active.filters,
      filtersAvailable: this.props.currentList.columns.filter(col => col.field && col.field.hasFilterMethod || col.type === 'heading') // columns
      ,
      columnsActive: this.props.active.columns,
      columnsAvailable: this.props.currentList.columns
    }), /*#__PURE__*/_react.default.createElement(_ListFilters.default, {
      dispatch: this.props.dispatch,
      filters: this.props.active.filters
    }));
  },

  // ==============================
  // TABLE
  // ==============================
  checkTableItem(item, e) {
    e.preventDefault();
    const newCheckedItems = { ...this.state.checkedItems
    };
    const itemId = item.id;

    if (this.state.checkedItems[itemId]) {
      delete newCheckedItems[itemId];
    } else {
      newCheckedItems[itemId] = true;
    }

    this.setState({
      checkedItems: newCheckedItems
    });
  },

  checkAllTableItems() {
    const checkedItems = {};
    this.props.items.results.forEach(item => {
      checkedItems[item.id] = true;
    });
    this.setState({
      checkedItems: checkedItems
    });
  },

  checkAllItems() {
    const checkedItems = { ...this.state.checkedItems
    }; // Just in case this API call takes a long time, we'll update the select all button with
    // a spinner.

    this.setState({
      selectAllItemsLoading: true
    });
    var self = this;
    this.props.currentList.loadItems({
      expandRelationshipFilters: false,
      filters: {}
    }, function (err, data) {
      data.results.forEach(item => {
        checkedItems[item.id] = true;
      });
      self.setState({
        checkedItems: checkedItems,
        selectAllItemsLoading: false
      });
    });
  },

  uncheckAllTableItems() {
    this.setState({
      checkedItems: {}
    });
  },

  deleteTableItem(item, e) {
    if (e.altKey) {
      this.props.dispatch((0, _actions2.deleteItem)(item.id));
      return;
    }

    e.preventDefault();
    this.setState({
      confirmationDialog: {
        isOpen: true,
        label: 'Delete',
        body: /*#__PURE__*/_react.default.createElement("div", null, "Are you sure you want to delete ", /*#__PURE__*/_react.default.createElement("strong", null, item.name), "?", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "This cannot be undone."),
        onConfirmation: () => {
          this.props.dispatch((0, _actions2.deleteItem)(item.id));
          this.removeConfirmationDialog();
        }
      }
    });
  },

  removeConfirmationDialog() {
    this.setState({
      confirmationDialog: {
        isOpen: false
      }
    });
  },

  toggleTableWidth() {
    this.setState({
      constrainTableWidth: !this.state.constrainTableWidth
    });
  },

  // ==============================
  // COMMON
  // ==============================
  handleSortSelect(path, inverted) {
    if (inverted) path = '-' + path;
    this.props.dispatch((0, _actions.setActiveSort)(path));
  },

  toggleCreateModal(visible) {
    this.setState({
      showCreateForm: visible
    });
  },

  openCreateModal() {
    this.toggleCreateModal(true);
  },

  closeCreateModal() {
    this.toggleCreateModal(false);
  },

  showBlankState() {
    return !this.props.loading && !this.props.items.results.length && !this.props.active.search && !this.props.active.filters.length;
  },

  renderBlankState() {
    const {
      currentList
    } = this.props;
    if (!this.showBlankState()) return null; // create and nav directly to the item view, or open the create modal

    const onClick = currentList.autocreate ? this.createAutocreate : this.openCreateModal; // display the button if create allowed

    const button = !currentList.nocreate ? /*#__PURE__*/_react.default.createElement(_elemental.GlyphButton, {
      color: "success",
      glyph: "plus",
      position: "left",
      onClick: onClick,
      "data-e2e-list-create-button": "no-results"
    }, "Create ", currentList.singular) : null;
    return /*#__PURE__*/_react.default.createElement(_elemental.Container, null, this.props.error ? /*#__PURE__*/_react.default.createElement(_FlashMessages.default, {
      messages: {
        error: [{
          title: "There is a problem with the network, we're trying to reconnect..."
        }]
      }
    }) : null, /*#__PURE__*/_react.default.createElement(_elemental.BlankState, {
      heading: `No ${this.props.currentList.plural.toLowerCase()} found...`,
      style: {
        marginTop: 40
      }
    }, button));
  },

  renderActiveState() {
    if (this.showBlankState()) return null;
    const containerStyle = {
      transition: 'max-width 160ms ease-out',
      msTransition: 'max-width 160ms ease-out',
      MozTransition: 'max-width 160ms ease-out',
      WebkitTransition: 'max-width 160ms ease-out'
    };

    if (!this.state.constrainTableWidth) {
      containerStyle.maxWidth = '100%';
    }

    return /*#__PURE__*/_react.default.createElement("div", null, this.renderHeader(), /*#__PURE__*/_react.default.createElement(_elemental.Container, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: 35,
        marginBottom: '1em',
        marginTop: '1em'
      }
    }, this.renderManagement(), this.renderPagination(), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        clear: 'both',
        display: 'table'
      }
    }))), /*#__PURE__*/_react.default.createElement(_elemental.Container, {
      style: containerStyle
    }, this.props.error ? /*#__PURE__*/_react.default.createElement(_FlashMessages.default, {
      messages: {
        error: [{
          title: "There is a problem with the network, we're trying to reconnect.."
        }]
      }
    }) : null, this.props.loading ? /*#__PURE__*/_react.default.createElement(_elemental.Center, {
      height: "50vh"
    }, /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null)) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ItemsTable.default, {
      activeSort: this.props.active.sort,
      checkedItems: this.state.checkedItems,
      checkTableItem: this.checkTableItem,
      columns: this.props.active.columns,
      deleteTableItem: this.deleteTableItem,
      handleSortSelect: this.handleSortSelect,
      items: this.props.items,
      list: this.props.currentList,
      manageMode: this.state.manageMode,
      rowAlert: this.props.rowAlert,
      currentPage: this.props.lists.page.index,
      pageSize: this.props.lists.page.size,
      drag: this.props.lists.drag,
      dispatch: this.props.dispatch
    }), this.renderNoSearchResults())));
  },

  renderNoSearchResults() {
    if (this.props.items.results.length) return null;
    let matching = this.props.active.search;

    if (this.props.active.filters.length) {
      matching += (matching ? ' and ' : '') + (0, _string.plural)(this.props.active.filters.length, '* filter', '* filters');
    }

    matching = matching ? ' found matching ' + matching : '.';
    return /*#__PURE__*/_react.default.createElement(_elemental.BlankState, {
      style: {
        marginTop: 20,
        marginBottom: 20
      }
    }, /*#__PURE__*/_react.default.createElement(_elemental.Glyph, {
      name: "search",
      size: "medium",
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/_react.default.createElement("h2", {
      style: {
        color: 'inherit'
      }
    }, "No ", this.props.currentList.plural.toLowerCase(), matching));
  },

  render() {
    if (!this.props.ready) {
      return /*#__PURE__*/_react.default.createElement(_elemental.Center, {
        height: "50vh",
        "data-screen-id": "list"
      }, /*#__PURE__*/_react.default.createElement(_elemental.Spinner, null));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      "data-screen-id": "list"
    }, this.renderBlankState(), this.renderActiveState(), /*#__PURE__*/_react.default.createElement(_CreateForm.default, {
      err: Keystone.createFormErrors,
      isOpen: this.state.showCreateForm,
      list: this.props.currentList,
      onCancel: this.closeCreateModal,
      onCreate: this.onCreate
    }), /*#__PURE__*/_react.default.createElement(_UpdateForm.default, {
      isOpen: this.state.showUpdateForm,
      itemIds: Object.keys(this.state.checkedItems),
      list: this.props.currentList,
      onCancel: () => this.toggleUpdateModal(false)
    }), this.renderConfirmationDialog());
  }

});

module.exports = (0, _reactRedux.connect)(state => {
  return {
    lists: state.lists,
    loading: state.lists.loading,
    error: state.lists.error,
    currentList: state.lists.currentList,
    items: state.lists.items,
    page: state.lists.page,
    ready: state.lists.ready,
    rowAlert: state.lists.rowAlert,
    active: state.active
  };
})(ListView);

},{"../../../utils/lists":461,"../../../utils/queryParams":462,"../../../utils/string":463,"../../elemental":379,"../../shared/ConfirmationDialog":439,"../../shared/CreateForm":440,"../../shared/FlashMessages":442,"../Item/actions":393,"./actions":412,"./components/Filtering/ListFilters":415,"./components/ItemsTable/ItemsTable":419,"./components/ListHeaderTitle":429,"./components/ListHeaderToolbar":430,"./components/ListManagement":431,"./components/UpdateForm":433,"numeral":undefined,"react":undefined,"react-redux":undefined}],436:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {
  columns: [],
  filters: [],
  search: '',
  sort: {
    input: '',
    isDefaultSort: false,
    paths: [],
    rawInput: ''
  },
  cachedQuery: {}
};
/**
 * Manage the active state
 */

function active() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_ACTIVE_LIST:
      return (0, _objectAssign.default)({}, state, {
        id: action.id,
        columns: action.list.expandColumns(action.list.defaultColumns),
        filters: [],
        search: '',
        sort: action.list.expandSort(action.list.defaultSort)
      });

    case _constants.SET_ACTIVE_SEARCH:
      return (0, _objectAssign.default)({}, state, {
        search: action.searchString
      });

    case _constants.SET_ACTIVE_SORT:
      return (0, _objectAssign.default)({}, state, {
        sort: action.sort
      });

    case _constants.SET_ACTIVE_COLUMNS:
      return (0, _objectAssign.default)({}, state, {
        columns: action.columns
      });

    case _constants.ADD_FILTER:
      return (0, _objectAssign.default)({}, state, {
        // Override existing filter with field path,
        // otherwise add to filters array
        filters: _lodash.default.unionWith([action.filter], state.filters, (stateFilter, actionFilter) => {
          return stateFilter.field.path === actionFilter.field.path;
        })
      });

    case _constants.SET_FILTERS:
      return (0, _objectAssign.default)({}, state, {
        filters: action.filters
      });

    case _constants.CLEAR_FILTER:
      let newFilters = _lodash.default.filter(state.filters, filter => {
        return filter.field.path !== action.path;
      });

      return (0, _objectAssign.default)({}, state, {
        filters: newFilters
      });

    case _constants.CLEAR_ALL_FILTERS:
      return (0, _objectAssign.default)({}, state, {
        filters: []
      });

    case _constants.QUERY_HAS_CHANGED:
      const {
        search,
        sort,
        filters,
        columns
      } = action.parsedQuery;
      return (0, _objectAssign.default)({}, state, {
        search,
        sort: sort || initialState.sort,
        filters: filters || initialState.filters,
        columns: columns || initialState.columns
      });

    case _constants.REPLACE_CACHED_QUERY:
      return (0, _objectAssign.default)({}, state, {
        cachedQuery: action.cachedQuery
      });

    case _constants.CLEAR_CACHED_QUERY:
      return (0, _objectAssign.default)({}, state, {
        cachedQuery: {}
      });

    default:
      return state;
  }
}

var _default = active;
exports.default = _default;

},{"../constants":434,"lodash":undefined,"object-assign":556}],437:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _List = _interopRequireDefault(require("../../../../utils/List"));

var _constants = require("../constants");

var _constants2 = require("../../Item/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {
  loadingRef: null,
  loadCounter: 0,
  currentList: null,
  loading: false,
  ready: false,
  error: null,
  data: {},
  items: {
    results: [],
    count: null
  },
  page: {
    size: null,
    index: undefined
  },
  rowAlert: {
    success: false,
    fail: false
  },
  drag: {
    page: 1,
    item: false,
    clonedItems: false,
    index: false
  }
}; // Rekey the lists in the state with their paths for easier matching with the
// URL parameters

const initialLists = Keystone.lists;

for (const name in initialLists) {
  if ({}.hasOwnProperty.call(initialLists, name)) {
    const currentList = initialLists[name];
    initialState.data[currentList.path] = new _List.default(currentList);
    initialState.data[currentList.path].items = {
      results: [],
      count: null
    };
  }
}
/**
 * Manage all lists
 */


function lists() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SELECT_LIST:
      const list = state.data[action.id];
      list.id = action.id;
      let items = {
        results: [],
        count: null
      }; // If we have cached items, instead of resetting state.items put the
      // cached items in the state

      if (list.items.count !== null) {
        items = list.items;
      }

      return (0, _objectAssign.default)({}, state, {
        currentList: list,
        ready: false,
        items: items,
        page: { ...state.page,
          index: 1,
          size: list.perPage
        }
      });

    case _constants.LOAD_ITEMS:
      let loading = true;
      let ready = state.ready; // If we have cached items ready, don't show a loading indicator
      // while we fetch the new items in the background

      if (state.items.count !== null && loading === false) {
        loading = false;
        ready = true;
      }

      return (0, _objectAssign.default)({}, state, {
        loading,
        ready,
        loadCounter: action.loadCounter
      });

    case _constants.ITEMS_LOADED:
      // Cache the items in state.data so we can show the already existing
      // items on the next round trip while fetching the new items in the
      // background
      const cachedList = state.data[state.currentList.id];
      cachedList.items = action.items;
      return (0, _objectAssign.default)({}, state, {
        loading: false,
        ready: true,
        error: null,
        items: action.items,
        data: { ...state.data,
          [state.currentList.id]: cachedList
        },
        loadCounter: 0
      });

    case _constants.ITEM_LOADING_ERROR:
      return (0, _objectAssign.default)({}, state, {
        loading: true,
        ready: true,
        error: action.err,
        loadCounter: 0
      });

    case _constants2.DELETE_ITEM:
      const newItems = {
        results: state.items.results.filter(el => el.id !== action.id),
        count: state.items.count - 1
      };
      const newCachedList = state.data[state.currentList.id];
      newCachedList.items = newItems;
      return (0, _objectAssign.default)({}, state, {
        items: newItems,
        data: { ...state.data,
          [state.currentList.id]: newCachedList
        }
      });

    case _constants.SET_CURRENT_PAGE:
      console.log(action.index);
      return (0, _objectAssign.default)({}, state, {
        loading: true,
        page: { ...state.page,
          index: action.index
        }
      });

    case _constants.SET_ROW_ALERT:
      if (action.data.reset === true) {
        return (0, _objectAssign.default)({}, state, {
          rowAlert: {
            success: false,
            fail: false
          }
        });
      }

      return (0, _objectAssign.default)({}, state, {
        rowAlert: { ...state.rowAlert,
          ...action.data
        }
      });

    case _constants.RESET_DRAG_PAGE:
      return (0, _objectAssign.default)({}, state, {
        drag: { ...state.drag,
          page: state.page.index
        }
      });

    case _constants.RESET_DRAG_ITEMS:
      return (0, _objectAssign.default)({}, state, {
        drag: { ...state.drag,
          clonedItems: state.items
        }
      });

    case _constants.SET_DRAG_ITEM:
      return (0, _objectAssign.default)({}, state, {
        drag: { ...state.drag,
          item: action.item
        }
      });

    case _constants.SET_DRAG_INDEX:
      return (0, _objectAssign.default)({}, state, {
        drag: { ...state.drag,
          index: action.index
        }
      });

    case _constants.QUERY_HAS_CHANGED:
      const index = parseInt(action.parsedQuery.currentPage) || 1;
      return (0, _objectAssign.default)({}, state, {
        loading: true,
        page: { ...state.page,
          index
        }
      });

    case _constants.DRAG_MOVE_ITEM:
      // TODO: option to use manageMode for sortOrder
      const currentItems = state.items.results;
      const item = currentItems[action.prevIndex]; // Remove item at prevIndex from array and save that array in
      // itemsWithoutItem

      let itemsWithoutItem = currentItems.slice(0, action.prevIndex).concat(currentItems.slice(action.prevIndex + 1, currentItems.length)); // Add item back in at new index

      itemsWithoutItem.splice(action.newIndex, 0, item);
      return (0, _objectAssign.default)({}, state, {
        items: { ...state.items,
          results: itemsWithoutItem
        }
      });

    default:
      return state;
  }
}

var _default = lists;
exports.default = _default;

},{"../../../../utils/List":457,"../../Item/constants":407,"../constants":434,"object-assign":556}],438:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../elemental");

var _string = require("../../utils/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This renders alerts for API success and error responses.
 *   Error format: {
 *     error: 'validation errors' // The unique error type identifier
 *     detail: { ... } // Optional details specific to that error type
 *   }
 *   Success format: {
 *     success: 'item updated', // The unique success type identifier
 *     details: { ... } // Optional details specific to that success type
 *   }
 *   Eventually success and error responses should be handled individually
 *   based on their type. For example: validation errors should be displayed next
 *   to each invalid field and signin errors should promt the user to sign in.
 */
var AlertMessages = _react.default.createClass({
  displayName: 'AlertMessages',
  propTypes: {
    alerts: _react.default.PropTypes.shape({
      error: _react.default.PropTypes.Object,
      success: _react.default.PropTypes.Object
    })
  },

  getDefaultProps() {
    return {
      alerts: {}
    };
  },

  renderValidationErrors() {
    let errors = this.props.alerts.error.detail;

    if (errors.name === 'ValidationError') {
      errors = errors.errors;
    }

    let errorCount = Object.keys(errors).length;
    let alertContent;
    let messages = Object.keys(errors).map(path => {
      if (errorCount > 1) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: path
        }, (0, _string.upcase)(errors[path].error || errors[path].message));
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: path
        }, (0, _string.upcase)(errors[path].error || errors[path].message));
      }
    });

    if (errorCount > 1) {
      alertContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "There were ", errorCount, " errors creating the new item:"), /*#__PURE__*/_react.default.createElement("ul", null, messages));
    } else {
      alertContent = messages;
    }

    return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
      color: "danger"
    }, alertContent);
  },

  render() {
    let {
      error,
      success
    } = this.props.alerts;

    if (error) {
      // Render error alerts
      switch (error.error) {
        case 'validation errors':
          return this.renderValidationErrors();

        case 'error':
          if (error.detail.name === 'ValidationError') {
            return this.renderValidationErrors();
          } else {
            return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
              color: "danger"
            }, (0, _string.upcase)(error.error));
          }

        default:
          return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
            color: "danger"
          }, (0, _string.upcase)(error.error));
      }
    }

    if (success) {
      // Render success alerts
      return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
        color: "success"
      }, (0, _string.upcase)(success.success));
    }

    return null; // No alerts, render nothing
  }

});

module.exports = AlertMessages;

},{"../../utils/string":463,"../elemental":379,"react":undefined}],439:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ConfirmationDialog(_ref) {
  let {
    cancelLabel,
    children,
    confirmationLabel,
    confirmationType,
    html,
    isOpen,
    onCancel,
    onConfirmation,
    ...props
  } = _ref;

  // Property Violation
  if (children && html) {
    console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
  }

  return /*#__PURE__*/_react.default.createElement(_elemental.Modal.Dialog, {
    backdropClosesModal: true,
    isOpen: isOpen,
    onClose: onCancel,
    width: 400
  }, html ? /*#__PURE__*/_react.default.createElement(_elemental.Modal.Body, _extends({}, props, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })) : /*#__PURE__*/_react.default.createElement(_elemental.Modal.Body, props, children), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    autoFocus: true,
    size: "small",
    "data-button-type": "confirm",
    color: confirmationType,
    onClick: onConfirmation
  }, confirmationLabel), /*#__PURE__*/_react.default.createElement(_elemental.Button, {
    size: "small",
    "data-button-type": "cancel",
    variant: "link",
    color: "cancel",
    onClick: onCancel
  }, cancelLabel)));
}

;
ConfirmationDialog.propTypes = {
  body: _react.PropTypes.string,
  cancelLabel: _react.PropTypes.string,
  confirmationLabel: _react.PropTypes.string,
  confirmationType: _react.PropTypes.oneOf(['danger', 'primary', 'success', 'warning']),
  onCancel: _react.PropTypes.func,
  onConfirmation: _react.PropTypes.func
};
ConfirmationDialog.defaultProps = {
  cancelLabel: 'Cancel',
  confirmationLabel: 'Okay',
  confirmationType: 'danger',
  isOpen: false
};
var _default = ConfirmationDialog;
exports.default = _default;

},{"../elemental":379,"react":undefined}],440:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _vkey = _interopRequireDefault(require("vkey"));

var _AlertMessages = _interopRequireDefault(require("./AlertMessages"));

var _FieldTypes = require("FieldTypes");

var _InvalidFieldType = _interopRequireDefault(require("./InvalidFieldType"));

var _elemental = require("../elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The form that's visible when "Create <ItemName>" is clicked on either the
 * List screen or the Item screen
 */
const CreateForm = _react.default.createClass({
  displayName: 'CreateForm',
  propTypes: {
    err: _react.default.PropTypes.object,
    isOpen: _react.default.PropTypes.bool,
    list: _react.default.PropTypes.object,
    onCancel: _react.default.PropTypes.func,
    onCreate: _react.default.PropTypes.func
  },

  getDefaultProps() {
    return {
      err: null,
      isOpen: false
    };
  },

  getInitialState() {
    // Set the field values to their default values when first rendering the
    // form. (If they have a default value, that is)
    var values = {};
    Object.keys(this.props.list.fields).forEach(key => {
      var field = this.props.list.fields[key];
      var FieldComponent = _FieldTypes.Fields[field.type];
      values[field.path] = FieldComponent.getDefaultValue(field);
    });
    return {
      values: values,
      alerts: {}
    };
  },

  componentDidMount() {
    document.body.addEventListener('keyup', this.handleKeyPress, false);
  },

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.handleKeyPress, false);
  },

  handleKeyPress(evt) {
    if (_vkey.default[evt.keyCode] === '<escape>') {
      this.props.onCancel();
    }
  },

  // Handle input change events
  handleChange(event) {
    var values = (0, _objectAssign.default)({}, this.state.values);
    values[event.path] = event.value;
    this.setState({
      values: values
    });
  },

  // Set the props of a field
  getFieldProps(field) {
    var props = (0, _objectAssign.default)({}, field);
    props.value = this.state.values[field.path];
    props.values = this.state.values;
    props.onChange = this.handleChange;
    props.mode = 'create';
    props.key = field.path;
    return props;
  },

  // Create a new item when the form is submitted
  submitForm(event) {
    event.preventDefault();
    const createForm = event.target;
    const formData = new FormData(createForm);
    this.props.list.createItem(formData, (err, data) => {
      if (data) {
        if (this.props.onCreate) {
          this.props.onCreate(data);
        } else {
          // Clear form
          this.setState({
            values: {},
            alerts: {
              success: {
                success: 'Item created'
              }
            }
          });
        }
      } else {
        if (!err) {
          err = {
            error: 'connection error'
          };
        } // If we get a database error, show the database error message
        // instead of only saying "Database error"


        if (err.error === 'database error') {
          err.error = err.detail.errmsg;
        }

        this.setState({
          alerts: {
            error: err
          }
        });
      }
    });
  },

  // Render the form itself
  renderForm() {
    if (!this.props.isOpen) return;
    var form = [];
    var list = this.props.list;
    var nameField = this.props.list.nameField;
    var focusWasSet; // If the name field is an initial one, we need to render a proper
    // input for it

    if (list.nameIsInitial) {
      var nameFieldProps = this.getFieldProps(nameField);
      nameFieldProps.autoFocus = focusWasSet = true;

      if (nameField.type === 'text') {
        nameFieldProps.className = 'item-name-field';
        nameFieldProps.placeholder = nameField.label;
        nameFieldProps.label = '';
      }

      form.push( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[nameField.type], nameFieldProps));
    } // Render inputs for all initial fields


    Object.keys(list.initialFields).forEach(key => {
      var field = list.fields[list.initialFields[key]]; // If there's something weird passed in as field type, render the
      // invalid field type component

      if (typeof _FieldTypes.Fields[field.type] !== 'function') {
        form.push( /*#__PURE__*/_react.default.createElement(_InvalidFieldType.default, {
          type: field.type,
          path: field.path,
          key: field.path
        }));
        return;
      } // Get the props for the input field


      var fieldProps = this.getFieldProps(field); // If there was no focusRef set previously, set the current field to
      // be the one to be focussed. Generally the first input field, if
      // there's an initial name field that takes precedence.

      if (!focusWasSet) {
        fieldProps.autoFocus = focusWasSet = true;
      }

      form.push( /*#__PURE__*/_react.default.createElement(_FieldTypes.Fields[field.type], fieldProps));
    });
    return /*#__PURE__*/_react.default.createElement(_elemental.Form, {
      layout: "horizontal",
      onSubmit: this.submitForm
    }, /*#__PURE__*/_react.default.createElement(_elemental.Modal.Header, {
      text: 'Create a new ' + list.singular,
      showCloseButton: true
    }), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Body, null, /*#__PURE__*/_react.default.createElement(_AlertMessages.default, {
      alerts: this.state.alerts
    }), form), /*#__PURE__*/_react.default.createElement(_elemental.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      color: "success",
      type: "submit",
      "data-button-type": "submit"
    }, "Create"), /*#__PURE__*/_react.default.createElement(_elemental.Button, {
      variant: "link",
      color: "cancel",
      "data-button-type": "cancel",
      onClick: this.props.onCancel
    }, "Cancel")));
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_elemental.Modal.Dialog, {
      isOpen: this.props.isOpen,
      onClose: this.props.onCancel,
      backdropClosesModal: true
    }, this.renderForm());
  }

});

module.exports = CreateForm;

},{"../elemental":379,"./AlertMessages":438,"./InvalidFieldType":443,"FieldTypes":undefined,"object-assign":556,"react":undefined,"vkey":undefined}],441:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../elemental");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A single flash message component. Used by FlashMessages.js
 */
const FlashMessage = _react.default.createClass({
  displayName: "FlashMessage",
  propTypes: {
    message: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,
    type: _react.PropTypes.string
  },

  // Render the message
  renderMessage(message) {
    // If the message is only a string, render the string
    if (typeof message === 'string') {
      return /*#__PURE__*/_react.default.createElement("span", null, message);
    } // Get the title and the detail of the message


    const title = message.title ? /*#__PURE__*/_react.default.createElement("h4", null, message.title) : null;
    const detail = message.detail ? /*#__PURE__*/_react.default.createElement("p", null, message.detail) : null; // If the message has a list attached, render a <ul>

    const list = message.list ? /*#__PURE__*/_react.default.createElement("ul", {
      style: {
        marginBottom: 0
      }
    }, message.list.map((item, i) => /*#__PURE__*/_react.default.createElement("li", {
      key: `i${i}`
    }, item))) : null;
    return /*#__PURE__*/_react.default.createElement("span", null, title, detail, list);
  },

  render() {
    const {
      message,
      type
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_elemental.Alert, {
      color: type
    }, this.renderMessage(message));
  }

});

module.exports = FlashMessage;

},{"../elemental":379,"react":undefined}],442:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _FlashMessage = _interopRequireDefault(require("./FlashMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a few flash messages, e.g. errors, success messages, warnings,...
 *
 * Use like this:
 * <FlashMessages
 *   messages={{
 *	   error: [{
 *	     title: 'There is a network problem',
 *	     detail: 'Please try again later...',
 *	   }],
 *   }}
 * />
 *
 * Instead of error, it can also be hilight, info, success or warning
 */
var FlashMessages = _react.default.createClass({
  displayName: 'FlashMessages',
  propTypes: {
    messages: _react.default.PropTypes.oneOfType([_react.default.PropTypes.bool, _react.default.PropTypes.shape({
      error: _react.default.PropTypes.array,
      hilight: _react.default.PropTypes.array,
      info: _react.default.PropTypes.array,
      success: _react.default.PropTypes.array,
      warning: _react.default.PropTypes.array
    })])
  },

  // Render messages by their type
  renderMessages(messages, type) {
    if (!messages || !messages.length) return null;
    return messages.map((message, i) => {
      return /*#__PURE__*/_react.default.createElement(_FlashMessage.default, {
        message: message,
        type: type,
        key: `i${i}`
      });
    });
  },

  // Render the individual messages based on their type
  renderTypes(types) {
    return Object.keys(types).map(type => this.renderMessages(types[type], type));
  },

  render() {
    if (!this.props.messages) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flash-messages"
    }, _lodash.default.isPlainObject(this.props.messages) && this.renderTypes(this.props.messages));
  }

});

module.exports = FlashMessages;

},{"./FlashMessage":441,"lodash":undefined,"react":undefined}],443:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an "Invalid Field Type" error
 */
const InvalidFieldType = function (props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, "Invalid field type ", /*#__PURE__*/_react.default.createElement("strong", null, props.type), " at path ", /*#__PURE__*/_react.default.createElement("strong", null, props.path));
};

InvalidFieldType.propTypes = {
  path: _react.default.PropTypes.string,
  type: _react.default.PropTypes.string
};
module.exports = InvalidFieldType;

},{"react":undefined}],444:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../theme"));

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Kbd(_ref) {
  let {
    className,
    ...props
  } = _ref;
  props.className = (0, _glamor.css)(classes.kbd);
  return /*#__PURE__*/_react.default.createElement("kbd", props);
}

;
const classes = {
  kbd: {
    backgroundColor: _theme.default.color.body,
    borderRadius: 3,
    border: `1px solid #ccc`,
    borderBottomColor: (0, _color.darken)('#ccc', 4),
    borderTopColor: (0, _color.lighten)('#ccc', 4),
    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset`,
    display: 'inline-block',
    fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
    fontSize: '0.85em',
    fontWeight: 700,
    lineHeight: 'inherit',
    padding: '1px 4px',
    whiteSpace: 'nowrap',
    // little hack to tweak "visual-middle" alignment
    position: 'relative',
    top: -1
  }
};
module.exports = Kbd;

},{"../../theme":456,"../../utils/color":458,"glamor":undefined,"react":undefined}],445:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutBody = _react.default.createClass({
  displayName: 'PopoutBody',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    scrollable: _react.default.PropTypes.bool
  },

  render() {
    const className = (0, _classnames.default)('Popout__body', {
      'Popout__scrollable-area': this.props.scrollable
    }, this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className', 'scrollable');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutBody;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],446:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a footer for a popout
 */
const BUTTON_BASE_CLASSNAME = 'Popout__footer__button Popout__footer__button--';

const PopoutFooter = _react.default.createClass({
  displayName: 'PopoutFooter',
  propTypes: {
    children: _react.default.PropTypes.node,
    primaryButtonAction: _react.default.PropTypes.func,
    primaryButtonIsSubmit: _react.default.PropTypes.bool,
    primaryButtonLabel: _react.default.PropTypes.string,
    secondaryButtonAction: _react.default.PropTypes.func,
    secondaryButtonLabel: _react.default.PropTypes.string
  },

  // Render a primary button
  renderPrimaryButton() {
    if (!this.props.primaryButtonLabel) return null;
    return /*#__PURE__*/_react.default.createElement("button", {
      type: this.props.primaryButtonIsSubmit ? 'submit' : 'button',
      className: BUTTON_BASE_CLASSNAME + 'primary',
      onClick: this.props.primaryButtonAction
    }, this.props.primaryButtonLabel);
  },

  // Render a secondary button
  renderSecondaryButton() {
    if (!this.props.secondaryButtonAction || !this.props.secondaryButtonLabel) return null;
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: BUTTON_BASE_CLASSNAME + 'secondary',
      onClick: this.props.secondaryButtonAction
    }, this.props.secondaryButtonLabel);
  },

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__footer"
    }, this.renderPrimaryButton(), this.renderSecondaryButton(), this.props.children);
  }

});

module.exports = PopoutFooter;

},{"react":undefined}],447:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a header for a popout
 */
const PopoutHeader = _react.default.createClass({
  displayName: 'PopoutHeader',
  propTypes: {
    leftAction: _react.default.PropTypes.func,
    leftIcon: _react.default.PropTypes.string,
    title: _react.default.PropTypes.string.isRequired,
    transitionDirection: _react.default.PropTypes.oneOf(['next', 'prev'])
  },

  render() {
    // If we have a left action and a left icon, render a header button
    var headerButton = this.props.leftAction && this.props.leftIcon ? /*#__PURE__*/_react.default.createElement("button", {
      key: 'button_' + this.props.transitionDirection,
      type: "button",
      className: 'Popout__header__button octicon octicon-' + this.props.leftIcon,
      onClick: this.props.leftAction
    }) : null; // If we have a title, render it

    var headerTitle = this.props.title ? /*#__PURE__*/_react.default.createElement("span", {
      key: 'title_' + this.props.transitionDirection,
      className: "Popout__header__label"
    }, this.props.title) : null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__header"
    }, /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: "Popout__header__button",
      transitionEnterTimeout: 200,
      transitionLeaveTimeout: 200
    }, headerButton), /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionName: 'Popout__pane-' + this.props.transitionDirection,
      transitionEnterTimeout: 360,
      transitionLeaveTimeout: 360
    }, headerTitle));
  }

});

module.exports = PopoutHeader;

},{"react":undefined,"react-addons-css-transition-group":undefined}],448:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PopoutList = _react.default.createClass({
  displayName: 'PopoutList',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string
  },

  render() {
    const className = (0, _classnames.default)('PopoutList', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutList; // expose the child to the top level export

module.exports.Item = require('./PopoutListItem');
module.exports.Heading = require('./PopoutListHeading');

},{"./PopoutListHeading":449,"./PopoutListItem":450,"blacklist":undefined,"classnames":undefined,"react":undefined}],449:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutListHeading = _react.default.createClass({
  displayName: 'PopoutListHeading',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string
  },

  render() {
    const className = (0, _classnames.default)('PopoutList__heading', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: className
    }, props));
  }

});

module.exports = PopoutListHeading;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],450:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutListItem = _react.default.createClass({
  displayName: 'PopoutListItem',
  propTypes: {
    icon: _react.default.PropTypes.string,
    iconHover: _react.default.PropTypes.string,
    isSelected: _react.default.PropTypes.bool,
    label: _react.default.PropTypes.string.isRequired,
    onClick: _react.default.PropTypes.func
  },

  getInitialState() {
    return {
      hover: false
    };
  },

  hover() {
    this.setState({
      hover: true
    });
  },

  unhover() {
    this.setState({
      hover: false
    });
  },

  // Render an icon
  renderIcon() {
    if (!this.props.icon) return null;
    const icon = this.state.hover && this.props.iconHover ? this.props.iconHover : this.props.icon;
    const iconClassname = (0, _classnames.default)('PopoutList__item__icon octicon', 'octicon-' + icon);
    return /*#__PURE__*/_react.default.createElement("span", {
      className: iconClassname
    });
  },

  render() {
    const itemClassname = (0, _classnames.default)('PopoutList__item', {
      'is-selected': this.props.isSelected
    });
    const props = (0, _blacklist.default)(this.props, 'className', 'icon', 'iconHover', 'isSelected', 'label');
    return /*#__PURE__*/_react.default.createElement("button", _extends({
      type: "button",
      title: this.props.label,
      className: itemClassname,
      onFocus: this.hover,
      onBlur: this.unhover,
      onMouseOver: this.hover,
      onMouseOut: this.unhover
    }, props), this.renderIcon(), /*#__PURE__*/_react.default.createElement("span", {
      className: "PopoutList__item__label"
    }, this.props.label));
  }

});

module.exports = PopoutListItem;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],451:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoutPane = _react.default.createClass({
  displayName: 'PopoutPane',
  propTypes: {
    children: _react.default.PropTypes.node.isRequired,
    className: _react.default.PropTypes.string,
    onLayout: _react.default.PropTypes.func
  },

  getDefaultProps() {
    return {
      onLayout: () => {}
    };
  },

  componentDidMount() {
    this.props.onLayout(this.refs.el.offsetHeight);
  },

  render() {
    const className = (0, _classnames.default)('Popout__pane', this.props.className);
    const props = (0, _blacklist.default)(this.props, 'className', 'onLayout');
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      ref: "el",
      className: className
    }, props));
  }

});

module.exports = PopoutPane;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],452:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Popout component.
 * One can also add a Header (Popout/Header), a Footer
 * (Popout/Footer), a Body (Popout/Body) and a Pan (Popout/Pane).
 */
const SIZES = {
  arrowHeight: 12,
  arrowWidth: 16,
  horizontalMargin: 20
};

var Popout = _react.default.createClass({
  displayName: 'Popout',
  propTypes: {
    isOpen: _react.default.PropTypes.bool,
    onCancel: _react.default.PropTypes.func,
    onSubmit: _react.default.PropTypes.func,
    relativeToID: _react.default.PropTypes.string.isRequired,
    width: _react.default.PropTypes.number
  },

  getDefaultProps() {
    return {
      width: 320
    };
  },

  getInitialState() {
    return {};
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.addEventListener('resize', this.calculatePosition);
      this.calculatePosition(nextProps.isOpen);
    } else if (this.props.isOpen && !nextProps.isOpen) {
      window.removeEventListener('resize', this.calculatePosition);
    }
  },

  getPortalDOMNode() {
    return this.refs.portal.getPortalDOMNode();
  },

  calculatePosition(isOpen) {
    if (!isOpen) return;
    let posNode = document.getElementById(this.props.relativeToID);
    const pos = {
      top: 0,
      left: 0,
      width: posNode.offsetWidth,
      height: posNode.offsetHeight
    };

    while (posNode.offsetParent) {
      pos.top += posNode.offsetTop;
      pos.left += posNode.offsetLeft;
      posNode = posNode.offsetParent;
    }

    let leftOffset = Math.max(pos.left + pos.width / 2 - this.props.width / 2, SIZES.horizontalMargin);
    let topOffset = pos.top + pos.height + SIZES.arrowHeight;
    var spaceOnRight = window.innerWidth - (leftOffset + this.props.width + SIZES.horizontalMargin);

    if (spaceOnRight < 0) {
      leftOffset = leftOffset + spaceOnRight;
    }

    const arrowLeftOffset = leftOffset === SIZES.horizontalMargin ? pos.left + pos.width / 2 - SIZES.arrowWidth / 2 - SIZES.horizontalMargin : null;
    const newStateAvaliable = this.state.leftOffset !== leftOffset || this.state.topOffset !== topOffset || this.state.arrowLeftOffset !== arrowLeftOffset;

    if (newStateAvaliable) {
      this.setState({
        leftOffset: leftOffset,
        topOffset: topOffset,
        arrowLeftOffset: arrowLeftOffset
      });
    }
  },

  renderPopout() {
    if (!this.props.isOpen) return null;
    const {
      width
    } = this.props;
    const {
      arrowLeftOffset,
      leftOffset: left,
      topOffset: top
    } = this.state;
    const arrowStyles = arrowLeftOffset ? {
      left: 0,
      marginLeft: arrowLeftOffset
    } : null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout",
      style: {
        left,
        top,
        width
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "Popout__arrow",
      style: arrowStyles
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "Popout__inner"
    }, this.props.children));
  },

  renderBlockout() {
    if (!this.props.isOpen) return;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "blockout",
      onClick: this.props.onCancel
    });
  },

  render() {
    return /*#__PURE__*/_react.default.createElement(_Portal.default, {
      className: "Popout-wrapper",
      ref: "portal"
    }, /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
      transitionEnterTimeout: 200,
      transitionLeaveTimeout: 200,
      transitionName: "Popout"
    }, this.renderPopout()), this.renderBlockout());
  }

});

module.exports = Popout; // expose the child to the top level export

module.exports.Header = require('./PopoutHeader');
module.exports.Body = require('./PopoutBody');
module.exports.Footer = require('./PopoutFooter');
module.exports.Pane = require('./PopoutPane');

},{"../Portal":453,"./PopoutBody":445,"./PopoutFooter":446,"./PopoutHeader":447,"./PopoutPane":451,"react":undefined,"react-addons-css-transition-group":undefined}],453:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used by the Popout component and the Lightbox component of the fields for
 * popouts. Renders a non-react DOM node.
 */
module.exports = _react.default.createClass({
  displayName: 'Portal',
  portalElement: null,

  // eslint-disable-line react/sort-comp
  componentDidMount() {
    const el = document.createElement('div');
    document.body.appendChild(el);
    this.portalElement = el;
    this.componentDidUpdate();
  },

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  },

  componentDidUpdate() {
    _reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", this.props), this.portalElement);
  },

  getPortalDOMNode() {
    return this.portalElement;
  },

  render() {
    return null;
  }

});

},{"react":undefined,"react-dom":undefined}],454:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterRedux = require("react-router-redux");

var _redux = require("redux");

var _reactRouter = require("react-router");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _main = _interopRequireDefault(require("./screens/List/reducers/main"));

var _active = _interopRequireDefault(require("./screens/List/reducers/active"));

var _reducer = _interopRequireDefault(require("./screens/Item/reducer"));

var _reducer2 = _interopRequireDefault(require("./screens/Home/reducer"));

var _sagas = _interopRequireDefault(require("./sagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine the reducers to one state
const reducers = (0, _redux.combineReducers)({
  lists: _main.default,
  active: _active.default,
  item: _reducer.default,
  home: _reducer2.default,
  routing: _reactRouterRedux.routerReducer
});
const sagaMiddleware = (0, _reduxSaga.default)(); // Create the store

const store = (0, _redux.createStore)(reducers, (0, _redux.compose)((0, _redux.applyMiddleware)( // Support thunked actions and react-router-redux
_reduxThunk.default, (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory), sagaMiddleware), // Support the Chrome DevTools extension
window.devToolsExtension ? window.devToolsExtension() : f => f));
sagaMiddleware.run(_sagas.default);
var _default = store;
exports.default = _default;

},{"./sagas":383,"./screens/Home/reducer":391,"./screens/Item/reducer":409,"./screens/List/reducers/active":436,"./screens/List/reducers/main":437,"react-router":undefined,"react-router-redux":undefined,"redux":undefined,"redux-saga":undefined,"redux-thunk":undefined}],455:[function(require,module,exports){
"use strict";

/**
 * Constants
 */
// breakpoints
exports.breakpoint = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200
}; // border radii

exports.borderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32
}; // color

exports.color = {
  appDanger: '#d64242',
  appInfo: '#56cdfc',
  appPrimary: '#1385e5',
  appSuccess: '#34c240',
  appWarning: '#fa9f47'
}; // spacing

exports.spacing = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 40,
  xl: 80
}; // table constants

exports.TABLE_CONTROL_COLUMN_WIDTH = 26; // icon + padding

exports.NETWORK_ERROR_RETRY_DELAY = 500; // in ms

},{}],456:[function(require,module,exports){
"use strict";

/* eslint-disable key-spacing */
const theme = {};

const {
  blend,
  darken,
  fade,
  lighten
} = require('./utils/color'); // ==============================
// COMMON
// ==============================
// breakpoint


theme.breakpointNumeric = {
  mobile: 480,
  tabletPortrait: 768,
  tabletLandscape: 992,
  desktop: 1200
};
theme.breakpoint = {
  tabletPortraitMin: theme.breakpointNumeric.mobile + 1 + 'px',
  tabletLandscapeMin: theme.breakpointNumeric.tabletPortrait + 1 + 'px',
  desktopMin: theme.breakpointNumeric.tabletLandscape + 1 + 'px',
  desktopLargeMin: theme.breakpointNumeric.desktop + 1 + 'px',
  mobileMax: theme.breakpointNumeric.mobile + 'px',
  tabletPortraitMax: theme.breakpointNumeric.tabletPortrait + 'px',
  tabletLandscapeMax: theme.breakpointNumeric.tabletLandscape + 'px',
  desktopMax: theme.breakpointNumeric.desktop + 'px'
}; // container

theme.container = {
  gutter: 20,
  size: {
    small: 750,
    medium: 970,
    large: 1170
  }
}; // color

theme.color = {
  body: '#fafafa',
  link: '#1385e5',
  linkHover: lighten('#1385e5', 10),
  text: '#1A1A1A',
  // contextual
  success: '#34c240',
  create: '#34c240',
  // alias for success
  primary: '#1385e5',
  info: '#1385e5',
  // alias for primary
  warning: '#FA3',
  danger: '#d64242',
  error: '#d64242',
  // alias for danger
  // neutrals
  gray90: '#1A1A1A',
  gray80: '#333',
  gray70: '#4D4D4D',
  gray60: '#666',
  gray50: '#7F7F7F',
  gray40: '#999',
  gray30: '#B3B3B3',
  gray20: '#CCC',
  gray15: '#D9D9D9',
  gray10: '#E5E5E5',
  gray05: '#F2F2F2',
  // social
  facebook: '#3B5998',
  google: '#DC4E41',
  instagram: '#3f729b',
  pinterest: '#bd081c',
  tumblr: '#35465c',
  twitter: '#55ACEE',
  youtube: '#cd201f',
  vimeo: '#1ab7ea'
}; // border radii

theme.borderRadius = {
  small: '0.125rem',
  default: '0.3rem',
  large: '0.5rem'
}; // spacing

theme.spacing = {
  xsmall: 5,
  small: 10,
  default: 20,
  large: 30,
  xlarge: 40,
  xxlarge: 60
}; // ==============================
// ELEMENTAL SPECIFIC
// ==============================
// button

theme.button = {
  borderRadius: theme.borderRadius.default,
  borderWidth: 1,
  font: {
    weight: 500
  },
  paddingHorizontal: '1em',
  default: {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  primary: {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  success: {
    bgColor: theme.color.success,
    borderColor: blend(theme.color.success, theme.color.body, 60),
    textColor: theme.color.success
  },
  warning: {
    bgColor: theme.color.warning,
    borderColor: blend(theme.color.warning, theme.color.body, 60),
    textColor: theme.color.warning
  },
  danger: {
    bgColor: theme.color.danger,
    borderColor: blend(theme.color.danger, theme.color.body, 60),
    textColor: theme.color.danger
  }
}; // blank state

theme.blankstate = {
  background: darken(theme.color.body, 4),
  borderRadius: theme.borderRadius.default,
  color: theme.color.gray40,
  paddingHorizontal: '2em',
  paddingVertical: '4em'
}; // font

theme.font = {
  family: {
    mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, Times New Roman, Times, serif'
  },
  size: {
    xxsmall: '0.65rem',
    xsmall: '0.75rem',
    small: '0.85rem',
    default: '1rem',
    medium: '1.2rem',
    large: '1.6rem',
    xlarge: '2.4rem',
    xxlarge: '3.2rem'
  }
}; // form

theme.form = {
  label: {
    color: theme.color.gray50,
    fontSize: '1rem',
    fontWeight: 'normal',
    width: 180
  },
  note: {
    color: theme.color.gray40,
    fontSize: '0.9em'
  }
}; // component

theme.component = {
  lineHeight: '2.3em',
  height: '2.4em',
  padding: '1em'
}; // input

theme.input = {
  background: {
    default: 'white',
    disabled: '#fafafa',
    noedit: darken(theme.color.body, 2)
  },
  placeholderColor: '#aaa',
  lineHeight: theme.component.lineHeight,
  height: theme.component.height,
  border: {
    color: {
      default: '#ccc',
      focus: theme.color.info,
      hover: '#bbb',
      noedit: darken(theme.color.body, 8)
    },
    radius: theme.borderRadius.default,
    width: 1
  },
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  boxShadowFocus: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ${fade(theme.color.info, 10)}`,
  paddingHorizontal: '.75em'
}; // select

theme.select = {
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.075)'
}; // alert

theme.alert = {
  padding: '0.75em  1em',
  margin: '0 0 1em',
  borderWidth: 1,
  borderRadius: theme.borderRadius.default,
  color: {
    danger: {
      background: fade(theme.color.danger, 10),
      border: fade(theme.color.danger, 10),
      text: theme.color.danger
    },
    info: {
      background: fade(theme.color.primary, 10),
      border: fade(theme.color.primary, 10),
      text: theme.color.primary
    },
    success: {
      background: fade(theme.color.success, 10),
      border: fade(theme.color.success, 10),
      text: theme.color.success
    },
    warning: {
      background: fade(theme.color.warning, 10),
      border: fade(theme.color.warning, 10),
      text: theme.color.warning
    }
  }
}; // glyph

theme.glyph = {
  color: {
    danger: theme.color.danger,
    inherit: 'inherit',
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 16,
    medium: 32,
    large: 64
  }
}; // modal

theme.modal = {
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 100,
  padding: {
    dialog: {
      horizontal: '1em',
      vertical: 0
    },
    body: {
      horizontal: 0,
      vertical: '1em'
    },
    footer: {
      horizontal: 0,
      vertical: '1em'
    },
    header: {
      horizontal: 0,
      vertical: '0.6em'
    }
  }
}; // pagination

theme.pagination = {
  color: theme.color.gray60,
  hover: {
    background: 'white',
    border: 'rgba(0, 0, 0, 0.1)',
    color: theme.color.gray60
  },
  selected: {
    background: 'rgba(0, 0, 0, 0.05)',
    border: 'transparent',
    color: theme.color.gray60
  },
  disabled: {
    background: 'transparent',
    color: theme.color.gray40
  }
}; // spinner

theme.spinner = {
  color: {
    danger: theme.color.danger,
    default: theme.color.gray40,
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 4,
    medium: 8,
    large: 16
  }
};
module.exports = theme;

},{"./utils/color":458}],457:[function(require,module,exports){
"use strict";

/**
 * Helper method to handle List operations, e.g. creating items, deleting items,
 * getting information about those lists, etc.
 */
const listToArray = require('list-to-array');

const qs = require('qs');

const xhr = require('xhr');

const assign = require('object-assign'); // Filters for truthy elements in an array


const truthy = i => i;
/**
 * Get the columns of a list, structured by fields and headings
 *
 * @param  {Object} list The list we want the columns of
 *
 * @return {Array}       The columns
 */


function getColumns(list) {
  return list.uiElements.map(col => {
    if (col.type === 'heading') {
      return {
        type: 'heading',
        content: col.content
      };
    } else {
      var field = list.fields[col.field];
      return field ? {
        type: 'field',
        field: field,
        title: field.label,
        path: field.path
      } : null;
    }
  }).filter(truthy);
}
/**
 * Make an array of filters an object keyed by the filtering path
 *
 * @param  {Array} filterArray The array of filters
 *
 * @return {Object}            The corrected filters, keyed by path
 */


function getFilters(filterArray) {
  var filters = {};
  filterArray.forEach(filter => {
    filters[filter.field.path] = filter.value;
  });
  return filters;
}

;
/**
 * Get the sorting string for the URI
 *
 * @param  {Array} sort.paths The paths we want to sort
 *
 * @return {String}           All the sorting queries we want as a string
 */

function getSortString(sort) {
  return sort.paths.map(i => {
    // If we want to sort inverted, we prefix a "-" before the sort path
    return i.invert ? '-' + i.path : i.path;
  }).filter(truthy).join(',');
}

;
/**
 * Build a query string from a bunch of options
 */

function buildQueryString(options) {
  const query = {};
  if (options.search) query.search = options.search;
  if (options.filters.length) query.filters = JSON.stringify(getFilters(options.filters));
  if (options.columns) query.fields = options.columns.map(i => i.path).join(',');
  if (options.page && options.page.size) query.limit = options.page.size;
  if (options.page && options.page.index > 1) query.skip = (options.page.index - 1) * options.page.size;
  if (options.sort) query.sort = getSortString(options.sort);
  query.expandRelationshipFields = true;
  return '?' + qs.stringify(query);
}

;
/**
 * The main list helper class
 *
 * @param {Object} options
 */

const List = function (options) {
  // TODO these options are possibly unused
  assign(this, options);
  this.columns = getColumns(this);
  this.expandedDefaultColumns = this.expandColumns(this.defaultColumns);
  this.defaultColumnPaths = this.expandedDefaultColumns.map(i => i.path).join(',');
};
/**
 * Create an item via the API
 *
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */


List.prototype.createItem = function (formData, callback) {
  xhr({
    url: `${Keystone.adminPath}/api/${this.path}/create`,
    responseType: 'json',
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    body: formData
  }, (err, resp, data) => {
    if (err) callback(err);

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      // NOTE: xhr callback will be called with an Error if
      //  there is an error in the browser that prevents
      //  sending the request. A HTTP 500 response is not
      //  going to cause an error to be returned.
      callback(data, null);
    }
  });
};
/**
 * Update a specific item
 *
 * @param  {String}   id       The id of the item we want to update
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */


List.prototype.updateItem = function (id, formData, callback) {
  xhr({
    url: `${Keystone.adminPath}/api/${this.path}/${id}`,
    responseType: 'json',
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    body: formData
  }, (err, resp, data) => {
    if (err) return callback(err);

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};

List.prototype.expandColumns = function (input) {
  let nameIncluded = false;
  const cols = listToArray(input).map(i => {
    const split = i.split('|');
    let path = split[0];
    let width = split[1];

    if (path === '__name__') {
      path = this.namePath;
    }

    const field = this.fields[path];

    if (!field) {
      // TODO: Support arbitary document paths
      if (!this.hidden) {
        if (path === this.namePath) {
          console.warn(`List ${this.key} did not specify any default columns or a name field`);
        } else {
          console.warn(`List ${this.key} specified an invalid default column: ${path}`);
        }
      }

      return;
    }

    if (path === this.namePath) {
      nameIncluded = true;
    }

    return {
      field: field,
      label: field.label,
      path: field.path,
      type: field.type,
      width: width
    };
  }).filter(truthy);

  if (!nameIncluded) {
    cols.unshift({
      type: 'id',
      label: 'ID',
      path: 'id'
    });
  }

  return cols;
};

List.prototype.expandSort = function (input) {
  const sort = {
    rawInput: input || this.defaultSort,
    isDefaultSort: false
  };
  sort.input = sort.rawInput;

  if (sort.input === '__default__') {
    sort.isDefaultSort = true;
    sort.input = this.sortable ? 'sortOrder' : this.namePath;
  }

  sort.paths = listToArray(sort.input).map(path => {
    let invert = false;

    if (path.charAt(0) === '-') {
      invert = true;
      path = path.substr(1);
    } else if (path.charAt(0) === '+') {
      path = path.substr(1);
    }

    const field = this.fields[path];

    if (!field) {
      // TODO: Support arbitary document paths
      console.warn('Invalid Sort specified:', path);
      return;
    }

    return {
      field: field,
      type: field.type,
      label: field.label,
      path: field.path,
      invert: invert
    };
  }).filter(truthy);
  return sort;
};
/**
 * Load a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to load
 * @param  {Object}   options
 * @param  {Function} callback
 */


List.prototype.loadItem = function (itemId, options, callback) {
  if (arguments.length === 2 && typeof options === 'function') {
    callback = options;
    options = null;
  }

  let url = Keystone.adminPath + '/api/' + this.path + '/' + itemId;
  const query = qs.stringify(options);
  if (query.length) url += '?' + query;
  xhr({
    url: url,
    responseType: 'json'
  }, (err, resp, data) => {
    if (err) return callback(err); // Pass the data as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};
/**
 * Load all items of a list, optionally passing objects to build a query string
 * for sorting or searching
 *
 * @param  {Object}   options
 * @param  {Function} callback
 */


List.prototype.loadItems = function (options, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + buildQueryString(options);
  xhr({
    url: url,
    responseType: 'json'
  }, (err, resp, data) => {
    if (err) callback(err); // Pass the data as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, data);
    } else {
      callback(data);
    }
  });
};
/**
 * Constructs a download URL to download a list with the current sorting, filtering,
 * selection and searching options
 *
 * @param  {Object} options
 *
 * @return {String}         The download URL
 */


List.prototype.getDownloadURL = function (options) {
  const url = Keystone.adminPath + '/api/' + this.path;
  const parts = [];

  if (options.format !== 'json') {
    options.format = 'csv';
  }

  parts.push(options.search ? 'search=' + options.search : '');
  parts.push(options.filters.length ? 'filters=' + JSON.stringify(getFilters(options.filters)) : '');
  parts.push(options.columns ? 'select=' + options.columns.map(i => i.path).join(',') : '');
  parts.push(options.sort ? 'sort=' + getSortString(options.sort) : '');
  parts.push('expandRelationshipFields=true');
  return url + '/export.' + options.format + '?' + parts.filter(truthy).join('&');
};
/**
 * Delete a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to delete
 * @param  {Function} callback
 */


List.prototype.deleteItem = function (itemId, callback) {
  this.deleteItems([itemId], callback);
};
/**
 * Delete multiple items at once via the API
 *
 * @param  {Array}   itemIds  An array of ids of items we want to delete
 * @param  {Function} callback
 */


List.prototype.deleteItems = function (itemIds, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + '/delete';
  xhr({
    url: url,
    method: 'POST',
    headers: assign({}, Keystone.csrf.header),
    json: {
      ids: itemIds
    }
  }, (err, resp, body) => {
    if (err) return callback(err); // Pass the body as result or error, depending on the statusCode

    if (resp.statusCode === 200) {
      callback(null, body);
    } else {
      callback(body);
    }
  });
};

List.prototype.reorderItems = function (item, oldSortOrder, newSortOrder, pageOptions, callback) {
  const url = Keystone.adminPath + '/api/' + this.path + '/' + item.id + '/sortOrder/' + oldSortOrder + '/' + newSortOrder + '/' + buildQueryString(pageOptions);
  xhr({
    url: url,
    method: 'POST',
    headers: assign({}, Keystone.csrf.header)
  }, (err, resp, body) => {
    if (err) return callback(err);

    try {
      body = JSON.parse(body);
    } catch (e) {
      console.log('Error parsing results json:', e, body);
      return callback(e);
    } // Pass the body as result or error, depending on the statusCode


    if (resp.statusCode === 200) {
      callback(null, body);
    } else {
      callback(body);
    }
  });
};

module.exports = List;

},{"list-to-array":undefined,"object-assign":556,"qs":undefined,"xhr":undefined}],458:[function(require,module,exports){
"use strict";

/**
	Validate Hex
	==============================

	@param {String} hex

	1. remove hash if present
	2. convert from 3 to 6 digit color code & ensure valid hex
*/
function validateHex(color) {
  const hex = color.replace('#', '');

  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error(`Invalid color value provided: "${color}"`);
  }

  return hex;
}

;
/**
	Fade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and applies an alpha value.

	@param {String} color
	@param {Number} opacity (0-100)

	1. convert hex to RGB
	2. combine and add alpha channel
*/

function fade(color) {
  let opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  const decimalFraction = opacity / 100;
  const hex = validateHex(color); // 1.

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16); // 2.

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + decimalFraction + ')';
  return result;
}

;
/**
	Shade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and lightens or darkens

	@param {String} color
	@param {Number} opacity (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function shade(color, percent) {
  const decimalFraction = percent / 100;
  const hex = validateHex(color); // 1.

  let f = parseInt(hex, 16);
  let t = decimalFraction < 0 ? 0 : 255;
  let p = decimalFraction < 0 ? decimalFraction * -1 : decimalFraction;
  const R = f >> 16;
  const G = f >> 8 & 0x00FF;
  const B = f & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

; // shade helpers

const lighten = shade;

function darken(color, percent) {
  return shade(color, percent * -1);
}

;
/**
	Blend Color
	==============================

	Takes two hexidecimal colors and blend them together

	@param {String} color1
	@param {String} color2
	@param {Number} percent (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function blend(color1, color2, percent) {
  const decimalFraction = percent / 100;
  const hex1 = validateHex(color1);
  const hex2 = validateHex(color2); // 1.

  const f = parseInt(hex1, 16);
  const t = parseInt(hex2, 16);
  const R1 = f >> 16;
  const G1 = f >> 8 & 0x00FF;
  const B1 = f & 0x0000FF;
  const R2 = t >> 16;
  const G2 = t >> 8 & 0x00FF;
  const B2 = t & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((R2 - R1) * decimalFraction) + R1) * 0x10000 + (Math.round((G2 - G1) * decimalFraction) + G1) * 0x100 + (Math.round((B2 - B1) * decimalFraction) + B1)).toString(16).slice(1);
}

module.exports = {
  blend,
  darken,
  fade,
  lighten
};

},{}],459:[function(require,module,exports){
"use strict";

// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten

/*
	// To use spread the new array into glamor's `css` function

	function Component ({ className, ...props }) {
		props.className = css(
			classes.component,
			...concatClassnames(className)
		);

		return <Component {...props} />;
	};
*/
module.exports = function concatClassnames(className) {
  return [className].reduce((a, b) => {
    return a.concat(b);
  }, []);
};

},{}],460:[function(require,module,exports){
"use strict";

/**
	Linear Gradient
	==============================

	Short-hand helper for adding a linear gradient to your component.

	- @param {String} sideOrCorner
	- @param {String} top
	- @param {String} bottom
	- @param {String} base (optional)
	- @returns {Object} css linear gradient declaration

	Spread the declaration into your component class:
	------------------------------

	myComponentClass: {
		...linearGradient(red, blue),
	}
*/
function linearGradient(direction, top, bottom) {
  let base = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return {
    background: `linear-gradient(${direction}, ${top} 0%, ${bottom} 100%) ${base}`
  };
} // Vertical Gradient


function gradientVertical(top, bottom, base) {
  return linearGradient('to bottom', top, bottom, base);
} // Horizontal Gradient


function gradientHorizontal(top, bottom, base) {
  return linearGradient('to right', top, bottom, base);
}
/**
	Border Radius
	==============================

	Short-hand helper for border radii
*/
// top


function borderTopRadius(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius
  };
} // right


function borderRightRadius(radius) {
  return {
    borderBottomRightRadius: radius,
    borderTopRightRadius: radius
  };
} // bottom


function borderBottomRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius
  };
} // left


function borderLeftRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderTopLeftRadius: radius
  };
} // Return


module.exports = {
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  gradientHorizontal,
  gradientVertical
};

},{}],461:[function(require,module,exports){
"use strict";

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exports an object of lists, keyed with their key instead of their name and
 * wrapped with the List helper (./List.js)
 */
exports.listsByKey = {};
exports.listsByPath = {};

for (const key in Keystone.lists) {
  // Guard for-ins
  if ({}.hasOwnProperty.call(Keystone.lists, key)) {
    var list = new _List.default(Keystone.lists[key]);
    exports.listsByKey[key] = list;
    exports.listsByPath[list.path] = list;
  }
}

},{"./List":457}],462:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForQueryChange = checkForQueryChange;
exports.createPageQueryParams = createPageQueryParams;
exports.createSortQueryParams = createSortQueryParams;
exports.normaliseValue = normaliseValue;
exports.parametizeFilters = parametizeFilters;
exports.stringifyColumns = stringifyColumns;
exports.updateQueryParams = updateQueryParams;

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _blacklist = _interopRequireDefault(require("blacklist"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function checkForQueryChange(nextProps, thisProps) {
  const {
    query
  } = nextProps.location;
  const {
    cachedQuery
  } = nextProps.active;

  const parsedQuery = _extends({}, query, {
    page: parseInt(query.page)
  });

  if (!parsedQuery.page) delete parsedQuery.page;
  const attenuatedQuery = (0, _blacklist.default)(parsedQuery, 'search');
  const attenuatedCache = (0, _blacklist.default)(cachedQuery, 'search');
  if (nextProps.location.pathname !== thisProps.location.pathname) return true;
  if (!(0, _isEqual.default)(attenuatedQuery, attenuatedCache)) return true;
  return false;
}

function normaliseValue(value, benchmark) {
  if (value === benchmark) return void 0;
  return value;
}

function createSortQueryParams(rawInput, defaultSort) {
  return normaliseValue(rawInput, defaultSort);
}

function createPageQueryParams(page, defaultValue) {
  return normaliseValue(page, defaultValue);
}
/**
 * Updates the query parameters with the ones passed as the first argument
 *
 * @param  {Object} params         The new parameters to be added
 * @param  {Object} location       The current location object
 */


function updateQueryParams(params, location) {
  if (!location) return;
  const newParams = (0, _objectAssign.default)({}, location.query); // Stringify nested objects inside the parameters

  Object.keys(params).forEach(i => {
    if (params[i]) {
      newParams[i] = params[i];

      if (typeof newParams[i] === 'object') {
        newParams[i] = JSON.stringify(newParams[i]);
      }
    } else {
      delete newParams[i];
    }
  });
  return newParams;
}
/**
 * Stringify the columns array from the state
 *
 * @param  {Array}  columns            The columns from the active state
 * @param  {String} defaultColumnPaths The default column paths of the current list
 *
 * @return {String}                    The column array, stringified
 */


function stringifyColumns(columns, defaultColumnPaths) {
  if (!columns) {
    return;
  } // Turns [{ path: 'someColumn' }, { path: 'someOtherColumn' }]
  // into ['someColumn', 'someOtherColumn']


  let columnString = columns.map(column => column.path); // Turns that array into 'someColumn,someOtherColumn'

  if (Array.isArray(columnString)) columnString = columnString.join(','); // If that is the same as the default columns, don't set the query param

  if (columnString === defaultColumnPaths) columnString = undefined;
  return columnString;
}
/**
 * Flattens filters from state into the minimum needed object to be used as a url
 * param
 *
 * @param  {Object} filterArray         The array of filters from state
 */


function parametizeFilters(filterArray) {
  if (!filterArray || filterArray.length === 0) {
    return;
  }

  return filterArray.map(filter => {
    return _extends({
      path: filter.field.path
    }, filter.value);
  });
}

},{"blacklist":undefined,"lodash/isEqual":546,"object-assign":556}],463:[function(require,module,exports){
"use strict";

var _i = _interopRequireDefault(require("i"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A few helper methods for strings
 */

/**
 * Displays the singular or plural of a string based on a number
 * or number of items in an array.
 *
 * If arity is 1, returns the plural form of the word.
 *
 * @param {String} count
 * @param {String} singular string
 * @param {String} plural string
 * @return {String} singular or plural, * is replaced with count
 * @api public
 */
exports.plural = function (count, sn, pl) {
  if (arguments.length === 1) {
    return _i.default.pluralize(count);
  }

  if (typeof sn !== 'string') sn = '';

  if (!pl) {
    pl = _i.default.pluralize(sn);
  }

  if (typeof count === 'string') {
    count = Number(count);
  } else if (typeof count !== 'number') {
    count = (0, _lodash.size)(count);
  }

  return (count === 1 ? sn : pl).replace('*', count);
};
/**
 * Converts the first letter in a string to uppercase
 *
 * @param {String} str
 * @return {String} Str
 * @api public
 */


exports.upcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
/**
 * Converts the first letter in a string to lowercase
 *
 * @param {String} Str
 * @return {String} str
 * @api public
 */


exports.downcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toLowerCase() + str.substr(1);
};
/**
 * Converts a string to title case
 *
 * @param {String} str
 * @return {String} Title Case form of str
 * @api public
 */


exports.titlecase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  var parts = str.split(/\s|_|\-/);

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] && !/^[A-Z0-9]+$/.test(parts[i])) {
      parts[i] = exports.upcase(parts[i]);
    }
  }

  return (0, _lodash.compact)(parts).join(' ');
};
/**
 * Converts a string to camel case
 *
 * @param {String} str
 * @param {Boolean} lowercaseFirstWord
 * @return {String} camel-case form of str
 * @api public
 */


exports.camelcase = function (str, lc) {
  return _i.default.camelize(str, !lc);
};

},{"i":undefined,"lodash":undefined}],464:[function(require,module,exports){
"use strict";

var ExMatch = require('expression-match'); // Matches objects with expressions

/**
 * Checks if something is an object
 *
 * @param  {Any} arg   The something we want to check the type of
 * @return {Boolean} If arg is an object or not
 */


function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
}

;
/**
 * Evaluates the visibility of a field based on its dependencies and their values
 *
 * @param  {Object|Any} dependsOn The dependsOn variable we get from the field
 * @param  {Object}		values    The values currently in the fields
 * @return {Boolean}			  If the current field should be displayed based
 *                          	  on it's dependencies and their values
 */

module.exports = function evalDependsOn(dependsOn, values) {
  if (!isObject(dependsOn) || !Object.keys(dependsOn).length) {
    return true;
  } // Checks if the current field should be displayed, based on the values of
  // other fields and the dependsOn configuration of this field


  var Match = new ExMatch(dependsOn, values, false);
  return Match.match();
};

},{"expression-match":undefined}],465:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative'),
    root = require('./_root');
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

},{"./_getNative":500,"./_root":531}],466:[function(require,module,exports){
"use strict";

var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":506,"./_hashDelete":507,"./_hashGet":508,"./_hashHas":509,"./_hashSet":510}],467:[function(require,module,exports){
"use strict";

var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":515,"./_listCacheDelete":516,"./_listCacheGet":517,"./_listCacheHas":518,"./_listCacheSet":519}],468:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative'),
    root = require('./_root');
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

},{"./_getNative":500,"./_root":531}],469:[function(require,module,exports){
"use strict";

var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":520,"./_mapCacheDelete":521,"./_mapCacheGet":522,"./_mapCacheHas":523,"./_mapCacheSet":524}],470:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative'),
    root = require('./_root');
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

},{"./_getNative":500,"./_root":531}],471:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative'),
    root = require('./_root');
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

},{"./_getNative":500,"./_root":531}],472:[function(require,module,exports){
"use strict";

var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":469,"./_setCacheAdd":532,"./_setCacheHas":533}],473:[function(require,module,exports){
"use strict";

var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":467,"./_stackClear":535,"./_stackDelete":536,"./_stackGet":537,"./_stackHas":538,"./_stackSet":539}],474:[function(require,module,exports){
"use strict";

var root = require('./_root');
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":531}],475:[function(require,module,exports){
"use strict";

var root = require('./_root');
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"./_root":531}],476:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative'),
    root = require('./_root');
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

},{"./_getNative":500,"./_root":531}],477:[function(require,module,exports){
"use strict";

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

},{}],478:[function(require,module,exports){
"use strict";

var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":490,"./_isIndex":511,"./isArguments":542,"./isArray":543,"./isBuffer":545,"./isTypedArray":552}],479:[function(require,module,exports){
"use strict";

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

},{}],480:[function(require,module,exports){
"use strict";

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

},{}],481:[function(require,module,exports){
"use strict";

var eq = require('./eq');
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

},{"./eq":541}],482:[function(require,module,exports){
"use strict";

var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":479,"./isArray":543}],483:[function(require,module,exports){
"use strict";

var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":474,"./_getRawTag":502,"./_objectToString":529}],484:[function(require,module,exports){
"use strict";

var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":483,"./isObjectLike":550}],485:[function(require,module,exports){
"use strict";

var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObjectLike = require('./isObjectLike');
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":486,"./isObjectLike":550}],486:[function(require,module,exports){
"use strict";

var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isTypedArray = require('./isTypedArray');
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":473,"./_equalArrays":494,"./_equalByTag":495,"./_equalObjects":496,"./_getTag":504,"./isArray":543,"./isBuffer":545,"./isTypedArray":552}],487:[function(require,module,exports){
"use strict";

var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./_isMasked":513,"./_toSource":540,"./isFunction":547,"./isObject":549}],488:[function(require,module,exports){
"use strict";

var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":483,"./isLength":548,"./isObjectLike":550}],489:[function(require,module,exports){
"use strict";

var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":514,"./_nativeKeys":527}],490:[function(require,module,exports){
"use strict";

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

},{}],491:[function(require,module,exports){
"use strict";

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],492:[function(require,module,exports){
"use strict";

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],493:[function(require,module,exports){
"use strict";

var root = require('./_root');
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

},{"./_root":531}],494:[function(require,module,exports){
"use strict";

var SetCache = require('./_SetCache'),
    arraySome = require('./_arraySome'),
    cacheHas = require('./_cacheHas');
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

},{"./_SetCache":472,"./_arraySome":480,"./_cacheHas":492}],495:[function(require,module,exports){
"use strict";

var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    eq = require('./eq'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

},{"./_Symbol":474,"./_Uint8Array":475,"./_equalArrays":494,"./_mapToArray":525,"./_setToArray":534,"./eq":541}],496:[function(require,module,exports){
"use strict";

var getAllKeys = require('./_getAllKeys');
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Check that cyclic values are equal.


  var objStacked = stack.get(object);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

},{"./_getAllKeys":498}],497:[function(require,module,exports){
(function (global){(function (){
"use strict";

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],498:[function(require,module,exports){
"use strict";

var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":482,"./_getSymbols":503,"./keys":553}],499:[function(require,module,exports){
"use strict";

var isKeyable = require('./_isKeyable');
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":512}],500:[function(require,module,exports){
"use strict";

var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":487,"./_getValue":505}],501:[function(require,module,exports){
"use strict";

var overArg = require('./_overArg');
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"./_overArg":530}],502:[function(require,module,exports){
"use strict";

var Symbol = require('./_Symbol');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

},{"./_Symbol":474}],503:[function(require,module,exports){
"use strict";

var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

},{"./_arrayFilter":477,"./stubArray":554}],504:[function(require,module,exports){
"use strict";

var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

},{"./_DataView":465,"./_Map":468,"./_Promise":470,"./_Set":471,"./_WeakMap":476,"./_baseGetTag":483,"./_toSource":540}],505:[function(require,module,exports){
"use strict";

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],506:[function(require,module,exports){
"use strict";

var nativeCreate = require('./_nativeCreate');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":526}],507:[function(require,module,exports){
"use strict";

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],508:[function(require,module,exports){
"use strict";

var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":526}],509:[function(require,module,exports){
"use strict";

var nativeCreate = require('./_nativeCreate');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":526}],510:[function(require,module,exports){
"use strict";

var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":526}],511:[function(require,module,exports){
"use strict";

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],512:[function(require,module,exports){
"use strict";

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

},{}],513:[function(require,module,exports){
"use strict";

var coreJsData = require('./_coreJsData');
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

},{"./_coreJsData":493}],514:[function(require,module,exports){
"use strict";

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

},{}],515:[function(require,module,exports){
"use strict";

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],516:[function(require,module,exports){
"use strict";

var assocIndexOf = require('./_assocIndexOf');
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":481}],517:[function(require,module,exports){
"use strict";

var assocIndexOf = require('./_assocIndexOf');
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":481}],518:[function(require,module,exports){
"use strict";

var assocIndexOf = require('./_assocIndexOf');
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":481}],519:[function(require,module,exports){
"use strict";

var assocIndexOf = require('./_assocIndexOf');
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":481}],520:[function(require,module,exports){
"use strict";

var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

},{"./_Hash":466,"./_ListCache":467,"./_Map":468}],521:[function(require,module,exports){
"use strict";

var getMapData = require('./_getMapData');
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":499}],522:[function(require,module,exports){
"use strict";

var getMapData = require('./_getMapData');
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":499}],523:[function(require,module,exports){
"use strict";

var getMapData = require('./_getMapData');
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":499}],524:[function(require,module,exports){
"use strict";

var getMapData = require('./_getMapData');
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":499}],525:[function(require,module,exports){
"use strict";

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],526:[function(require,module,exports){
"use strict";

var getNative = require('./_getNative');
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

},{"./_getNative":500}],527:[function(require,module,exports){
"use strict";

var overArg = require('./_overArg');
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":530}],528:[function(require,module,exports){
"use strict";

var freeGlobal = require('./_freeGlobal');
/** Detect free variable `exports`. */


var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

},{"./_freeGlobal":497}],529:[function(require,module,exports){
"use strict";

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],530:[function(require,module,exports){
"use strict";

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],531:[function(require,module,exports){
"use strict";

var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},{"./_freeGlobal":497}],532:[function(require,module,exports){
"use strict";

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

},{}],533:[function(require,module,exports){
"use strict";

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],534:[function(require,module,exports){
"use strict";

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],535:[function(require,module,exports){
"use strict";

var ListCache = require('./_ListCache');
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":467}],536:[function(require,module,exports){
"use strict";

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],537:[function(require,module,exports){
"use strict";

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],538:[function(require,module,exports){
"use strict";

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],539:[function(require,module,exports){
"use strict";

var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":467,"./_Map":468,"./_MapCache":469}],540:[function(require,module,exports){
"use strict";

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

},{}],541:[function(require,module,exports){
"use strict";

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

},{}],542:[function(require,module,exports){
"use strict";

var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

},{"./_baseIsArguments":484,"./isObjectLike":550}],543:[function(require,module,exports){
"use strict";

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

},{}],544:[function(require,module,exports){
"use strict";

var isFunction = require('./isFunction'),
    isLength = require('./isLength');
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":547,"./isLength":548}],545:[function(require,module,exports){
"use strict";

var root = require('./_root'),
    stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */


var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":531,"./stubFalse":555}],546:[function(require,module,exports){
"use strict";

var baseIsEqual = require('./_baseIsEqual');
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

},{"./_baseIsEqual":485}],547:[function(require,module,exports){
"use strict";

var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":483,"./isObject":549}],548:[function(require,module,exports){
"use strict";

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],549:[function(require,module,exports){
"use strict";

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],550:[function(require,module,exports){
"use strict";

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],551:[function(require,module,exports){
"use strict";

var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":483,"./_getPrototype":501,"./isObjectLike":550}],552:[function(require,module,exports){
"use strict";

var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":488,"./_baseUnary":491,"./_nodeUtil":528}],553:[function(require,module,exports){
"use strict";

var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":478,"./_baseKeys":489,"./isArrayLike":544}],554:[function(require,module,exports){
"use strict";

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],555:[function(require,module,exports){
"use strict";

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],556:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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

},{}],557:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],558:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _io = require('./internal/io');

Object.defineProperty(exports, 'take', {
  enumerable: true,
  get: function get() {
    return _io.take;
  }
});
Object.defineProperty(exports, 'takem', {
  enumerable: true,
  get: function get() {
    return _io.takem;
  }
});
Object.defineProperty(exports, 'put', {
  enumerable: true,
  get: function get() {
    return _io.put;
  }
});
Object.defineProperty(exports, 'all', {
  enumerable: true,
  get: function get() {
    return _io.all;
  }
});
Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function get() {
    return _io.race;
  }
});
Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function get() {
    return _io.call;
  }
});
Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function get() {
    return _io.apply;
  }
});
Object.defineProperty(exports, 'cps', {
  enumerable: true,
  get: function get() {
    return _io.cps;
  }
});
Object.defineProperty(exports, 'fork', {
  enumerable: true,
  get: function get() {
    return _io.fork;
  }
});
Object.defineProperty(exports, 'spawn', {
  enumerable: true,
  get: function get() {
    return _io.spawn;
  }
});
Object.defineProperty(exports, 'join', {
  enumerable: true,
  get: function get() {
    return _io.join;
  }
});
Object.defineProperty(exports, 'cancel', {
  enumerable: true,
  get: function get() {
    return _io.cancel;
  }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function get() {
    return _io.select;
  }
});
Object.defineProperty(exports, 'actionChannel', {
  enumerable: true,
  get: function get() {
    return _io.actionChannel;
  }
});
Object.defineProperty(exports, 'cancelled', {
  enumerable: true,
  get: function get() {
    return _io.cancelled;
  }
});
Object.defineProperty(exports, 'flush', {
  enumerable: true,
  get: function get() {
    return _io.flush;
  }
});
Object.defineProperty(exports, 'getContext', {
  enumerable: true,
  get: function get() {
    return _io.getContext;
  }
});
Object.defineProperty(exports, 'setContext', {
  enumerable: true,
  get: function get() {
    return _io.setContext;
  }
});
Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function get() {
    return _io.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function get() {
    return _io.takeLatest;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _io.throttle;
  }
});

},{"./internal/io":561}],559:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.buffers = exports.BUFFER_OVERFLOW = undefined;

var _utils = require("./utils");

var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: _utils.kTrue,
  put: _utils.noop,
  take: _utils.noop
};

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];
  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = exports.buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

},{"./utils":568}],560:[function(require,module,exports){
(function (process){(function (){
'use strict';

exports.__esModule = true;
exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.emitter = emitter;
exports.channel = channel;
exports.eventChannel = eventChannel;
exports.stdChannel = stdChannel;

var _utils = require('./utils');

var _buffers = require('./buffers');

var _scheduler = require('./scheduler');

var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = exports.END = {
  type: CHANNEL_END_TYPE
};

var isEnd = exports.isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return (0, _utils.remove)(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();

    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (process.env.NODE_ENV !== 'production') {
  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();
  var closed = false;
  var takers = [];
  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
    }

    if (takers.length && !buffer.isEmpty()) {
      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);

    if (closed) {
      return;
    }

    if (!takers.length) {
      return buffer.put(input);
    }

    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];

      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        return (0, _utils.remove)(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now

    (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();

    if (!closed) {
      closed = true;

      if (takers.length) {
        var arr = takers;
        takers = [];

        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,

    get __takers__() {
      return takers;
    },

    get __closed__() {
      return closed;
    }

  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
  var matcher = arguments[2];
  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/

  if (arguments.length > 2) {
    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);

  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }

      chan.close();
    }
  };

  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    if (matcher && !matcher(input)) {
      return;
    }

    chan.put(input);
  });

  if (chan.__closed__) {
    unsubscribe();
  }

  if (!_utils.is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils.SAGA_ACTION]) {
        cb(input);
        return;
      }

      (0, _scheduler.asap)(function () {
        return cb(input);
      });
    });
  });
  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        (0, _utils.check)(matcher, _utils.is.func, "channel.take's matcher argument must be a function");
        cb[_utils.MATCH] = matcher;
      }

      chan.take(cb);
    }
  });
}

}).call(this)}).call(this,require('_process'))
},{"./buffers":559,"./scheduler":567,"./utils":568,"_process":557}],561:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.asEffect = exports.takem = undefined;
exports.take = take;
exports.put = put;
exports.all = all;
exports.race = race;
exports.call = call;
exports.apply = apply;
exports.cps = cps;
exports.fork = fork;
exports.spawn = spawn;
exports.join = join;
exports.cancel = cancel;
exports.select = select;
exports.actionChannel = actionChannel;
exports.cancelled = cancelled;
exports.flush = flush;
exports.getContext = getContext;
exports.setContext = setContext;
exports.takeEvery = takeEvery;
exports.takeLatest = takeLatest;
exports.throttle = throttle;

var _utils = require('./utils');

var _sagaHelpers = require('./sagaHelpers');

var IO = (0, _utils.sym)('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';
var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (_utils.is.pattern(patternOrChannel)) {
    return effect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (_utils.is.channel(patternOrChannel)) {
    return effect(TAKE, {
      channel: patternOrChannel
    });
  }

  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/exports.takem = (0, _utils.deprecate)(take.maybe, /*#__PURE__*/(0, _utils.updateIncentive)('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
  } else {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }

  return effect(PUT, {
    channel: channel,
    action: action
  });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = (0, _utils.deprecate)(put.resolve, (0, _utils.updateIncentive)('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');
  var context = null;

  if (_utils.is.array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }

  if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
    fn = context[fn];
  }

  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');
  return {
    context: context,
    fn: fn,
    args: args
  };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return effect(CALL, getFnCallDesc('apply', {
    context: context,
    fn: fn
  }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }

  var task = tasks[0];
  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
  (0, _utils.check)(task, _utils.is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }

  var task = tasks[0];

  if (tasks.length === 1) {
    (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
    (0, _utils.check)(task, _utils.is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }

  return effect(CANCEL, task || _utils.SELF_CANCELLATION);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = _utils.ident;
  } else {
    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }

  return effect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/


function actionChannel(pattern, buffer) {
  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');

  if (arguments.length > 1) {
    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }

  return effect(ACTION_CHANNEL, {
    pattern: pattern,
    buffer: buffer
  });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  (0, _utils.check)(prop, _utils.is.string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = exports.asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  all: createAsEffectType(ALL),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH),
  getContext: createAsEffectType(GET_CONTEXT),
  setContext: createAsEffectType(SET_CONTEXT)
};

},{"./sagaHelpers":563,"./utils":568}],562:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.qEnd = undefined;
exports.safeName = safeName;
exports.default = fsmIterator;

var _utils = require('../utils');

var done = {
  done: true,
  value: undefined
};
var qEnd = exports.qEnd = {};

function safeName(patternOrChannel) {
  if (_utils.is.channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';
  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return (0, _utils.makeIterator)(next, function (error) {
    return next(null, error);
  }, name, true);
}

},{"../utils":568}],563:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.throttleHelper = exports.takeLatestHelper = exports.takeEveryHelper = exports.throttle = exports.takeLatest = exports.takeEvery = undefined;

var _takeEvery = require('./takeEvery');

var _takeEvery2 = _interopRequireDefault(_takeEvery);

var _takeLatest = require('./takeLatest');

var _takeLatest2 = _interopRequireDefault(_takeLatest);

var _throttle = require('./throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _utils = require('../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/(0, _utils.deprecate)(_takeEvery2.default, /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/(0, _utils.deprecate)(_takeLatest2.default, /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/(0, _utils.deprecate)(_throttle2.default, /*#__PURE__*/deprecationWarning('throttle'));
exports.takeEvery = takeEvery;
exports.takeLatest = takeLatest;
exports.throttle = throttle;
exports.takeEveryHelper = _takeEvery2.default;
exports.takeLatestHelper = _takeLatest2.default;
exports.throttleHelper = _throttle2.default;

},{"../utils":568,"./takeEvery":564,"./takeLatest":565,"./throttle":566}],564:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = takeEvery;

var _fsmIterator = require('./fsmIterator');

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = require('../io');

var _channel = require('../channel');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0, _io.take)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(undefined, [worker].concat(args, [ac]))
    };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
}

},{"../channel":560,"../io":561,"./fsmIterator":562}],565:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = takeLatest;

var _fsmIterator = require('./fsmIterator');

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = require('../io');

var _channel = require('../channel');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0, _io.take)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(undefined, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: (0, _io.cancel)(task)
    };
  };

  var task = void 0,
      action = void 0;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [_fsmIterator.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
}

},{"../channel":560,"../io":561,"./fsmIterator":562}],566:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = throttle;

var _fsmIterator = require('./fsmIterator');

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = require('../io');

var _channel = require('../channel');

var _buffers = require('../buffers');

var _utils = require('../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;
  var yActionChannel = {
    done: false,
    value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: (0, _io.take)(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(undefined, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: (0, _io.call)(_utils.delay, delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel.END ? [_fsmIterator.qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + (0, _fsmIterator.safeName)(pattern) + ', ' + worker.name + ')');
}

},{"../buffers":559,"../channel":560,"../io":561,"../utils":568,"./fsmIterator":562}],567:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.asap = asap;
exports.suspend = suspend;
exports.flush = flush;
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/


function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task = void 0;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

},{}],568:[function(require,module,exports){
(function (process){(function (){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.check = check;
exports.hasOwn = hasOwn;
exports.remove = remove;
exports.deferred = deferred;
exports.arrayOfDeffered = arrayOfDeffered;
exports.delay = delay;
exports.createMockTask = createMockTask;
exports.autoInc = autoInc;
exports.makeIterator = makeIterator;
exports.log = log;
exports.deprecate = deprecate;

var sym = exports.sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = exports.TASK = sym('TASK');
var HELPER = exports.HELPER = sym('HELPER');
var MATCH = exports.MATCH = sym('MATCH');
var CANCEL = exports.CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = exports.SELF_CANCELLATION = sym('SELF_CANCELLATION');

var konst = exports.konst = function konst(v) {
  return function () {
    return v;
  };
};

var kTrue = exports.kTrue = konst(true);
var kFalse = exports.kFalse = konst(false);

var noop = exports.noop = function noop() {};

var ident = exports.ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = exports.is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};
var object = exports.object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = exports.array = {
  from: function from(obj) {
    var arr = Array(obj.length);

    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }

    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);

  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;

  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function () {
    return ++seed;
  };
}

var uid = exports.uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];
  var iterator = {
    name: name,
    next: next,
    throw: thro,
    return: kReturn
  };

  if (isHelper) {
    iterator[HELPER] = true;
  }

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/


function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  /*eslint-disable no-console*/

  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (process.env.NODE_ENV === 'development') log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = exports.internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
      value: true
    }));
  };
};

var cloneableGenerator = exports.cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};

}).call(this)}).call(this,require('_process'))
},{"_process":557}],569:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}]},{},[380]);
