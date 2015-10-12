function allOtherThingsBeingEqual() {
  return true;
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

if (typeof module !== "undefined") {
  module.exports = allOtherThingsBeingEqual;
}
