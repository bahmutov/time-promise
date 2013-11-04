# time-promise

Timing sync or promise-returning functions.

[![NPM][time-promise-icon]][time-promise-url]

[![Build status][time-promise-ci-image]][time-promise-ci-url]
[![dependencies][time-promise-dependencies-image]][time-promise-dependencies-url]
[![devdependencies][time-promise-devdependencies-image]][time-promise-devdependencies-url]
[![endorse][endorse-image]][endorse-url]

## Install

    npm install time-promise --save

## Example

```javascript
var time = require('time-promise');

var value = time(syncFunction)();
// prints timing, returns value from syncFunction

time(promiseReturningFunction)().then(...)
// prints timing after the function executes
// returns the original promise
```

## Small print

Author: Gleb Bahmutov &copy; 2013

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[time-promise-icon]: https://nodei.co/npm/time-promise.png?downloads=true
[time-promise-url]: https://npmjs.org/package/time-promise
[time-promise-ci-image]: https://travis-ci.org/bahmutov/time-promise.png?branch=master
[time-promise-ci-url]: https://travis-ci.org/bahmutov/time-promise
[time-promise-dependencies-image]: https://david-dm.org/bahmutov/time-promise.png
[time-promise-dependencies-url]: https://david-dm.org/bahmutov/time-promise
[time-promise-devdependencies-image]: https://david-dm.org/bahmutov/time-promise/dev-status.png
[time-promise-devdependencies-url]: https://david-dm.org/bahmutov/time-promise#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
