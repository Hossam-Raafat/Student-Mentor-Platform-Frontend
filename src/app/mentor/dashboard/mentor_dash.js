angular.module('askMak').controller('mentorDashController', function ($scope, $http) {
  $scope.resolvedQuestions = [];

  $http.get('http://localhost:3000/mentor/questions.json'
  .then(
      function(success) {
        console.log(success)
        $scope.resolvedQuestions = success.data;
        console.log($scope.resolvedQuestions)
      },
      function(err) {
        console.log(err)
      }
  )

  // $scope.allQuestions = [];

  // $http.get('http://localhost:3000/mentor/questions.json').then(
  //     function(success) {
  //       console.log(success)
  //       $scope.allQuestions = success.data;
  //       console.log($scope.allQuestions)
  //     },
  //     function(err) {
  //       console.log(err)
  //     }
  //   );
);
});
