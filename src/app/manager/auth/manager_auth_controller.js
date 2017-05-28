angular.module('askMak').controller('managerAuthController', function ($scope, $auth, AuthService) {
  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'manager' // dont forget to add {config: 'manager'}
    })
    .then(function (resp) {
      console.log(resp);
      AuthService.loginManager(resp);
    })
    .catch(function (resp) {
      console.log(resp);
    });
  };
});
