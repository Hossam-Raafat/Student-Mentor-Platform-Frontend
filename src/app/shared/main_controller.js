angular.module('askMak').controller('mainController', function($scope, $auth, $http) {
  $scope.signOutUser = function () {
  $auth.signOut()
    .then(function(resp) {
     // handle success response
     $scope.isUserLoggedIn = true;
     console.log(resp)
    })
    .catch(function(resp) {
     // handle error response
     console.log(resp)
   });
  }
});
