angular.module('personalFinance').controller('mainCtrl', function($scope, mainSrvc) {

  $scope.getInfo = function() {
    mainSrvc.getInfo().then(function(response) {
      $scope.info = response.data;
    });
  };

  $scope.getInfo();
  console.log($scope.info);
})
