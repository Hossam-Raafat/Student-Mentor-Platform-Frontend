angular.module('askMak').controller('studentAuthCtrl', function($scope, $auth) {
        $scope.login = function() {
          $auth.submitLogin($scope.loginForm,{
              config: 'student' // dont forget to add {config: 'student'}
          })
            .then(function(resp) {
              console.log(resp)
            })
            .catch(function(resp) {
              console.log(resp)
            });
        };
  });