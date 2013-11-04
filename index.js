var q = require('q');
var _ = require('lodash');

function time(fn) {
  return function () {
    var start = new Date();

    var result = fn.apply(null, _.toArray(arguments));

    function printTiming() {
      var end = new Date();
      console.log(fn.name, 'took', end - start, 'ms');
      return result;
    }

    if (q.isPromise(result)) {
      return result.then(printTiming);
    } else {
      return printTiming();
    }
  };
}

module.exports = time;
