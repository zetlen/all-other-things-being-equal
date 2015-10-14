(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.allOtherThingsBeingEqual = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function allOtherThingsBeingEqual() {
    return false;
}

allOtherThingsBeingEqual.networkIsReliable =
  require('./network-is-reliable');

allOtherThingsBeingEqual.networkIsSecure =
  require('./network-is-secure');

allOtherThingsBeingEqual.latencyIsZero =
  require('./latency-is-zero');

allOtherThingsBeingEqual.bandwidthIsInfinite =
  require('./bandwidth-is-infinite');

allOtherThingsBeingEqual.codeCoverageEqualsTestCaseCoverage =
  require('./code-coverage-equals-test-case-coverage');

module.exports = function() {
  return "wat";
};

},{"./bandwidth-is-infinite":2,"./code-coverage-equals-test-case-coverage":3,"./latency-is-zero":4,"./network-is-reliable":5,"./network-is-secure":6}],2:[function(require,module,exports){
module.exports = function() {
  return false;
}

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],6:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[1])(1)
});