angular.module('askMak').controller('mentorAuthController', function ($scope, $auth, AuthService) {
  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'mentor' // dont forget to add {config: 'student'}
    })
      .then(function (resp) {
        console.log(resp);
        AuthService.loginMentor(resp);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  };
});
