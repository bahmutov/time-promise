var time = require('./index');
var q = require('q');

function syncFunction() {
  console.log('sync function');
  return 788;
}

function asyncFunction() {
  var defer = q.defer();
  setTimeout(function () {
    defer.resolve(330);
  }, 1000);
  return defer.promise;
}

gt.test('basic', function () {
  gt.func(time, 'time is a function');
});

gt.module('timing sync function');

gt.test('sync function', function () {
  gt.equal(time(syncFunction)(), 788, 'returns correct value');
});

gt.module('timing promise-returning function');

gt.async('async function', function () {
  var promise = time(asyncFunction)();
  promise.then(function (value) {
    gt.equal(value, 330, 'correct return value');
  }).finally(gt.start);
});
