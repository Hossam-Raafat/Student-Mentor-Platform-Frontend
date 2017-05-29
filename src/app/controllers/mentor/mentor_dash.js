angular.module('alMakinah').controller('mentorDashController', function ($scope, $http) {
  $scope.unclaimedQuestions = [];

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
    $scope.currentMentorQuestions = [];
    $http.get('http://localhost:3000/mentor/questions.json')
    .then(function (success) {
        $scope.currentMentorQuestions = success.data;
        console.log(success);
      },
      function (err) {
        console.log(err);
      }
    );
});
