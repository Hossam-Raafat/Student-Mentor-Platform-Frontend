angular.module('askMak').controller('managerLogController', function ($scope, $auth, $http, AuthService) {

  // listening to the student login broadcast which is triggered from the auth service
  $scope.$on('managerLoggedIn', function () {
    $scope.manager_logged_in = true;
  });

  // signout button
  $scope.signOutUser = function () {
    $auth.signOut()
     .then(function (resp) {
     // handle success response
     $scope.manager_logged_in = false;
     console.log(resp);
    })
     .catch(function (resp) {
     // handle error response
     console.log(resp);
   });
  }
});
