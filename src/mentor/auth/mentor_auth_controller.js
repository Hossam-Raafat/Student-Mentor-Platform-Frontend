angular.module('askMak').controller('mentorAuthCtrl', function($scope, $auth) {
        $scope.login = function() {
          $auth.submitLogin($scope.loginForm,{
              config: 'mentor' // dont forget to add {config: 'mentor'}
          })
            .then(function(resp) {
              console.log(resp)
            })
            .catch(function(resp) {
              console.log(resp)
            });
        };
  });