angular.module('alMakinah').controller('managerInviteCtrl', function($scope, $auth, $http, server) {

        // $auth.validateUser()
        // .then(function(user) {
        //   console.log(user)
        // });
        // use this in the run method of angular , if im a manager, ..

        $scope.inviteMentor = function(){
          var x ={
            email: $scope.mentorEmail
          }
          $http.post(server + '/mentor/auth/invitation',{mentor: x}).then(
            function(success){
              console.log(success);
            },
            function(error){
              console.log('ERROR');
            }
            );

        };

        $scope.inviteStudent = function(){
          var x ={
            email: $scope.studentEmail,
            program: $scope.studentProgram
          }
          $http.post(server + '/student/auth/invitation',{student: x}).then(
            function(success){
              console.log(success);
            },
            function(error){
              console.log('ERROR');
            }
            );

        };

  });
