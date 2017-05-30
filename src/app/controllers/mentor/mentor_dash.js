angular.module('alMakinah').controller('mentorDashController', function ($scope, $http, AuthService, $stateParams) {
  $scope.unclaimedQuestions = [];

  AuthService.logged_in_user().then(function(user){
    $scope.mentor = user;
  });

  $http.get('http://localhost:3000/mentor/questions.json', { params: { filter: 'unclaimed'} } )
  .then(
      function(success) {
        console.log(success)
        $scope.unclaimedQuestions = success.data;
        console.log($scope.unclaimedQuestions)
      },
      function(err) {
        console.log(err)
      }
  )
  $scope.editStatus = function(status, id) {
    $http.put('http://localhost:3000/mentor/mentors/' + id + '.json', {mentor:{status: status}})
    .then(function(success) {
      console.log(success)
    }, function (error) {
      console.log(error)
    });
  }
});
