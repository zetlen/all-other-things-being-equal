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

if (typeof module !== "undefined") {
    module.exports = allOtherThingsBeingEqual;
}
