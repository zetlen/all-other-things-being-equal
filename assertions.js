var bandwidthIsInfinit = require('./bandwidth-is-infinite');
var networkIsReliable = require('./network-is-reliable');
var networkIsSecure = require('./network-is-secure');
var latencyIsZero = require('./latency-is-zero');
var bandwidthIsInfinite = require('./bandwidth-is-infinite');
var codeCoverageEqualsTestCaseCoverage = require('./code-coverage-equals-test-case-coverage');


function allOtherThingsBeingEqual() {
    return false;
}

allOtherThingsBeingEqual.networkIsReliable = function() {
    return false;
}

allOtherThingsBeingEqual.networkIsSecure = function() {
    return false;
}

allOtherThingsBeingEqual.latencyIsZero = function() {
    return false;
}

allOtherThingsBeingEqual.bandwidthIsInfinite = function() {
    return false;
}

allOtherThingsBeingEqual.codeCoverageEqualsTestCaseCoverage = function () {
    return false;
}

if (typeof module !== "undefined") {
    module.exports = allOtherThingsBeingEqual;
}
