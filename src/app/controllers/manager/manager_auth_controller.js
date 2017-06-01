angular.module('alMakinah').controller('managerAuthController', function ($scope, $auth, $state, $window, AuthService) {

  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'manager' // dont forget to add {config: 'manager'}
    })
    .then(function (resp) {
      console.log(resp);
      AuthService.loginManager(resp);
      $state.go('managerLayout.managerDash');
    })
    .catch(function (resp) {
      console.log(resp);
      $window.alert('Wrong Credintials!');
    });
  };
});
