angular.module('alMakinah').controller('mentorLogController', function ($scope, $auth, $http, AuthService) {

  // listening to the student login broadcast which is triggered from the auth service
  $scope.$on('mentorLoggedIn', function () {
    $scope.mentor_logged_in = true;
  });

  // signout button
  $scope.signOutUser = function () {
    $auth.signOut()
    .then(function (resp) {
     // handle success response
      $scope.mentor_logged_in = false;
      console.log(resp);
    })
    .catch(function (resp) {
      // handle error response
      console.log(resp);
    });
  };
});
