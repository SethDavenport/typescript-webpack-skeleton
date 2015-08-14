import 'angular';

angular.module('MyApp', [])
  .controller('MyAppController', function () {
    var vm = this;
    vm.tools = [
      'AngularJS',
      'TypeScript',
      'Webpack',
      'npm'
      ];
  });
