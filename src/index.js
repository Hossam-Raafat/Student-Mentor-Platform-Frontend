
var app = angular.module('askMak', ['ng-token-auth'])
	.config(function($authProvider) {
		$authProvider.configure({
			apiUrl: 'http://localhost:3000'
		});
	});

  app.controller('askMakCtrl', function($scope, $auth) {
    $scope.login = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          console.log(resp)
        })
        .catch(function(resp) {
					console.log(resp)
        });
    };
  });
