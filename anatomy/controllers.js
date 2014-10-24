'user strict';

var myApp = angular.module('myApp', []);

myApp.controller('TextController', function($scope) {
    var someText = {message: 'You have started your journey'}
    $scope.someText = someText;
});
