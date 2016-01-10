angular.module('foodbnb.host', [])
.controller('hostCtrl', function ($scope, Events) {
  $scope.event = {};
  $scope.newEvent = function () {
    console.log($scope.event);
    Events.addOne($scope.event)
    .then(function (response) {
      console.log("Successful Post");   
    });
  };
  //Need a new function to format the address into
  //String with plus sign instead of spaces
  //No need for commas

})
.controller('formCtrl', function ($scope) {

})

;