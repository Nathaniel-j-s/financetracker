angular.module('personalFinance').service('mainSrvc', function($http) {

  this.getInfo = function(selectedUser) {
    return $http( {
      method: 'GET',
      url: 'http://localhost:5000/api/financial'
      // data: $.param({ "user": selectedUser })
    });
  };



})
