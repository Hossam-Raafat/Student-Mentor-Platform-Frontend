angular.module('alMakinah').controller('studentLogController', function($scope, $auth, $http, AuthService, $state, server) {

  // listening to the student login broadcast which is triggered from the auth service

  AuthService.logged_in_user().then(function(user){
    // logged in
    if(user.configName == "student")
      $scope.student_logged_in = true;
    else
      //$state.go('student')
     console.log('not logged in')
  }, function(){
    //not logged in
    //$state.go('student')
  })

  $scope.$on('studentLoggedIn', function () {
    console.log('inside');
    $scope.student_logged_in = true;
  });

  // signout button
  $scope.signOutUser = function () {
    $auth.signOut()
    .then(function (resp) {
     // handle success response
      $scope.student_logged_in = false;
      console.log(resp);
      $state.go('studentLayout.student')
    })
    .catch(function (resp) {
     // handle error response
     console.log(resp);
    });
 };
});
