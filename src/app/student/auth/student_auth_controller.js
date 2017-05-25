angular.module('askMak').controller('studentAuthController', function ($scope, $auth, $state) {
  $scope.login = function () {
    $auth.submitLogin($scope.loginForm, {
      config: 'student' // dont forget to add {config: 'student'}
    })
      .then(function (resp) {
        console.log(resp);
        $state.go('studentDash')
      })
      .catch(function (resp) {
        console.log(resp);
      });
  };
});
