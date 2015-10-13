'use strict';
const test = require('tape-catch');
const allOtherThingsBeingEqual = require('./');

test('all methods available from root', assert => {
    assert.plan(5);
[
    'networkIsReliable',
    'networkIsSecure',
    'latencyIsZero',
    'bandwidthIsInfinite',
    'codeCoverageEqualsTestCaseCoverage'
].forEach(m => assert.notOk(allOtherThingsBeingEqual[m](), m));
});

test('all methods available separately', assert => {
    assert.plan(5);
[
    'network-is-reliable',
    'network-is-secure',
    'latency-is-zero',
    'bandwidth-is-infinite',
    'code-coverage-equals-test-case-coverage'
].forEach(m => assert.notOk(require('./' + m)(), m));
});

test('all other things being equal', assert => {
    assert.plan(1);
assert.notOk(allOtherThingsBeingEqual(), 'nope');
});

