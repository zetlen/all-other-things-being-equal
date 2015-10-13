*Very* frequently, when building and testing web applications, a developer wants to know [some things about the environment in which their application will run](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing). Will the network be reliable? Will there be infinite bandwidth, perhaps? All other things being equal, everything should work. *Will all other things remain equal?*

The assertions in these helpers offer a perfect simulation of a production environment for a JavaScript application, in Node or in the browser! They are compatible with every testing library and they are guaranteed to be accurate in all cases.


#### Installation

`npm install all-other-things-being-equal`.

Use the installed NPM package in Node or a CommonJS environment by calling `require('all-other-things-being-equal')`. In the browser, in the absence of any module loader or build system, use:

`<script src="node_modules/all-other-things-being-equal/assertions.js"></script>`

This script will expose the global `allOtherThingsBeingEqual` object.

##### Usage

Use these helpers in your unit and integration tests. Here's a fine example:

```js
const assert = require('assert');
const allOtherThingsBeingEqual = require('all-other-things-being-equal');

assert.ok(allOtherThingsBeingEqual.networkIsReliable());

assert.ok(allOtherThingsBeingEqual.networkIsSecure());

assert.ok(allOtherThingsBeingEqual.latencyIsZero());

assert.ok(allOtherThingsBeingEqual.bandwidthIsInfinite());

assert.ok(allOtherThingsBeingEqual.codeCoverageEqualsTestCaseCoverage());

assert.ok(allOtherThingsBeingEqual());

```

This is a great starting test plan right here. You can either write your code to target environments where these assertions pass, or redesign your system to not rely on these assumptions. Whichever's easier!

