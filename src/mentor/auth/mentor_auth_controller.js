angular.module('askMak')
.controller('studentAuthCtrl', function($scope, $auth) {
        $scope.login = function() {
          $auth.submitLogin($scope.loginForm,{config: 'manager'})
            .then(function(resp) {
              console.log(resp)
            })
            .catch(function(resp) {
              console.log(resp)
            });
        };
  });