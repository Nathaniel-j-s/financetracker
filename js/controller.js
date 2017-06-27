angular.module('personalFinance').controller('mainCtrl', function($scope, mainSrvc) {

  $scope.getInfo = function() {
    mainSrvc.getInfo().then(function(response) {
      $scope.info = response.data;
    });
  };
  console.log($scope.info);
})
