angular.module('askMak').controller('studentAcceptCtrl', function($scope, $auth, $http, $stateParams) {
      
        $scope.accept = function(){
          var x ={
            password: $scope.acceptForm.password,
            password_confirmation: $scope.acceptForm.passwordConfirmation,
            invitation_token: $stateParams.token // to send the token with invitee's new password
          }
          $http.put('http://localhost:3000/student/auth/invitation',{student: x}).then(
            // we used 'put' because the student was already generated, but
            // we still need his acceptance to the invitation
            // also you can find it in the 'invitation/edit.html.erb' .
            //so if you check rails routes, and look for 'put' in the
            // invitation routes, you should find '/auth/invitation'
            function(success){
              console.log(success);
              // here we will need to redirect the new student to his dashboard/homepage
            },
            function(error){
              console.log('ERROR');
            }
            );

        };


  });