/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

console.log(JSON.stringify(this, null, 2))

describe('MyAppController', () => {
  var controller;

  //beforeEach(module('MyApp'));
 // beforeEach(() => angular.mock.inject(initController));

  it('can run a test', () => {
    console.log('meta');
  });

  function initController($controller) {
    controller = $controller('MyAppController', {});
  }
});
