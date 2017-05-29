angular.module('askMak').controller('managerAuthController', function ($scope, $auth, $state, $window) {
  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'manager' // dont forget to add {config: 'manager'}
    })
    .then(function (resp) {
      console.log(resp);
      $state.go('managerInvite');
    })
    .catch(function (resp) {
      console.log(resp);
      $window.alert('Wrong Credintials!');
    });
  };
});

