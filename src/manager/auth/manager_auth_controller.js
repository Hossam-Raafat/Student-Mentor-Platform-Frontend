angular.module('askMak').controller('managerAuthCtrl', function($scope, $auth) {
        $scope.login = function() {
          $auth.submitLogin($scope.loginForm,{
              config: 'manager' // dont forget to add {config: 'manager'}
          })
            .then(function(resp) {
              console.log(resp)
            })
            .catch(function(resp) {
              console.log(resp)
            });
        };

  });

/*
$scope.invite = function(){
  $http.post('local', {email: "taha@email.com"}).then()
}

iin Rails:

Manager Controller

def invite
  params[:email] (make sure you permit it)
end

*/