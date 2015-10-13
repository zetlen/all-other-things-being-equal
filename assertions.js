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
    return networkIsReliable();
}

allOtherThingsBeingEqual.networkIsSecure = function() {
    return networkIsSecure();
}

allOtherThingsBeingEqual.latencyIsZero = function() {
    return latencyIsZero();
}

allOtherThingsBeingEqual.bandwidthIsInfinite = function() {
    return bandwidthIsInfinite();
}

allOtherThingsBeingEqual.codeCoverageEqualsTestCaseCoverage = function () {
    return codeCoverageEqualsTestCaseCoverage();
}

if (typeof module !== "undefined") {
    module.exports = allOtherThingsBeingEqual;
}
